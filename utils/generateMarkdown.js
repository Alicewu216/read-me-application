// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  -[Application Description](#description)
  -[Installation Instructions](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Tests](#tests)

  ## Application Description <a name='description></a>
  ${data.description}

  ## Installation Instructions <a name='installation></a>
  ${data.installation}
`;
}

module.exports = generateMarkdown;
