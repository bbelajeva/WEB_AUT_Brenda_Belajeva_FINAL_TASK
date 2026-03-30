describe('Final Task', () => {

  it('Fill form correctly', () => {

    cy.visit('https://demoqa.com/automation-practice-form')

    // Name
    cy.get('#firstName').type('Brenda')
    cy.get('#lastName').type('Belajeva')

    // Email & Gender
    cy.get('#userEmail').type('brenda@test.com')
    cy.get('input[value="Female"]').check({ force: true })

    // Phone
    cy.get('#userNumber').type('1234567890')

    // Date of Birth (FIXED)
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__year-select').select('1930')
    cy.get('.react-datepicker__month-select').select('February')
    cy.get('.react-datepicker__day--028')
      .not('.react-datepicker__day--outside-month')
      .click()

    // Subjects
    cy.get('#subjectsInput').type('Economics{enter}')

    // Hobbies (FIXED)
    cy.contains('label', 'Music').click()

    // Upload file (FIXED)
    cy.get('#uploadPicture').selectFile('cypress/files/image.png')

    // Address
    cy.get('#currentAddress').type('Riga')

    // State & City
    cy.get('#state').click().contains('NCR').click()
    cy.get('#city').click().contains('Delhi').click()

    // Submit
    cy.get('#submit').click()

    // Wait for modal
    cy.get('.modal-content').should('be.visible')

    // Validation (FIXED)
    cy.contains('td', 'Student Name').next().should('contain', 'Brenda Belajeva')
    cy.contains('td', 'Student Email').next().should('contain', 'brenda@test.com')
    cy.contains('td', 'Gender').next().should('contain', 'Female')
    cy.contains('td', 'Hobbies').next().should('contain', 'Music')
    cy.contains('td', 'State and City').next().should('contain', 'NCR Delhi')

  })

})