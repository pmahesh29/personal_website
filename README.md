# Pranav Mahesh - Portfolio Website

[![$ visit site](https://img.shields.io/badge/$_visit_site-www.pranav--mahesh.net-00ff88?style=for-the-badge&logo=gnubash&logoColor=00ff88&labelColor=0d1117&color=1e293b)](https://www.pranavmahesh.com)
## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Custom Domain Setup](#custom-domain-setup)
- [Contact](#contact)

---

## 🎯 About

This is my personal portfolio website built with React, showcasing:

- **Professional Experience:** Internships at Arvest Bank and Tyson Foods in cybersecurity and application support roles
- **Projects:** Open-source cybersecurity platforms, home labs, and security research
- **Skills:** Programming languages, security tools, and technical competencies
- **Education:** Computer Science degree with Cybersecurity concentration from the University of Arkansas

---

## ✨ Features

### 🎨 Modern Design
- **Dark theme** with cybersecurity aesthetic (#00ff88 accent color)
- **Responsive layout** - works seamlessly on desktop, tablet, and mobile
- **Smooth animations** and transitions
- **Clean, professional UI/UX**

### 🚀 Performance
- **Fast loading** with optimized React build
- **SEO-friendly** with proper meta tags
- **HTTPS enabled** for secure browsing
- **Clean URLs** (no hash routing)

### 📱 Sections
- **About:** Professional summary and background
- **Projects:** Detailed project showcases with descriptions and tech stacks
- **Skills:** Technical skills categorized by domain
- **Resume:** Downloadable PDF and scrollable HTML version
- **Contact:** Easy ways to get in touch

### 🔧 Technical Features
- **Client-side routing** with React Router
- **Single Page Application** (SPA) architecture
- **GitHub Pages deployment** with custom domain
- **Floating widgets** for quick access to resume and contact
- **Social media integration** (GitHub, LinkedIn)

---

## 🛠️ Tech Stack

### Frontend
- **React** (v18.x) - UI framework
- **React Router** (v6.x) - Client-side routing
- **CSS3** - Styling with custom dark theme
- **React Icons** - Icon library

### Build & Deployment
- **Create React App** - Build tooling
- **GitHub Pages** - Hosting
- **gh-pages** - Deployment automation



## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pmahesh29/pmahesh29.github.io.git
   cd pmahesh29.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open browser:**
   - Navigate to `http://localhost:3000`
   - The page will reload when you make changes

### Available Scripts

```bash
npm start          # Run development server
npm run build      # Build for production
npm run deploy     # Deploy to GitHub Pages
npm test           # Run tests
```

---

## 📁 Project Structure

```
pmahesh29.github.io/
├── public/
│   ├── index.html                 # HTML template
│   ├── 404.html                   # SPA routing fallback
│   ├── CNAME                      # Custom domain configuration
│   └── Pranav_Mahesh_Resume.pdf   # Resume PDF
├── src/
│   ├── Assets/
│   │   ├── Cyber.jpg
│   │   ├── Fitagotchi.jpg
│   │   ├── Lab.jpg
│   │   ├── Photon.jpg
│   │   └── pranav_photo.jpg
│   ├── CSS/
│   │   ├── About.css
│   │   ├── App.css
│   │   ├── Contact.css
│   │   ├── ContactChatbox.css
│   │   ├── FloatingWidgets.css
│   │   ├── index.css
│   │   ├── Projects.css
│   │   ├── Resume.css
│   │   ├── Skills.css
│   │   └── VideoModal.css
│   ├── js/
│   │   ├── About.js               # About section
│   │   ├── App.js                 # Main app component
│   │   ├── Contact.js             # Contact form
│   │   ├── ContactChatbox.js      # Creating Chatbox
│   │   ├── FloatingWidgets.js     # All widgets
│   │   ├── Projects.js            # Projects showcase
│   │   ├── Resume.js              # Resume page
│   │   ├── Skills.js              # Skills display
│   │   └── VideoModal.js          # Video Player
│   ├── index.js                   # Entry point
├── .gitignore
├── package.json
└── README.md
```

---

## 🌍 Deployment

This site is automatically deployed to GitHub Pages using the `gh-pages` branch.

### Deploy to GitHub Pages

```bash
# Build and deploy in one command
npm run deploy
```

This command:
1. Builds the production version (`npm run build`)
2. Pushes the `build/` folder to the `gh-pages` branch
3. GitHub Pages automatically serves the updated site

---

## 🔧 Custom Domain Setup

This site uses a custom domain: **www.pranav-mahesh.net**

**CNAME Record (for www subdomain):**
```
Type: CNAME
Name: www
Content: pmahesh29.github.io
Proxy: DNS only (gray cloud)
```

### GitHub Pages Configuration

1. Repository Settings → Pages
2. Custom domain: `www.pranavmahesh.com`
3. Enforce HTTPS: ✅ Enabled

### CNAME File

The `public/CNAME` file contains:
```
www.pranav-mahesh.net
```

---

## 📞 Contact

**Pranav Mahesh**

- **Website:** [www.pranavmahesh.com](https://www.pranavmahesh.com)
- **Email:** pranavmiyengar@gmail.com
- **LinkedIn:** [linkedin.com/in/pmahesh29](https://linkedin.com/in/pmahesh29)
- **GitHub:** [github.com/pmahesh29](https://github.com/pmahesh29)

---

<div align="center">
  <p>Made by Pranav Mahesh</p>
  <p>© 2025 Pranav Mahesh. All Rights Reserved.</p>
</div>

