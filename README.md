# Portfolio — Faty Rokhy Niasse
> Développeuse Full Stack · Dakar, Sénégal

Stack : **React 18 + Vite** (frontend) · **Node.js / Express** (backend) · **Swagger UI** (docs API)

---

## Démarrage rapide

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
# API  → http://localhost:5000
# Docs → http://localhost:5000/api/docs
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
# Site → http://localhost:5173
```

---

## Personnalisation
Tout le contenu est dans **`backend/src/data/portfolio.js`** — un seul fichier à éditer.

---

## Déploiement (gratuit)

| | Service | Config |
|---|---|---|
| **Frontend** | Vercel | Root: `frontend` · Framework: Vite · Env: `VITE_API_URL` |
| **Backend** | Render | Root: `backend` · Start: `node src/server.js` · Env: `FRONTEND_URL` |

### Étapes
1. Pousser le projet sur GitHub
2. **Render** → New Web Service → sélectionner `backend/` → noter l'URL fournie
3. **Vercel** → New Project → sélectionner `frontend/` → ajouter `VITE_API_URL=https://xxx.onrender.com`
4. ✅ En ligne !

---

## API Endpoints

| Méthode | Route | Description |
|---|---|---|
| GET | `/api/portfolio` | Toutes les données |
| GET | `/api/portfolio/profile` | Profil |
| GET | `/api/portfolio/skills` | Compétences |
| GET | `/api/portfolio/projects` | Projets (`?featured=true`, `?category=Backend`) |
| GET | `/api/portfolio/projects/:id` | Projet par ID |
| GET | `/api/portfolio/stats` | Statistiques |
| POST | `/api/contact` | Envoyer un message |
| GET | `/api/docs` | Swagger UI |
| GET | `/health` | Health check |
