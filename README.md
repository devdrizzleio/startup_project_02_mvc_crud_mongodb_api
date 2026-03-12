# startup_project_02_mvc_crud_mongodb_api
"MVC CRUD API with MongoDB - Mini project for backend internship",

# MVC CRUD API with MongoDB

A production-ready REST API demonstrating MVC pattern with MongoDB, Mongoose, validation, and Docker.

## Features

- ✅ Full CRUD operations on `Product` resource
- ✅ MongoDB integration with Mongoose ODM
- ✅ MVC architecture (Models, Views/Controllers, Routes)
- ✅ Input validation using **express-validator** (ID) and **Joi** (body)
- ✅ Centralized error handling
- ✅ Environment configuration
- ✅ CORS, Helmet, Compression
- ✅ Nodemon for development
- ✅ Docker support (dev & prod with MongoDB)
- ✅ GitHub Actions CI/CD with MongoDB service
- ✅ Thunder Client test collection
- ✅ PowerShell setup script

## Tech Stack

- Node.js 18+
- Express.js 4
- MongoDB 6
- Mongoose 7
- Joi, express-validator
- Docker, Docker Compose
- GitHub Actions

## Getting Started

### Prerequisites

- Node.js 18+ or Docker
- MongoDB (if running without Docker)

### Installation

```bash
# Clone repository
git clone <repo-url>
cd project-02-mvc-crud-mongodb

# Run setup script (PowerShell)
.\scripts\setup.ps1

# Or manually
npm install
cp .env.example .env
npm run dev
