# TalkNest
Talknest is a production-ready language exchange platform that combines real-time chat, video calling (one-on-one and group), screen sharing, reactions, typing indicators, image uploads, and video call recording. It includes 32 customizable UI themes and a robust friend and recommendation system to help users connect and practice languages interactively.

Features

Authentication & Security

JSON Web Tokens (JWT) authentication

Secure cookie-based session management

Protected routes for authenticated users

Real-time Chat & Messaging

Instant messaging with online status

Reactions, typing indicators, threads

Image uploads and notifications

Video Calls

One-on-one & group video calls

Screen sharing, reactions, and call recording

Seamless chat-video integration

User Management

Friend requests (send, accept, reject)

Friend recommendations based on preferences

Onboarding flow with language preferences

Themes & Personalization

32 different UI themes

Persistent theme selection with localStorage

Technology Highlights

Backend: Node.js, Express, MongoDB

Frontend: React.js (Vite) with Tailwind CSS & DaisyUI

Real-time: Stream API for chat & calls

State Management: Zustand & TanStack Query

Tech Stack

Frontend: React.js, Tailwind CSS, DaisyUI, Lucide-react

Backend: Node.js, Express.js, Mongoose

Database: MongoDB Atlas

Real-time Communication: Stream Chat & Video SDK

Authentication: JWT (JSON Web Token)

State Management: TanStack Query, Zustand

Deployment: Render

Project Structure
TalkNest/
│
├── backend/
│   ├── src/
│   │   ├── routes/        # Routes (auth, user, chat)
│   │   ├── controllers/   # Controllers for handling routes
│   │   ├── middlewares/   # Authentication middleware
│   │   ├── models/        # MongoDB models (User, FriendRequest)
│   │   ├── lib/           # Stream API integration
│   │   └── server.js      # Main server file
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/         # Login, Signup, Onboarding, Chat, VideoCall
│   │   ├── components/    # Navbar, Sidebar, Layout, ThemeSelector
│   │   ├── hooks/         # Custom hooks (useAuth, useLogout, etc.)
│   │   ├── lib/           # Axios config & helpers
│   │   ├── constants/     # Themes, languages
│   │   └── App.jsx
│   └── package.json
│
└── package.json           # Root configuration
