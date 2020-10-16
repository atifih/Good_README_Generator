// function to generate markdown for README
function generateMarkdown(data) {
  const readMeFile = `
  # ${data.title}
   ## Table of Contents
  * [Description](#description)
  * [Installing Dependencies](#dependencies-how-to)
  * [Usage](#usage-how-to)
  * [License](#license-select)
  * [Contributing](#contributing-how-to)
  * [Tests](#tests)

  ## Description
  ${data.description}

  ## Installing Dependencies
  Please enter the following: ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributng
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
[GitHub profile link:](https://github.com/${data.username})
[Email link:](mailto: ${data.email})
`







 //  return  ${data.title}
  return readMeFile;

}

module.exports = generateMarkdown;
