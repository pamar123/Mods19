import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  const mockQuestions = [
    {
      question: 'What is React?',
      answers: [
        { text: 'A JavaScript library', isCorrect: true },
        { text: 'A database', isCorrect: false },
        { text: 'A server', isCorrect: false },
        { text: 'An operating system', isCorrect: false }
      ]
    },
    {
      question: 'What is JSX?',
      answers: [
        { text: 'A styling framework', isCorrect: false },
        { text: 'A JavaScript extension', isCorrect: true },
        { text: 'A testing library', isCorrect: false },
        { text: 'A build tool', isCorrect: false }
      ]
    }
  ];

  beforeEach(() => {
    cy.intercept('GET', '**/api/questions/random', {
      statusCode: 200,
      body: mockQuestions,
      delay: 100
    }).as('getQuestions');
  });

  it('should render the start button initially', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('exist');
  });

  it('should start the quiz when clicking the start button', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('What is React?').should('exist');
  });

  it('should show all answer options for a question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.contains('A JavaScript library').should('exist');
    cy.contains('A database').should('exist');
    cy.contains('A server').should('exist');
    cy.contains('An operating system').should('exist');
  });

  it('should move to the next question after answering', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    // Make sure we're on the first question
    cy.contains('What is React?').should('exist');
    // Click any answer button (using first() since order doesn't matter for this test)
    cy.get('.btn-primary').first().click();
    // Verify we moved to the second question
    cy.contains('What is JSX?', { timeout: 10000 }).should('exist');
  });

  it('should show the final score when quiz is completed', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.wait('@getQuestions');
    cy.get('.btn-primary').first().click(); // Answer first question
    cy.get('.btn-primary').first().click(); // Answer second question
    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score:').should('exist');
  });
});