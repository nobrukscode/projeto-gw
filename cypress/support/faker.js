const faker = require('faker/locale/pt_BR');
const fakerBR = require('faker-br');
const CPF = require('node-cpf');
const fs = require('fs')

const data = {
firstname: faker.name.firstName(),
lastName: faker.name.lastName(),
cpf: CPF.generate(),
areaCode: "11 ",
phone: faker.phone.phoneNumberFormat().substring(3),
cnpj: fakerBR.br.cnpj(),
street: fakerBR.address.streetName(),
streetNumber: faker.datatype.number({ min: 1, max: 200 }),
CEP: faker.address.zipCode()
}

fs.writeFileSync('cypress/fixtures/data.json', JSON.stringify(data, null, 2))