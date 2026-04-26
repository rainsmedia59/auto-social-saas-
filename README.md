# 🚀 Auto Social SaaS

AI-powered multi-platform content automation system.

---

# ⚙️ DEPLOYMENT

## Backend (Railway)
1. Push repo to GitHub
2. Connect Railway
3. Set root: /backend
4. Start command:
   node server.js

---

## Frontend (Vercel)
1. Import repo
2. Set root: /frontend
3. Deploy

---

# 🔑 API USAGE

POST /api/post

Headers:
x-api-key: demo_key_123

Body:
{
  "title": "",
  "content": "",
  "url": "",
  "category": ""
}
