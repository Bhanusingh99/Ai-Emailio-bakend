# Ai-Emailio-backend

## Overview

Ai-Emailio-backend is a web application backend that allows users to log in using Google OAuth, fetch their last X emails from Gmail, and classify them into different categories using Google Gmeini Api. This project is designed for a Full-Stack Engineer Intern Assignment.

## Features

- User Authentication with Google OAuth
- Fetch emails from Gmail using the Gmail API
- Classify emails into categories using Google Gemini Api
- Store user data in MongoDB

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB Atlas account
- Google Cloud account with OAuth 2.0 credentials

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/Ai-Emailio-backend.git
   cd Ai-Emailio-backend

   ```

2. **install dependensies:**
   npm install

3. **setup .env file**
   PORT=4000

   make sure to add password in mongodb url
   
   MONGODB_URI=

5. **start the server**
   npm run dev

6. **Access the Application:**
   http://localhost:4000
