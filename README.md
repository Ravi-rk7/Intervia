# Intervia-ai-interviewer

Intervia is an AI-powered interview practice platform that helps candidates prepare for technical and behavioral interviews through realistic interview sessions, voice interaction, and structured feedback.

## Features

- AI-generated interview questions based on the selected role and topic
- Guided interview setup with resume and experience context
- Voice-enabled interview experience with timed questions
- Detailed reports with scores, feedback, and improvement areas
- Interview history for reviewing previous sessions
- Authentication with Firebase
- Premium plans and payments through Razorpay

## Tech stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- Redux Toolkit
- React Router
- Firebase Authentication
- Recharts and jsPDF for reports

### Backend

- Node.js
- Express
- MongoDB with Mongoose
- OpenRouter for AI interview generation and evaluation
- Razorpay for payments
- JWT and HTTP-only cookies for protected sessions

## Project structure

```text
Intervia-ai-interviewer/
├── client/     # React and Vite frontend
├── server/     # Express API and MongoDB integration
└── README.md
```

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/Ravi-rk7/Intervia.git
cd Intervia
```

### 2. Install dependencies

```bash
cd client
npm install

cd ../server
npm install
```

### 3. Configure environment variables

Create a `.env` file in `server/` with the values required by the API:

```env
PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Configure the Firebase client values in `client/src/utils/firebase.js` or move them to environment variables before deployment.

### 4. Run the application

Start the API in one terminal:

```bash
cd server
npm run dev
```

Start the frontend in another terminal:

```bash
cd client
npm run dev
```

The frontend runs on `http://localhost:5173` and the API defaults to `http://localhost:8000`.

## Available scripts

From `client/`:

```bash
npm run dev      # start the Vite development server
npm run build    # create a production build
npm run lint     # run ESLint
npm run preview  # preview the production build
```

From `server/`:

```bash
npm run dev      # start the API with nodemon
```

## Security

Never commit `.env` files, API keys, Firebase secrets, payment credentials, or database credentials. Use environment-specific configuration for local development and deployment.

## License

This project is currently intended for personal and educational use. Add a formal license before distributing it as open-source software.
