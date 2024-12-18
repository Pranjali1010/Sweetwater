# React + TypeScript + Next.js Project

## Overview

This project is built using:
- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework with server-side rendering (SSR) and static site generation (SSG).
- **TypeScript**: A typed superset of JavaScript for better code maintainability.

---

## Prerequisites

Ensure that the following are installed on your machine:

- **Node.js** (v18 or higher): [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **Yarn** (alternative package manager).

Verify installation:

```bash
node -v
npm -v


Setup Instructions
Follow these steps to set up and run the project:

Clone the Repository

Clone this repository to your local system:

bash
Copy code
git clone <repository-url>
cd <repository-folder>
Install Dependencies

Install project dependencies using npm or yarn:

With npm:

bash
Copy code
npm install
With Yarn:

bash
Copy code
yarn install
Run the Development Server

Start the Next.js development server:

With npm:

bash
Copy code
npm run dev
With Yarn:

bash
Copy code
yarn dev
The server will run at http://localhost:3000.

Build the Project for Production

Create an optimized production build:

bash
Copy code
npm run build
To run the production build:

bash
Copy code
npm start
Available Scripts
The following scripts are available:

npm run dev: Start the development server.
npm run build: Create a production build.
npm start: Start the production server.
npm run lint: Lint the codebase.
Folder Structure
bash
Copy code
.
├── pages/             # Next.js pages and routes
│   ├── _app.tsx       # Custom App component
│   ├── index.tsx      # Main page (home)
│   └── api/           # API routes
├── public/            # Static assets
├── styles/            # CSS or SCSS styles
├── components/        # Reusable React components
├── tsconfig.json      # TypeScript configuration
├── package.json       # Project configuration and scripts
└── README.md          # Project documentation
Technologies Used
React: Component-based UI development.
Next.js: Framework for SSR, SSG, and API routes.
TypeScript: Type-safe development.
CSS/SCSS: For styling.

------

#Command to run Backend(Run this command under Backend)

npm start

#Command to run frontend(Run this command under Frontend)

npm run dev

#coomand to populate the data in Mongo DB(Run this command under Backend)

node seed.js
