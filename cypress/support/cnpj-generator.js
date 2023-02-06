const faker = require('faker');

function generateValidCnpj() {
    const faker = require('faker');
    return faker.fake("{{random.number}}.{{random.number}}.{{random.number}}/{{random.number}}-{{random.number}}");
  }


module.exports = { generateValidCnpj };