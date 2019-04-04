const fs = require('fs');


let listToDo = [];

const guardarDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json',data, (err) => {
        if (err) throw new Error('no se pudo grabar', err);
    });
}

const cargarDB = () => {
    listToDo = 
}

const crear = (descripcion) => {

    let todo = {
        descripcion,
        completado: false
    };

    listToDo.push(todo);
    guardarDB();
    return todo;
};

module.exports = {
    crear
}