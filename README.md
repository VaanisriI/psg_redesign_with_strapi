# Project Setup: Astro + Strapi

This project is split into a **Frontend** (Astro) and a **Backend** (Strapi).

## 🚀 Getting Started

### 1. Backend (Strapi)
The backend is a Strapi 5 application using SQLite.
- **Location:** `./backend`
- **Commands:**
  - `cd backend`
  - `npm run develop` (to start in development mode)
- **Admin Panel:** [http://localhost:1337/admin](http://localhost:1337/admin)

### 2. Frontend (Astro)
The frontend is built with Astro 4 and Tailwind CSS.
- **Location:** `./frontend`
- **Commands:**
  - `cd frontend`
  - `npm run dev`
- **URL:** [http://localhost:4321](http://localhost:4321)

## 📁 Project Structure

- `frontend/`: Astro project with Tailwind CSS setup.
- `backend/`: Strapi CMS with a pre-configured `Article` collection type.

## 🛠️ Collection Details Updated
I have added an **Article** collection type to the backend with the following fields:
- `title` (Short Text)
- `content` (Blocks)
- `slug` (UID)

You can find the schema at `backend/src/api/article/content-types/article/schema.json`.
