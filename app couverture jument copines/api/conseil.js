import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  try {
    const key = process.env.GEMINI_API_KEY;

    // Toutes les données viennent du frontend (localStorage du téléphone)
    const { temp, vent, pluie, name, rules } = req.query;

    if (!rules) {
      return res.status(200).json({
        message: "Aucune règle configurée. Va dans ⚙️ Réglages pour les enregistrer."
      });
    }

    const genAI = new GoogleGenerativeAI(key);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Tu es un assistant équestre. Le cheval s'appelle ${name || "mon cheval"}. Météo actuelle : Température: ${temp}°C, Vent: ${vent}km/h, Pluie: ${pluie}mm. Règles de couverture de la propriétaire : ${rules}. Quelle couverture mettre ce soir ? Réponds brièvement en une ou deux phrases, de façon directe et chaleureuse.`;

    const result = await model.generateContent(prompt);
    const iaText = result.response.text();

    return res.status(200).json({ message: iaText });

  } catch (error) {
    return res.status(200).json({ message: "Erreur : " + error.message });
  }
}
