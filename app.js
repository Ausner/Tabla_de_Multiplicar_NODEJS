let colors = require('colors');
const { CrearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs')



//optiom('l')
//listar
//false -> opcional
//default : false


console.clear();



CrearArchivo(argv.base, argv.hasta, argv.listar, )
    .then(nombreArchivo => console.log(colors.magenta(nombreArchivo), ' creado con éxito'.green))
    .catch(err => console.log(err));