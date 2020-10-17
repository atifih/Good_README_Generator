// function to generate markdown for README
function generateMarkdown(data) {
  const readMeFile = `
  # ${data.title}  

   ## Table of Contents
  * [Description](#description)
  * [Installing Dependencies](#installing-dependencies)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)

  ## Description
  ${data.description}

  ## Installing Dependencies
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}  

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
[GitHub profile link:](https://github.com/${data.username})  

[Email link](mailto:${data.email})
`;







 //  return  ${data.title}
  return readMeFile;

}

module.exports = generateMarkdown;
