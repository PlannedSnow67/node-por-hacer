const argv = require('./config/yargs').argv;  
const porHacer = require('./por-hacer/por-hacer');



let comando = argv._[0];

switch(comando){

    case 'crear':
        console.log("Crear por hacer");
        let  tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);

        break;
    
    case 'listar':
        console.log("Mostrar todas las tareas por hacer");

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log("====================");
            console.log(tarea.descripcion);
            console.log("Estado: ", tarea.completado);
            console.log("====================");
        }
        break;

    case 'actualizar':
        console.log(argv.descripcion);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        console.log("Actualiza una tarea por hacer");
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        
        break;


    default:
        console.log("Comando no reconocido");


}