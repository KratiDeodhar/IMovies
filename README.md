# IMovies
DOC fIle: https://docs.google.com/document/d/1EAEKfR09qooBTI4pvn6V6UyQjWdpzTA9wKCpnXPFWho/edit?tab=t.0

🎬 The IMovies - Movie Ticket Booking ApplicationA modern, responsive full-stack movie ticket booking web application built using the MERN stack (MongoDB, Express.js, React, Node.js) and powered by Vite.

🌟 Key FeaturesInteractive Movie Catalog: Browse current releases and showtimes effortlessly.User Authentication: Secure registration and login flow using JSON Web Tokens (JWT).Centered Booking Modal: Clean, flexbox-centered dialog overlay for seamless seat and showtime selection.My Bookings Dashboard: View and manage active movie reservations in real-time.Responsive Dark Theme UI: Modern typography and dark theme styling customized via CSS.

🏗 System ArchitectureThe application follows a standard 3-Tier MERN Architecture:Frontend: React (v18+) SPA powered by Vite for rapid component rendering and state management.Backend: Node.js & Express RESTful API processing authentication and booking transactions.Database: MongoDB persistence managed via Mongoose ODM models (User and Booking).


+-------------------------------------------------------------------+
|                        CLIENT LAYER (React / Vite)                |
+-------------------------------------------------------------------+
                                  |
                                  | HTTP / REST API (Axios)
                                  v
+-------------------------------------------------------------------+
|                      SERVER LAYER (Node.js / Express)             |
+-------------------------------------------------------------------+
                                  |
                                  | Mongoose ODM / MongoDB Driver
                                  v
+-------------------------------------------------------------------+
|                          DATABASE LAYER (MongoDB)                 |
+-------------------------------------------------------------------+


📁 Project Folder StructureIMovies/
├── backend/
│   ├── models/
│   │   ├── Booking.js
│   │   └── User.js
│   ├── routes/
│   │   └── auth.js
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── imovies-redesign.css
    │   └── styles.css
    ├── index.html
    └── package.json

    
🚀 Quick Start & SetupPrerequisitesNode.js (v16+)MongoDB running locally or a MongoDB Atlas URI1. Clone the Repositorygit clone https://github.com/KratiDeodhar/IMovies.git
cd IMovies
2. Configure Backendcd backend
npm install
Create a .env file in the backend/ directory:PORT=5000
MONGO_URI=mongodb://localhost:27017/imovies
JWT_SECRET=your_jwt_secret_key
Start the backend server:npm start
# Server runs on http://localhost:5000

3. Configure FrontendOpen a new terminal tab and navigate to the frontend:cd frontend
npm install
npm run dev
# Development server runs on http://localhost:5173

📡 API Endpoints SummaryEndpointMethodDescription/api/auth/registerPOSTRegister a new user account/api/auth/loginPOSTAuthenticate user & return JWT token/api/bookingsGETFetch active bookings for authenticated user/api/bookingsPOSTReserve new movie seats🛠 Future EnhancementsIntegration with payment gateways (Stripe / Razorpay).Interactive seat selection grid (rows and columns).QR code generation for digital tickets.

👩‍💻 Author
Krati Deodhar - GitHub Profile
