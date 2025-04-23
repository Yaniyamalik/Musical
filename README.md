

# 🎵 MusicVerse — Musical Courses Web App

MusicVerse is a modern web application built using **Next.js** with **TypeScript** that allows users to explore, register, and learn various musical courses like **Guitar**, **Piano**, and more. The application features a beautiful and responsive UI built using **Aceternity UI**, and provides secure **authentication** and **user registration** for a personalized learning experience.

## ✨ Features

- 🎸 Explore a variety of musical courses: Guitar, Piano, and more
- 🎨 Beautiful, responsive UI powered by [Aceternity UI](https://ui.aceternity.com)
- 🔐 Authentication (Login/Signup) with secure session management
- 👤 User dashboard for managing courses and profile
- 📱 Fully responsive and mobile-friendly
- 🛠 Built using **Next.js 14** with **TypeScript** for scalability and performance

## 🚀 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: TypeScript,JavaScript
- **UI Library**: [Aceternity UI](https://ui.aceternity.com)
- **Authentication**: NextAuth.js / Firebase Auth / Auth0 (based on your implementation)
- **State Management**: Context API or Zustand (if used)
- **Styling**: Tailwind CSS (via Aceternity UI)
- **Database**:  MongoDB

## 🔧 Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/musicverse.git
   cd musicverse
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment variables**

   Create a `.env.local` file in the root directory and add necessary variables:

   ```env
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=http://localhost:3000
   DATABASE_URL=your_database_url
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.



## 🛡️ Security

- Passwords are securely hashed (if using custom auth)
- Sessions are managed securely using NextAuth or Firebase
- Environment variables and secrets are stored using `.env.local`



## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open a PR or raise an issue.

