# Dharma Khadka — DevOps Portfolio

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)
![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=flat-square&logo=jenkins&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> A personal portfolio website built with React, designed to showcase DevOps skills, projects, and experience. Includes a full CI/CD pipeline powered by Jenkins and Docker.

---

## Preview

```
┌─────────────────────────────────────────────┐
│  DK.                    about skills contact │
│                                             │
│  Building pipelines                         │
│  that never sleep.       ┌───────────────┐  │
│                          │ ci-pipeline   │  │
│  DevOps Engineer         │ ✔ Code pushed │  │
│                          │ ✔ Tests pass  │  │
│  [View Projects]         │ → Deploying.. │  │
│  [Get in Touch]          └───────────────┘  │
└─────────────────────────────────────────────┘
```

---

## Features

- Built with **React 18** — fast, component-based UI
- Dark terminal aesthetic with custom animated cursor
- Animated **live terminal** on the hero section
- Fully **responsive** across all screen sizes
- **Jenkins CI/CD pipeline** — auto build, test & deploy on push
- **Dockerised** with multi-stage build (Node → Nginx)
- **Contact form** ready to connect to any form backend

---

## Project Structure

```
portfolio-final/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── Navbar.js           # Fixed navigation with scroll effect
│   │   ├── Hero.js             # Hero section with animated terminal
│   │   ├── Skills.js           # DevOps skills grid
│   │   ├── Projects.js         # Project showcase cards
│   │   ├── Contact.js          # Contact form
│   │   └── Footer.js           # Footer with links
│   ├── App.js                  # Root component
│   ├── index.js                # React entry point
│   └── index.css               # Global styles & animations
├── Jenkinsfile                 # CI/CD pipeline definition
├── Dockerfile                  # Multi-stage Docker build
├── package.json
└── README.md
```

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Frontend | React 18, CSS3 |
| Fonts | Syne (display), DM Mono (code) |
| CI/CD | Jenkins Pipeline |
| Containerisation | Docker, Nginx |
| Version Control | Git, GitHub |

---

##  Getting Started

### Prerequisites
- Node.js >= 18
- npm >= 9

### Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/dharmakhadka/dharma-portfolio.git
cd dharma-portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

Output is in the `/build` folder — ready to serve with any static file server.

---

##  Docker

```bash
# Build the image
docker build -t dharma-portfolio .

# Run the container
docker run -p 80:80 dharma-portfolio
```

Open [http://localhost](http://localhost) — served by Nginx.

---

## Jenkins CI/CD Pipeline

The `Jenkinsfile` defines a 6-stage pipeline:

```
Checkout → Install → Test → Build → Archive → Deploy
```

| Stage | Description |
|-------|-------------|
| **Checkout** | Pulls latest code from GitHub |
| **Install** | Runs `npm install` |
| **Test** | Runs test suite |
| **Build** | Creates production build with `npm run build` |
| **Archive** | Saves build artifacts in Jenkins |
| **Deploy** | Deploys to server (configure your command) |

### Jenkins Setup

1. **New Item** → Pipeline
2. Pipeline script from **SCM → Git**
3. Paste your GitHub repo URL
4. Branch: `*/main` | Script Path: `Jenkinsfile`
5. Click **Build Now** 

### GitHub Webhook (auto-trigger on push)

In your GitHub repo → **Settings → Webhooks → Add webhook**

```
Payload URL : http://YOUR_JENKINS_IP:8080/github-webhook/
Content type: application/json
Event       : Just the push event
```

---

## Customisation

To make this your own, update the following files:

| File | What to change |
|------|---------------|
| `src/components/Hero.js` | Your name, title, and stats |
| `src/components/Skills.js` | Your tech stack |
| `src/components/Projects.js` | Your real projects and GitHub links |
| `src/components/Contact.js` | Your email, GitHub, location |
| `src/components/Footer.js` | Your GitHub and LinkedIn URLs |

---

## Author

**Dharma Khadka**
- GitHub: [@dharmakhadka](https://github.com/dharmakhadka)
- Location: Kathmandu, Nepal 🇳🇵

---

