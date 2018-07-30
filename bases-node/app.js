
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


// let argv2 = process.argv;
// console.log(argv.base);
// console.log(argv.limite);
// let parametro = argv[2]
// let base = parametro.split('=')[1]
// console.log(argv2);

console.log(argv);


let base = argv.base;

let comando = argv._[0];


switch(comando){
    
    case 'listar':
        listarTabla(argv.base,argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then( archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
        .catch(e => console.log(e));
    break;
    default:
        console.log('comando no reconocido');
}

