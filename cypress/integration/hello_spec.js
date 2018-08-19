describe('My First Test', function() {
    it('finds the content "type"', function() {
        cy.visit('http://firstpage:80/');
        cy.contains('Hello World!')
    })
});