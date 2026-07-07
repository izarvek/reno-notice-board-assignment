# Reno Notice Board Assignment 📢


### Notice Board Management System

Technical Assignment built with **Next.js**, **TypeScript**, **Prisma ORM**, **Supabase PostgreSQL**, and **Tailwind CSS**.

A simple CRUD-based Notice Board application that allows users to create, view, update, and delete notices through RESTful APIs and a responsive user interface.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?logo=postgresql)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?logo=tailwindcss)


---

# 📋 Table of Contents

* Overview
* Features
* Tech Stack
* Project Structure
* API Endpoints
* Installation
* Environment Variables
* Running the Project
* Future Improvements
* AI Usage
* License

---

# 📌 Overview

This project is a full-stack Notice Board application developed as part of a technical assignment.

The application provides a clean and responsive interface for managing notices while exposing REST APIs for complete CRUD operations.

The backend uses **Next.js API Routes**, **Prisma ORM**, and **Supabase PostgreSQL**, while the frontend is built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

---

# ✨ Features

* Create Notice
* View All Notices
* View Single Notice
* Update Notice
* Delete Notice
* RESTful API Architecture
* Responsive UI
* Prisma ORM Integration
* PostgreSQL Database
* TypeScript Support
* Axios API Integration
* Server-side Validation
* Clean Component Structure

---

# 🛠 Tech Stack

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS
* Axios

## Backend

* Next.js API Routes
* Prisma ORM

## Database

* PostgreSQL
* Supabase

## Development Tools

* Prisma Migrate
* Git
* VS Code

---

# 📂 Project Structure

```text
notice-board/
│
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│
├── public/
│   └── uploads/
│
├── pages/
│   ├── index.tsx
│   ├── notices/
│   │   └── index.tsx
│   │
│   └── api/
│       └── notices/
│           ├── list-notice.ts
│           ├── create-notice.ts
│           ├── get-notice.ts
│           ├── update-notice.ts
│           └── delete-notice.ts
│
├── components/
│   ├── NoticeCard.tsx
│   ├── NoticeForm.tsx
│   └── DeleteConfirmation.tsx
│
├── lib/
│   ├── prisma.ts
│   └── validation.ts
│
├── styles/
│
├── .env
├── package.json
└── README.md
```

---

# 📡 API Endpoints

## Get All Notices

```http
GET /api/notices/list-notice
```

Example

```
http://localhost:3000/api/notices/list-notice
```

---

## Get Single Notice

```http
GET /api/notices/get-notice?id=3
```

Example

```
http://localhost:3000/api/notices/get-notice?id=3
```

---

## Create Notice

```http
POST /api/notices/create-notice
```

Example

```
http://localhost:3000/api/notices/create-notice
```

---

## Update Notice

```http
PUT /api/notices/update-notice?id=3
```

Example

```
http://localhost:3000/api/notices/update-notice?id=3
```

---

## Delete Notice

```http
DELETE /api/notices/delete-notice?id=1
```

Example

```
http://localhost:3000/api/notices/delete-notice?id=1
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/izarvek/reno-notice-board-assignment.git
```

Move into the project.

```bash
cd reno-notice-board-assignment
cd notice-board
```

Install dependencies.

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file.

```env
NODE_ENV=

DATABASE_URL=

DIRECT_URL=
```

Configure your Supabase PostgreSQL connection string.

---

# 🚀 Running the Project

Run the development server.

```bash
npm run dev
```

Generate Prisma Client.

```bash
npx prisma generate
```

Run database migrations.

```bash
npx prisma migrate dev
```

Open your browser.

```
http://localhost:3000
```

---

# 🧪 API Testing

The APIs can be tested using:

* Postman
* Browser (GET APIs)

---

# 💡 One Thing I Would Improve With More Time

Given additional development time, I would enhance the project in several areas to make it more production-ready:

* Introduce **Zod** for robust request validation and schema-based validation.
* Refactor the codebase into a more modular architecture by introducing dedicated **service**, **repository**, and **utility** layers.
* Improve folder organization following enterprise-level project structures.
* Apply consistent naming conventions across files, folders, API routes, and components.
* Implement centralized error handling and custom API response helpers.
* Add authentication and role-based authorization.
* Improve UI/UX with pagination, search, sorting, and filtering.
* Add unit and integration testing.
* Introduce logging and monitoring.
* Dockerize the application for easier deployment.
* Configure CI/CD pipelines for automated testing and deployment.

---

# 🤖 Where and How AI Was Used

AI was used as a development assistant throughout the assignment to improve productivity while maintaining full understanding and ownership of the implementation.

AI assisted with:

* Generating realistic demo data for testing the Notice CRUD APIs.
* Enhancing code quality by suggesting cleaner implementations and refactoring opportunities.
* Improving request validation logic and error handling approaches.
* Assisting in migrating to a stable Prisma version and resolving compatibility issues.
* Generating UI component ideas and layouts to accelerate frontend development.
* Improving code readability and maintainability.
* Assisting with documentation and README preparation.

All generated code was reviewed, modified, tested, and integrated manually before being included in the project.

---

# 📄 License

This project was developed as part of a technical assignment and is intended for evaluation purposes.

---

# 👨‍💻 Author

### Aadhi Sharma

Full Stack Software Developer

* GitHub: https://github.com/izarvek

---

# ⭐ Thank You

Thank you for taking the time to review my submission.

I appreciate the opportunity to demonstrate my development approach, coding standards, and problem-solving skills through this assignment.
