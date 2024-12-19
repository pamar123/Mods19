describe('Quiz Application E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should complete a full quiz flow', () => {
    // Start the quiz
    cy.get('button').contains('Start Quiz').click();

    // Answer all questions until we reach the end
    const answerQuestions = () => {
      cy.get('body').then($body => {
        if ($body.find('.btn-primary').length > 0 && !$body.text().includes('Quiz Completed')) {
          cy.get('.btn-primary').first().click();
          answerQuestions();
        }
      });
    };

    answerQuestions();

    // Verify completion screen
    cy.contains('Quiz Completed').should('exist');
    cy.contains('Your score:').should('exist');
    
    // Start a new quiz
    cy.get('button').contains('Take New Quiz').click();
    cy.get('.card').should('exist');
  });

  it('should display questions and answers correctly', () => {
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('exist');
    cy.get('h2').should('exist'); // Question text
    cy.get('.btn-primary').should('have.length.at.least', 1); // Answer buttons
    cy.get('.alert-secondary').should('have.length.at.least', 1); // Answer text
  });
});