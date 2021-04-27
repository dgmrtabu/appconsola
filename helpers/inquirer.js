const { green } = require('colors');
const inquirer = require('inquirer');
require('colors');

const preguntas = [{
    type: 'list',
    name: 'opcion',
    message: 'Que desea hacer?',
    choices: [{
            value: '1',
            name: `${'1.'.green} Crear tarea`

        },
        {
            value: '2',
            name: `${'2.'.green} Listar tareas`

        },
        {
            value: '3',
            name: `${'3.'.green} Listar tareas completadas`

        },
        {
            value: '4',
            name: `${'4.'.green} Listar tareas pendientes`

        },
        {
            value: '5',
            name: `${'5.'.green} Completar tarea(s)`

        },
        {
            value: '6',
            name: `${'6.'.green} Borrar tarea`

        },
        {
            value: '0',
            name: `${'0.'.green} Salir`

        },
    ]
}, ]


const inquirerMenu = async() => {

    console.clear();

    console.log('=========================='.white);
    console.log('   Selecccion una opción'.white);
    console.log('==========================\n'.white);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
};

const pausa = async() => {
    const continuar = [{
        type: 'input',
        name: 'enter',
        message: `\n Presione ${'ENTER'.green} para continuar\n`,
    }];
    console.log('\n');
    await inquirer.prompt(continuar);
};

const leerInput = async(message) => {
    const question = [{
        type: 'input',
        name: 'desc',
        message,
        validate(value) {
            if (value.length === 0) {
                return 'Introdusca una tarea';
            }
            return true;
        }
    }];

    const { desc } = await inquirer.prompt(question);
    return desc;
};

const listadoTarreasBorrar = async(tareas = []) => {

    const choices = tareas.map((tarea, i) => {

        const idx = `${i + 1}`.green;

        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        };
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + 'Cancelar'
    });

    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar',
        choices
    }]

    const { id } = await inquirer.prompt(preguntas);
    return id;
};

const confirmarBorrado = async(message) => {
    const question = [{
        type: 'confirm',
        name: 'ok',
        message,
    }];

    const { ok } = await inquirer.prompt(question);
    return ok;
};

/*     {
        value: '2',
        name: `${'2.'.green} Listar tareas`

    }, */


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTarreasBorrar,
    confirmarBorrado
}