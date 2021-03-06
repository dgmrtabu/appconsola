const { rejects } = require('assert');
const { resolve } = require('path');

require('colors');

const monstrarMenu = () => {

    return new Promise((resolve, rejects) => {

        console.clear();
        console.log('=========================='.green);
        console.log('   Selecccion una opción'.green);
        console.log('==========================\n'.green);

        console.log(`${ '1.'.green} Crear tarea`);
        console.log(`${ '2.'.green} Listar tarea`);
        console.log(`${ '3.'.green} Listar tareas completadas`);
        console.log(`${ '4.'.green} Listar tareas pendientes`);
        console.log(`${ '5.'.green} Completar tarea(s)`);
        console.log(`${ '6.'.green} Borrar tarea`);
        console.log(`${ '0.'.green} Salir \n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opción: ', (opt) => {
            readline.close();
            resolve(opt);
        });

    });
};

const pausa = () => {

    return new Promise((resolve, rejects) => {

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question(`Presione ${'ENTER'.green} para continuar`, (opt) => {
            readline.close();
            resolve();
        });

    });
}

module.exports = {
    monstrarMenu,
    pausa
}