//const { argv } = require('yargs');
const { generateFile1, generateFile3 } = require('./helpers/multiplicar');

const argv = require('./config/yargs');

const colors = require('colors');

generateFile1(argv.b, argv.h, argv.l).then(res => console.log(colors.rainbow(res))).catch(err => console.log(err));


//generateFile3(base).then(res => console.log(res)).catch(err => console.log(err))
//fs.writeFileSync('tabla-5.txt', output);