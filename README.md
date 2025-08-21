# TalkNest

![Node.js](https://img.shields.io/badge/Node.js-18.x-blue?style=flat-square)  
![React](https://img.shields.io/badge/React-18.x-blue?style=flat-square)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success?style=flat-square)  
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)

---

## 🌟 Overview

**TalkNest** is a **full-featured language exchange platform** that combines:

- **Real-time messaging** (threads, reactions, typing indicators, image uploads)  
- **Video calls (1:1 & group)** with screen sharing, reactions & recording  
- **Friend system** (recommendations, requests, onboarding)  
- **32 unique UI themes**  

Perfect for language learners to **practice speaking & chatting for free**.

---

## ✨ Features

- **Secure Authentication** – JWT + cookies  
- **Realtime Chat & Video Calls** – Powered by Stream API  
- **Custom Themes** – Persistent across sessions  
- **Friend Management** – Send, accept, reject requests  
- **Call Recording & Screen Sharing** – Integrated seamlessly  

---

## 🛠️ Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS, DaisyUI, Lucide-react  
- **Backend:** Node.js, Express, Mongoose  
- **Database:** MongoDB Atlas  
- **Real-time:** Stream Chat & Video SDK  
- **State Management:** TanStack Query, Zustand  
- **Deployment:** Render  

---

## 📂 Project Structure

```bash
TalkNest/
├── backend/
│   ├── src/
│   │   ├── routes/         # API routes
│   │   ├── controllers/    # Route handlers
│   │   ├── middlewares/    # JWT authentication
│   │   ├── models/         # User & FriendRequest schemas
│   │   ├── lib/            # Stream API integration
│   │   └── server.js       # Entry point
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/          # Auth, Chat, Call, Onboarding
│   │   ├── components/     # Navbar, Sidebar, ThemeSelector
│   │   ├── hooks/          # useAuth, useLogout, useTheme
│   │   ├── lib/            # Axios config
│   │   └── App.jsx
│   └── package.json
│
└── package.json            # Root configuration
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/TalkNest.git
cd TalkNest
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create `.env`:
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/talknest_db
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
NODE_ENV=development
```
Run:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
Create `.env`:
```
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🏗️ Build & Deployment

### Build
```bash
npm run build
```
This will:
- Install dependencies for backend & frontend
- Build the frontend into a production `dist/`
- Prepare the application for deployment

### Start (Production)
```bash
npm run start
```
Ensure:
- `NODE_ENV=production`
- Correct **MongoDB**, **Stream API**, and **JWT** credentials are set

---

## 📖 API Routes

### Auth
- `POST /api/auth/signup` – Create user & sync with Stream  
- `POST /api/auth/login` – Issue JWT & authenticate  
- `POST /api/auth/logout` – Logout  

### User
- `GET /api/users/recommended` – Recommended friends  
- `POST /api/users/friend-request` – Send friend request  
- `POST /api/users/friend-request/accept` – Accept friend request  
- `GET /api/users/friends` – List friends  

### Chat
- `GET /api/chat/token` – Generate Stream token  

---

## 📸 Screenshots

> *(Replace with actual screenshots)*

- **Login & Signup**  
  ![Signup Screenshot](https://via.placeholder.com/800x400?text=Signup+Page)

- **Chat & Video Call**  
  ![Chat Screenshot](https://via.placeholder.com/800x400?text=Chat+Interface)

- **Theme Selector**  
  ![Themes Screenshot](https://via.placeholder.com/800x400?text=Theme+Selector)

---

## 📌 Key Learnings

- Building **Node.js + Express** backends  
- Implementing **JWT authentication**  
- Creating **protected routes & middleware**  
- Using **TanStack Query for state management**  
- Building **real-time chat & video call apps with Stream**  

---

## 🧑‍💻 MongoDB Credentials (For Testing)

```
Username: hansikamittal697
Password: X0UprQeVybVlwuqe
Connection: mongodb+srv://hansikamittal697:X0UprQeVybVlwuqe@cluster0.k1spljy.mongodb.net/talknest_db
```

---

## 📜 License

Licensed under the [MIT License](LICENSE).

