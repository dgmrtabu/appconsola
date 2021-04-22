/**
 * _listado:
 * {'uuid-4584521-45487': {id:12, des:abc, completado: 4548785} },
 */

const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    constructor() {
        this._listado = {};
    }

    crearTarea(desc = ''){

        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas;