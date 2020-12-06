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
  ### Here is a demo of how the application should function
  ![${data.title}](${data.apppath})


  ## Credits
  Our Collaborator include ${data.contribution}. Here's a link to his/her GitHub Page: ${data.githublink}


  ### This application uses the ${data.liscence} liscence.
  

  ### Code for application can be found in my GitHub link: ${data.githubprofile}.

  ### If you have any questions regarding this application, please feel free to contact me via email: ${data.email}
`;
}

module.exports = generateMarkdown;
