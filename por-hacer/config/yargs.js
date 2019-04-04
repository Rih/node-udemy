const opts = {
    descripcion:{
        demand:true,
        alias:'d'
    },
    completado: {
        alias:'c',
        default: true
    }
};

const argv = require('yargs')
.command('listar','Imprime en consola la lista de tareas por hacer')
.command('crear','Crear un elemento por hacer',opts)
.command('actualizar','Actualiza el estado completado de una tarea',opts)
.help()
.argv;

module.exports = {
    argv
}