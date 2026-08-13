# Hitak Suthar — Portfolio (MERN)

A simple, beginner-friendly personal portfolio website built with the MERN stack
(MongoDB, Express.js, React.js, Node.js).

## Folder Structure

```
portfolio/
├── client/          React frontend (Vite)
└── server/          Express + MongoDB backend
```

## 1. Requirements

- Node.js installed (v18 or higher recommended)
- MongoDB installed locally, OR a free MongoDB Atlas account (cloud database)

## 2. Setup

### Backend (server)

```bash
cd server
npm install
```

Copy `.env.example` to `.env` and fill in your MongoDB connection string:

```bash
cp .env.example .env
```

Then run the server:

```bash
npm run dev
```

The backend will run at: `http://localhost:5000`

### Frontend (client)

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

The frontend will run at: `http://localhost:5173`

Vite is configured (see `vite.config.js`) to automatically forward any
request starting with `/api` to the backend at port 5000, so the frontend
and backend can talk to each other during development.

## 3. Add Your Resume

Place your resume PDF file inside:

```
client/public/resume.pdf
```

The "Download Resume" button on the site links to `/resume.pdf`, so it will
work automatically once the file is added.

## 4. Update Your Personal Info

All personal content (name, email, phone, skills, projects, education, etc.)
lives in one file:

```
client/src/data/portfolioData.js
```

Update the placeholders (`YOUR_EMAIL@gmail.com`, `YOUR_PHONE_NUMBER`,
`YOUR_LOCATION`) with your real information, and add your project GitHub/live
demo links when you have them.

## 5. How Frontend & Backend Communicate

```
React Contact Form  →  fetch("/api/contact")  →  Express Route  →  MongoDB
```

1. User fills the contact form and clicks "Send Message".
2. React sends a POST request to `/api/contact` with `{ name, email, message }`.
3. Express receives it in `contactRoutes.js`, validates it, and saves it to
   MongoDB using the `Contact` model.
4. Express sends back a success/error response, which React shows to the user.

You can view all saved messages (for testing) by visiting:
`http://localhost:5000/api/contact` while the backend is running.

## 6. Deployment (basic overview)

- **Frontend**: Run `npm run build` inside `client/` to generate a production
  build in `client/dist`. Deploy that folder to a static host like Netlify or
  Vercel.
- **Backend**: Deploy the `server/` folder to a Node hosting service like
  Render or Railway. Set the environment variables (`MONGO_URI`, `PORT`) in
  the hosting dashboard.
- **Database**: Use a free MongoDB Atlas cluster so both your local machine
  and your deployed backend can connect to the same database.
- After deploying the backend, update the frontend to call the live backend
  URL instead of `/api/contact` (for example, by using an environment
  variable for the API base URL), or configure your hosting to proxy
  `/api` requests to the backend.

## 7. Tech Stack

- **Frontend**: React.js, Vite, JavaScript, plain CSS, react-icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
