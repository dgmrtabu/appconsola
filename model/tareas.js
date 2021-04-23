/**
 * _listado:
 * {'uuid-4584521-45487': {id:12, des:abc, completado: 4548785} },
 */

const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    crearTarea(desc = '') {

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {

        this.listadoArr.forEach((tarea, i) => {
            const idx = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ?
                'Completado'.green :
                'Pendiente'.red;
            console.log(`${idx} ${desc} :: ${estado}`);

        });

    }

    listarPendientesCompletadas(completadas = true) {

        console.log();
        let contador = 0;
        this.listadoArr.forEach(tarea => {
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ?
                'Completada'.green :
                'Pendiente'.red;

            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(`${(contador+ '.').green} ${desc} :: ${completadoEn}`);
                }
            } else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${(contador+ '.').green} ${desc} :: ${estado}`);
                }
            }
        });
    }

}
module.exports = Tareas;