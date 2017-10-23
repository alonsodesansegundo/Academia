"use strict"

//Definición de funciones

//Función que nos devuelve un array con el nombre de los alumnos
function nombreAlumnos(listaAlumnos){
    let nombres=[];
    for(let alumno of listaAlumnos){       
        nombre.push(alumno.nombre); //Cambiar nombres por nombre
    }
    return nombres;
}


//Función que nos devuelve un objeto alumno, buscamos por nombre
//Si no encuentra ningún alumno con ese nombre devuelve null
function buscarAlumno(nombre,listaAlumnos){
    for(let alumno of listaAlumnos){       
        if(alumno.nombre==nombre){
            return alumno;
        }
        return alumno;
    }
}


//función que nos devuelve el nombre completo de un alumno
//recibe como parametro un objeto alumno
function nombreCompleto(alumno){
    let nombre="";
    nombre=alumno.nombre;
    for(let apellido of alumno.apellidos){
        nombre=nombre+apellido;
    }
    return nombre;
}

//función que devuelve los alumnos que pertenecen a determinado curso
function alumnosCurso(curso,listaAlumnos){
    let alumnosCurso=[];
    for(let alumno of listaAlumnos){
        if(alumno.curso==curso){
            alumnosCurso.push(alumno);
        }
        
    }
    return alumnosCurso;
}


//Función que devuelve los alumnos matriculados en la asignatura
//que pasamos como parámetro
function alumnosAsignatura(asignatura,listaAlumnos){
    let alumnosAsignatura=[];
    
    //Completar código

    return alumnosAsignatura;
}


//////////////////////////EMPIEZA EL PROGRAMA//////////////////////////////////////////

console.log("Empieza el programa");
let fs = require("fs");
let alumnos = fs.readFileSync("alumnos.json","utf-8");
let alumnosArray=JSON.parse(alumnos);

console.log("El número de alumnos del ficheros es: "+alumnos.length);

console.log("Los nombres de los alumnos matriculados son:");
//let nombres_de_alumnos=nombreAlumnos(alumnosArray);

console.log("Voy a comprobar si hay una alumna llamada Olivia")
//let alumno=buscarAlumno("Olivia",alumnosArray); //Como no hay tendría que mostrar null
//console.log(alumno);

console.log("Voy a comprobar si hay un alumno llamado Pedro");
//let alumno=buscarAlumno("Pedro",alumnosArray); //Como si lo hay tendría que mostrar el alumno Pedro
//console.log(alumno);


console.log("Ahora voy a mostrar el nombre completo de Pedro");
let alumno=buscarAlumno("Pedro",alumnosArray); //Es necesario que buscarAlumno funcione bien
let nombre_completo=nombreCompleto(alumno);
console.log(nombre_completo);

console.log("Alumnos de Primero")
let alumnos_primero=alumnosCurso("primero",alumnosArray);
console.log(alumnos_primero);





