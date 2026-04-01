# Francis Kativarapu — Portfolio

A personal developer portfolio built with **Node.js**, **Express**, and **Handlebars (HBS)**.

## 🚀 Run Locally

### 1. Install dependencies
```bash
npm install
```

### 2. Start the server
```bash
npm start
```

### 3. Open in browser
```
http://localhost:3000
```

---

## 📁 Project Structure

```
francis-portfolio/
├── server.js              # Express server + all data
├── package.json
├── public/
│   ├── css/style.css      # All styles
│   └── js/main.js         # Theme toggle, animations
└── views/
    ├── layouts/main.hbs   # Base HTML layout
    ├── partials/
    │   ├── navbar.hbs
    │   └── footer.hbs
    ├── home.hbs
    ├── projects.hbs
    ├── project-detail.hbs
    ├── skills.hbs
    ├── contact.hbs
    └── 404.hbs
```

---

## ☁️ Deploy to Render (Free)

1. Push this folder to a GitHub repo
2. Go to render.com → New Web Service
3. Connect your repo and set:
   - Build Command: `npm install`
   - Start Command: `node server.js`
4. Deploy!

---

© 2025 Francis Kativarapu
