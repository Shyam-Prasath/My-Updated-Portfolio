# 🚀 S Shyam Prasath — Portfolio

A modern, responsive, and performance-focused personal portfolio built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
This website showcases my **skills, experience, projects, awards, and contact information** with a clean UI and smooth interactions.

---

## 🌐 Live Preview
> (Add deployment link once deployed)
```

[https://your-live-link.vercel.app](https://your-live-link.vercel.app)

````

---

## ✨ Features

- ⚡ Built with **Next.js App Router**
- 🎨 Fully responsive modern UI
- 🌙 Dark mode support (system-aware)
- 🧠 Skills & tech stack showcase
- 🏆 Awards & competitions section
- 📬 Contact form with email integration
- 🔝 Smooth scroll-to-top interaction
- 💎 Clean folder structure & scalable architecture

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Theme Handling:** next-themes
- **Icons:** React Icons
- **Email Service:** Nodemailer (API Route)
- **Formatting:** Prettier + Tailwind Plugin

---

## 📂 Project Structure

```txt
.
├── app/                 # App Router (pages & layouts)
├── components/          # Reusable UI components
├── lib/                 # Utility functions
├── public/              # Static assets (images, icons)
├── styles/              # Global styles
├── types/               # TypeScript type definitions
├── .env                 # Environment variables (not committed)
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind setup
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata & scripts
````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Shyam-Prasath/My-Updated-Portfolio.git
cd My-Updated-Portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env` file

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
RECEIVER_EMAIL=your_email@gmail.com
```

> ⚠️ Use **Gmail App Password**, not your Gmail password.

---

## ▶️ Run Locally

```bash
npm run dev
```

Open:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 📬 Contact Form

The contact form sends emails using:

* **Next.js API Route**
* **Nodemailer**
* Secure environment variables

All messages are delivered directly to your configured email.

---

## 🚀 Deployment

Recommended platform:

* **Vercel** (Best for Next.js)

Steps:

1. Push repo to GitHub
2. Import repo in Vercel
3. Add environment variables
4. Deploy 🎉

---
