let nombre = 'Deadpool';
let real = 'Wade Winston';
let nombreTemplate =`${nombre} ${real}`;
//console.log(nombreTemplate);


function getNombre()
{
    return ` ${nombre} ${real} `;
}

console.log(`El nombre es:  ${ getNombre() }`)