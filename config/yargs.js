const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    describe: 'La base de la tabla de multiplicar',
                    type: 'number'
                })
                .option('l', {
                    alias: 'listar',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla por consola',
                    type: 'boolean'
                })
                .option('h', {
                    alias: 'hasta',
                    default: 10,
                    describe: 'Hasta qué número multiplicar',
                    type: 'number'
                })
                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número';
                    }

                    return true;
                })
                .argv;

module.exports = argv;