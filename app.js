const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');

const Tarea = require('./model/tarea');
const Tareas = require('./model/tareas');

require('colors');

const main = async() => {
    console.log('Hola mundo');

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu(); /*monstrarMenu();*/
        console.log({ opt });

        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion de la Tarea:');
                tareas.crearTarea(desc);
                break;
            case '2':
                console.log(tareas._listado);
                break;
            case '3':
                break;
            case '4':
                break;
            case '5':
                break;
        }

        if (opt !== '0') await pausa();

    } while (opt !== '0');

};

main();