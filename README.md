
# 🛒 E-Commerce Web Application

**Full-Stack | React + Strapi (Headless CMS)**

A production-ready **full-stack e-commerce application** built using **React** for the frontend and **Strapi** as a headless CMS backend.
The project follows a **modern, scalable architecture** with a clear separation of concerns.

---

## 🚀 Live Deployment

> ⚠️ Add live URLs here once deployed

* **Frontend**: `https://localhost:3000`
* **Backend (API)**: `https://localhost:5000`
* **Admin Panel**: `https://localhost:1337/admin`

---

## 🧱 Project Architecture

```
Client (React)  ⇄  Strapi API  ⇄  Database
```

* **Frontend**: Handles UI & user interactions
* **Backend**: Manages products, users, orders, and admin operations
* **Database**: Stores application data

---

## 📁 Folder Structure

```
E-Commerce/
├── Client/        # React frontend
├── api/           # Strapi backend
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

### Frontend

* React.js
* Axios
* CSS

### Backend

* Strapi (Headless CMS)
* Node.js
* REST APIs
* MongoDB / PostgreSQL

---

## 🧪 Local Development Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jabir-05/E-Commerce-.git
cd E-Commerce-
```

---

### 2️⃣ Backend Setup (Strapi)

```bash
cd api
npm install
```

Create `.env` file:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_api_token_salt
ADMIN_JWT_SECRET=your_admin_jwt_secret
JWT_SECRET=your_jwt_secret
DATABASE_URL=your_database_url
```

Start backend:

```bash
npm run develop
```

Backend runs at:

```
http://localhost:1337
```

Admin panel:

```
http://localhost:1337/admin
```

---

### 3️⃣ Frontend Setup (React)

```bash
cd ../Client
npm install
npm start
```

Frontend runs at:

```
http://localhost:3000
```

---

## 🔗 Frontend ↔ Backend Integration

* Frontend communicates with Strapi via **REST APIs**
* Axios handles HTTP requests

Example API call:

```js
GET http://localhost:1337/api/products
```

Ensure **CORS is enabled** in Strapi for frontend access.

---

## 📦 Production Build

### Backend (Strapi)

```bash
cd api
npm run build
npm run start
```

---

### Frontend (React)

```bash
cd Client
npm run build
```

The optimized production build will be created in:

```
Client/build
```

---

## ☁️ Deployment Guide

### Backend Deployment Options

* Strapi Cloud
* Render
* Railway
* VPS (DigitalOcean / AWS EC2)
* Docker

Deploy using Strapi CLI:

```bash
yarn strapi deploy
```

---

### Frontend Deployment Options

* Netlify
* Vercel
* Render
* AWS S3 + CloudFront

Upload the `build/` folder or connect the repository directly.

---

## 🔐 Security Notes

* Environment variables are **never committed**
* JWT authentication enabled
* Role-based access control via Strapi
* Admin panel secured

---

## ✨ Features

* Product management (Admin)
* Category management
* User authentication
* Cart & order flow
* Headless CMS architecture
* Scalable REST APIs

---

## 📚 Documentation

* [Strapi Documentation](https://docs.strapi.io)
* [React Documentation](https://react.dev)

---

## 📌 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Jabir Imteyaz**
B.Tech CSE | Full-Stack Developer
GitHub: [https://github.com/Jabir-05](https://github.com/Jabir-05)


