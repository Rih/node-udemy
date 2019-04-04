//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const todo = require('./todo/todo');
console.log(argv);

let comando = argv._[0]

switch(comando){
    case 'crear':
        let task  = todo.crear(argv.descripcion);
        console.log(task);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        break;
    case 'actualizar':
        console.log('Actualizar una tarea');
        break;
    default:
        console.log('Comando no es reconocido');
}