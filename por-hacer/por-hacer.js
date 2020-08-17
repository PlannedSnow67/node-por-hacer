const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log('El archivo ha funcionado!');
      });
}

let cargarDB = () =>{

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
    
}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push( porHacer );
    guardarDB();

    return porHacer;
}

let getListado = () => {
    
    cargarDB();
    return listadoPorHacer;

}


let actualizar = (descripcion, completado = true) => {
    
    cargarDB();
    
    let index = listadoPorHacer.findIndex( (tarea) =>{
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){

        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}


let borrar = (descripcion) =>{

    cargarDB();

    let index = listadoPorHacer.findIndex( (tarea) =>{
        return tarea.descripcion === descripcion;
    });

    if(index >= 0){

        let salido = listadoPorHacer.splice(index, 1);
        guardarDB();
        return salido;
    } else {
        return (`No existe la tarea con: ${descripcion}`);
    }

}

module.exports =  {
    crear,
    guardarDB, 
    getListado, 
    actualizar,
    borrar
}