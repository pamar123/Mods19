# Tech Quiz Application

## Description
An interactive quiz application built using the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript and Cypress testing implementation. The application allows users to take quizzes on technical topics, with randomized questions and immediate feedback.

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Navigate to the server directory
- Create a .env file based on .env.example
- Add your MongoDB connection string

4. Seed the database:
```bash
npm run seed
```

## Running the Application

Start the development server:
```bash
npm run start:dev
```
This will start both the client (port 5173) and server (port 3001).

## Testing

The application includes both component and end-to-end tests using Cypress.

Run E2E tests:
```bash
npx cypress run
```

Run component tests:
```bash
npx cypress run --component
```

## Features
- Interactive quiz interface
- Random question selection
- Immediate feedback on answers
- Score tracking
- Option to restart quiz

## Technologies Used
- MongoDB
- Express.js
- React
- Node.js
- TypeScript
- Cypress
- Bootstrap

## Tests Implemented
### Component Tests:
- Initial render of quiz
- Quiz start functionality
- Answer options display
- Question progression
- Score display

### E2E Tests:
- Complete quiz flow
- UI element verification

## Video Walkthrough
[Link to video demonstration]

## Author
[Your Name]

## License
ISC