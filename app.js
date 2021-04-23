const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
    inquirerMenu,
    pausa,
    leerInput
} = require('./helpers/inquirer');

const Tarea = require('./model/tarea');
const Tareas = require('./model/tareas');

require('colors');

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if (tareasDB) { //Cargar tareas
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {

        // Mostrar el Menu
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                const desc = await leerInput('Descripcion de la Tarea:');
                tareas.crearTarea(desc);
                break;
            case '2':
                // console.log(tareas.listadoArr);
                tareas.listadoCompleto();
                break;
            case '3':
                tareas.listarPendientesCompletadas(true);
                break;
            case '4':
                tareas.listarPendientesCompletadas(false);
                break;
            case '5':
                break;
        }

        guardarDB(tareas.listadoArr);

        if (opt !== '0') await pausa();

    } while (opt !== '0');

};

main();