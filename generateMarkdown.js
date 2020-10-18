// function to generate markdown for README
let badge;
let goodreadme;

function generateMarkdown(data) {
      
      switch (data.license){
      case "Apache License 2.0": 
       badge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
      
      case "GNU Public License (GPL)": 
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      break;

     case "GNU Library or 'Lesser' General Public License (LGPL)":
     badge =  `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
      break;
 
      case "MIT License": 
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;


      case "Mozilla Public License2.0": 
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;


      case "Creative Commons": 
      badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
      break;


      case "Eclipse Public License version 1.0":
        badge = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        break;

  default: break;


  }
  
  goodreadme = `
  # ${data.title}

   ## Table of Contents
  * [Description](#description)
  * [Installing Dependencies](#installing-dependencies)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

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
[GitHub profile link](https://github.com/${data.username})  
[Email link](mailto:${data.email})

`;

const readMeFile = badge + goodreadme;





 //  return  ${data.title}
  return readMeFile;

};

module.exports = generateMarkdown;
