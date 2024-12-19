import { mount } from 'cypress/react18';
import 'bootstrap/dist/css/bootstrap.min.css';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);