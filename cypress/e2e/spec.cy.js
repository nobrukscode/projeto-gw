const { phone_number } = require('faker/lib/locales/pt_BR');
const faker = require('faker/locale/pt_BR');
const fakerBR = require('faker-br');
const CPF = require('node-cpf');
const { generateValidCnpj } = require('../support/cnpj-generator');


describe('Formulário de Cadastro GW', function() {
  it('Preenchendo formulário', function() {
    cy.fixture('data.json').then((data) =>{

      //Acessa a plataforma digital
    cy.visit('https://rsl-uat.vivoplataformadigital.com.br/cms/pt')
  
    //Clica em 'cadastrar'
    cy.get('.jsdn-register > a').click()

    //Declarando e importando as váriaveis de dados gerados..
    cy.get('#cpfNumber').type(data.cpf)
    cy.get('#firstName').type(data.firstname)
    cy.get('#lastName').type(data.lastName)
    const primeiraL = data.firstname[0]
    const email = `${primeiraL}.${data.lastName}${data.cpf.toString().slice(-2)}@getnada.com`;
    cy.get('#email').type(email)
    const areaCode = "11 "
    const phone2 = `(${areaCode}) ${data.phone}`;
    cy.get('#contactPhone').type(phone2)
    cy.get('#cnpjNumber').type(data.cnpj)
    let companyName = `${data.firstname} ${data.lastName} LTDA`
    cy.get('#companyName').type(companyName)
    cy.get('#stateRegister').type("ISENTO")
    cy.get('#mailingAddress1').type(data.street)
    cy.get('#mailingAddress2').type(data.streetNumber)
    cy.get('#mailingaddress4').type("Teste")
    cy.get('#mailingPhone').type(phone2)
    cy.get('#mailingState').select("São Paulo")
    cy.get('#mailingCity').type("São Paulo")
    cy.get('#mailingZip').type(data.CEP)
    cy.get('#billingCheck').check();
    cy.get('#timeZone').select([1])
    cy.get('#i_agree').check()

    //Clica no Btn Cadastrar, finalizando o formulário.
    //cy.get('#btn_submit > span').click()
})
  })
})
    //cy.origin('https://getnada.com', (options) => {

   // let emailString = options.email.toString();
    //cy.contains('Add inbox').click()
    //const firstname = faker.name.firstName();
    //const lastname = faker.name.lastName();
    //const cpf = CPF.generate();
    //const primeiraL = firstname[0]
    //const email = `${primeiraL}.${lastname}${cpf.toString().slice(-2)}`
    //cy.get('#grid-first-name').clear().type(emailString)

   // cy.get('.inline-block > .appearance-none').select([0])

    //cy.get('.max-w-lg > .bg-indigo-500').click()

    //cy.get('#caixa-do-cliente').click()

    //cy.get('.email').should('exist')

//}, {email: email});
//achar uma forma de conseguir acessar a pagina do getnada e validar o e-mail