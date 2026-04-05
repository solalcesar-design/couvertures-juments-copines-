# 🐴 EquiCover

Application web pour conseiller les cavalières sur quelle couverture mettre à leur cheval selon la météo en temps réel.

## Fonctionnalités

- 🌡️ Météo en temps réel via géolocalisation (Open-Meteo, gratuit)
- 🤖 Conseil IA personnalisé (Gemini)
- 📱 Installable sur iPhone via Safari ("Sur l'écran d'accueil")
- 💾 Règles stockées localement sur le téléphone (pas de base de données)
- ⚙️ Personnalisable : nom du cheval + règles de couverture

## Déploiement sur Vercel

### 1. Fork / clone ce repo sur GitHub

### 2. Importe le repo sur [vercel.com](https://vercel.com)

### 3. Ajoute la variable d'environnement

Dans **Settings → Environment Variables** :

| Nom | Valeur |
|-----|--------|
| `GEMINI_API_KEY` | Ta clé API Gemini (depuis [aistudio.google.com](https://aistudio.google.com)) |

### 4. Déploie !

## Structure

```
/
├── index.html        # Application frontend
├── api/
│   └── conseil.js    # API Vercel (appel Gemini)
└── package.json
```

## Icône iPhone (optionnel)

Place une photo carrée (180x180px min) nommée `icon.jpg` à la racine du projet.

## Premier lancement

1. Entre le nom de ton cheval
2. Décris tes règles de couverture (ex: "De 10 à 15°C mettre la 100g...")
3. Les règles sont sauvegardées sur ton téléphone
4. Consulte l'IA chaque soir pour savoir quelle couverture mettre !
