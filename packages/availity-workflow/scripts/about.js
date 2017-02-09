const Logger = require('availity-workflow-logger');
const chalk = require('chalk');

const logo = `
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLCG000CLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLC88GG08GLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLG@0CLLL0@0LLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLL0@0GGGGGG0@8CLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLC0@GG@@008@0G88CLLC00000GCLLLLLLLLLLLL
 LLLLLLLLLLLLLC88GLLG80080CLC88G080GGGG88CCCCLLLLLLLL
 LLLLLLLLLLLLC88CLLLL0880CLLLC088GLLLLC88CLLLLLLLLLLL
 LLLLLLLLLLLLC88GGGG080G88CLC08008GLLG88CLLLLLLLLLLLL
 LLLLLLLLLLLLLCG00000CLLC88G0@808@@G0@0CLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLC8@0GGGGCG8@0LLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLC0@0LLLC88GLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLG88GG88GLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLC000GCLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
 LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
`;

const message = `
 ${chalk.underline('Powered by:')}

 ${chalk.yellow(logo)}

 `;

function about() {
  Logger.simple(message);
}

module.exports = about;
