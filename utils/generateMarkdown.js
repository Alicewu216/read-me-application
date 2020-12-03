// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Table of Contents
  
  * [Application Description](#description)
  * [Installation Instructions](#installation)
  * [Usage](#usage)
  * [Contribution](#credits)
  * [Tests](#tests)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.contribution}

  ## Tests
  ${data.test}

  ### liscence goes here
  ### githublink
  ### contact email address
`;
}

module.exports = generateMarkdown;
