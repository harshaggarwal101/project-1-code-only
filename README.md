# 🌐 Web Accessibility Analyzer

![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)
![Node.js](https://img.shields.io/badge/Backend-Node.js%20%7C%20Express-green)
![React](https://img.shields.io/badge/Frontend-React%20%7C%20Vite-blue)
![Puppeteer](https://img.shields.io/badge/Tool-Puppeteer%20%7C%20Axe--Core-orange)

A powerful **full-stack web application** designed to audit websites for **accessibility compliance (WCAG)**.
This tool automatically detects accessibility violations using **Puppeteer** and **Axe-Core**, providing a detailed issue breakdown, an overall accessibility score, and a downloadable **PDF audit report**.

---

## ✨ Key Features

* **🚀 Automated Audits**
  Instantly analyzes any public URL for accessibility violations using the industry-standard **axe-core** engine.

* **📊 Smart Visualization**
  Displays accessibility health scores with interactive circular progress indicators.

* **📝 Detailed Insights**
  Categorizes issues by impact level (**Critical, Serious, Moderate, Minor**) and highlights the exact DOM elements causing violations.

* **📄 PDF Reporting**
  Generates a professional, downloadable PDF report summarizing all accessibility findings.

* **🎨 Clean & Responsive UI**
  Built with **React + Vite** for a fast, modern, and user-friendly experience.

---

## 🛠️ Tech Stack

### Frontend

* **React (Vite)** – Fast and reactive user interface
* **React Router** – Seamless navigation
* **Axios** – API communication
* **React Circular Progressbar** – Visual score representation

### Backend

* **Node.js & Express.js** – REST API handling
* **Puppeteer** – Headless browser automation
* **Axe-Core** – Accessibility testing engine
* **PDFKit** – Server-side PDF generation

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

* Node.js (v16 or higher)
* npm (Node Package Manager)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/harshaggarwal101/web-accessibility-analyzer.git
cd web-accessibility-analyzer
```

---

### 2️⃣ Backend Setup

Navigate to the backend folder, install dependencies, and start the server:

```bash
cd backend
npm install
npm start
```

The backend server will run at **[http://localhost:3000](http://localhost:3000)**.

---

### 3️⃣ Frontend Setup

Open a new terminal and run:

```bash
cd frontend
npm install
npm run dev
```

The frontend will start at **[http://localhost:5173](http://localhost:5173)**.

---

## 📖 Usage Guide

1. **Enter URL**
   Paste a full URL (e.g., `https://example.com`) on the home page.

2. **Analyze**
   Click the **Analyze** button to start the accessibility audit.

3. **View Results**
   After analysis, you’ll see:

   * Overall accessibility score
   * List of violations with descriptions and help text
   * Highlighted HTML elements causing issues

4. **Download Report**
   Click **Download PDF Report** to save a detailed audit summary.

---

## 🔌 API Reference

### `POST /analyze`

Runs the accessibility audit using Puppeteer and Axe-Core.

**Request Body**

```json
{
  "url": "https://target-website.com"
}
```

**Response**
JSON object containing violations, passes, and incomplete checks.

---

### `POST /report`

Generates a PDF accessibility report.

**Request Body**

```json
{
  "url": "https://target-website.com",
  "results": { ... }
}
```

**Response**
Binary PDF file stream (`accessibility-report.pdf`).

---

## 👨‍💻 Author

**Harsh Aggarwal**

* GitHub
* LinkedIn

---

## 📄 License

This project is licensed under the **ISC License**.
