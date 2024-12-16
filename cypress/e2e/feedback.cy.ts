// describe('EventsPage Feedback Form Tests', () => {
//   const baseUrl = 'http://localhost:3000';

//   beforeEach(() => {
//     cy.visit(baseUrl);

//     // Ensure lazy-loaded content becomes visible
//     cy.get('div.lazy-div', { timeout: 100000 }).should(($div) => {
//       const opacity = $div.css('opacity');
//       expect(opacity).to.eq('1'); // Assert that opacity is 1
//     });

//     // Ensure the main heading is visible
//     cy.contains('We Would Love to Hear From You!', { timeout: 10000 }).should('be.visible');
//   });

//   it('should successfully submit feedback', () => {
//     cy.get('select[name="eventTitle"]').select('Sweetwater GuitarFest');
//     cy.get('textarea[name="feedback"]').type('This event was fantastic! Learned so much.');
//     cy.get('button[type="submit"]').click();
//     cy.contains('Thank you for your feedback!').should('be.visible');
//   });

//   it('should reset form when "Submit feedback for another event" is clicked', () => {
//     cy.get('select[name="eventTitle"]').select('Sweetwater Pro Audio Meetups');
//     cy.get('textarea[name="feedback"]').type('Loved the discussions about pro audio.');
//     cy.get('button[type="submit"]').click();
//     cy.contains('Thank you for your feedback!').should('be.visible');
//     cy.contains('Submit feedback for another event').click();
//     cy.get('select[name="eventTitle"]').should('have.value', '');
//     cy.get('textarea[name="feedback"]').should('have.value', '');
//   });
// });
