/*
* Async Await
 */

//  let getNombre = async() => {

//     // throw new Error('No existe un nombre para ese usuario');
//     return 'Fernando';
//  };

 let getNombre = () => {
    return new Promise( (resolve, reject) => { 
        setTimeout( () => {
            resolve('Fernando');
        }, 3000);
        resolve('Fernando');
    });
 };



let saludo = async () => {
    let nombre = await getNombre();
    return `Hola ${ nombre}`;
}

saludo().then( mensaje => {
    console.log(mensaje);
});

// getNombre().then(nombre => {
//     console.log(nombre);
// })
// .catch( e => {
//     console.log('Error de ASYNC');
// });

// console.log(getNombre());
