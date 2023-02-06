const exec = require('child_process').exec;

const specs = ['faker.js', 'spec.cy.js', 'spec.js'];

const runSpec = (index) => {
  if (index === specs.length) {
    return;
  }

  exec(`npx cypress run --spec cypress/integration/${specs[index]}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing spec: ${error}`);
      return;
    }

    console.log(stdout);
    console.error(stderr);

    runSpec(index + 1);
  });
};

runSpec(0);