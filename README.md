 DOC File: https://docs.google.com/document/d/1EAEKfR09qooBTI4pvn6V6UyQjWdpzTA9wKCpnXPFWho/edit?tab=t.0#heading=h.zh74xzvk18hj

# 🎬 IMovies - Movie Booking & Streaming Web App

A full-stack movie ticket booking web application built using the MERN stack (MongoDB, Express.js, React, Node.js) with Vite[cite: 3]. The application allows users to discover trending movies, view showtimes, select seats via a modern modal UI, and manage their cinema bookings[cite: 3].

## 📂 Project Structure
IMovies/
├── frontend/       # User interface and client-side code
├── backend/        # REST API, routes, and database models
└── README.md       # Project documentation

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [System Architecture](#system-architecture)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)

---

## Features
- **Movie Catalog & Browsing:** Browse current and upcoming movies with rich metadata (genre, runtime, description)[cite: 3].
- **User Authentication:** Secure user signup and login using JSON Web Tokens (JWT)[cite: 3].
- **Interactive Booking Dialog:** Centered modal overlay for seamless seat selection and showtime booking[cite: 3].
- **User Dashboard ("My Bookings"):** View active and past ticket reservations in real time[cite: 3].
- **RESTful API Backend:** Robust Node.js/Express API connected to MongoDB Atlas[cite: 3].

---

## Tech Stack

- **Frontend (`client/`):** React, Vite, Custom Modular CSS[cite: 3]
- **Backend (`server/`):** Node.js, Express.js, JWT Authentication[cite: 3]
- **Database:** MongoDB Atlas, Mongoose ODM[cite: 3]
- **Deployment:** Vercel[cite: 8]

---

## System Architecture

```text
+---------------------------------------------------------------------------------+
|                                 CLIENT LAYER                                    |
|                                (React + Vite)                                   |
|                                                                                 |
|  +---------------------------+             +---------------------------------+  |
|  |  React UI Components      |  <=======>  |  State Management & Axios HTTP  |  |
|  |  (App.jsx, Bookings Modal)|             |  (JWT Header / REST API Calls)  |  |
|  +---------------------------+             +---------------------------------+  |
+--------------------------------------|------------------------------------------+
                                       |
                                       | HTTP / REST Requests (JSON Data)
                                       v
+---------------------------------------------------------------------------------+
|                                 SERVER LAYER                                    |
|                              (Node.js + Express)                                |
|                                                                                 |
|  +---------------------------+             +---------------------------------+  |
|  |  Express Server           |  -------->  |  Route Handlers                 |  |
|  |  (server.js)              |             |  (auth.js, booking.js)          |  |
|  +---------------------------+             +---------------------------------+  |
|                                                            |                    |
|                                                            v                    |
|                                            +---------------------------------+  |
|                                            |  Mongoose ODM Controllers       |  |
|                                            +---------------------------------+  |
+--------------------------------------|------------------------------------------+
                                       |
                                       | Mongoose Queries / BSON Data
                                       v
+---------------------------------------------------------------------------------+
|                                DATABASE LAYER                                   |
|                                   (MongoDB)                                     |
|                                                                                 |
|  +---------------------------+             +---------------------------------+  |
|  |  Users Collection         |             |  Bookings Collection            |  |
|  |  (models/User.js)         |             |  (models/Booking.js)            |  |
|  +---------------------------+             +---------------------------------+  |
+---------------------------------------------------------------------------------+

Getting Started
Prerequisites
Node.js (v16.x or higher)

npm (v8.x or higher)

MongoDB Atlas connection string (or local instance)
How to Run Locally
1. Clone the repository
code
Bash
git clone https://github.com/KratiDeodhar/IMovies.git
cd IMovies
2. Setup Backend
code
Bash
cd backend
npm install
npm start
3. Setup Frontend
code
Bash
cd ../frontend
npm install
npm start
👤 Author
Krati Deodhar - GitHub Profile

