const { phone_number } = require('faker/lib/locales/pt_BR');
const faker = require('faker/locale/pt_BR');
const fakerBR = require('faker-br');
const CPF = require('node-cpf');
const { generateValidCnpj } = require('../support/cnpj-generator');


describe('E-mail getnada', function() {
  it('Criando a caixa e e-mail', function() {
    
    cy.visit('http://getnada.com')
    cy.contains('Add inbox').click()

    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const cpf = CPF.generate();
    const primeiraL = firstname[0]
    const email = `${primeiraL}.${lastname}${cpf.toString().slice(-2)}`
    cy.get('#grid-first-name').clear().type(email)

    cy.get('.inline-block > .appearance-none').select([0])

    cy.get('.max-w-lg > .bg-indigo-500').click()

    
    //cy.get('.email').should('exist')
  })
})