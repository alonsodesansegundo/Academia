"use strict"
/**
 * @fileOverview En este fichero hay ejercicios con funciones y sus definiciones
 * @author Lucas Alonso
 * @version 1.0
 */

/**
 * @description Esta funcion nos devuelve una coleccion con el nombre de los alumnos
 * @param {Array} listaAlumnos Es la coleccion
 * @returns {Array} Nos devuelve el nombre de los alumnos
 */
function nombreAlumnos(listaAlumnos) {
    let nombre = [];
    for (let alumno of listaAlumnos) {
        nombre.push(alumno.nombre); 
    }
    return nombre;
}

/**
 * @description Esta funcion nos devuelve el objeto del alumno que buscamos con sus datos correspondientes, si no encuentra ningun alumno con ese nombre nos devuelve null
 * @param {String} nombre Es el nombre del alumno que introducimos
 * @param {Array} listaAlumnos Es la coleccion en la que queremos buscar el nombre
 * @returns {Object} Nos devuelve los datos del alumno indicado
 */
function buscarAlumno(nombre, listaAlumnos) {
    for (let alumno of listaAlumnos) {
        if (alumno.nombre = nombre) {
            return alumno;
        }
        return alumno;
    }
}

// A MI MANERA
// function buscarAlumno(nombre, listaAlumnos) {
//     let nombres = []
//     for (let alumno of listaAlumnos) {
//         if (alumno.nombre = nombre) {
//             nombres.push(nombre)
//         }
//     } return nombres;
// }


/**
 *  @description Esta funcion nos devuelve el nombre completo de un alumno tras introducir solamente el nombre
 * @param {String} alumno Nombre del alumno
 * @returns {String} Nos devuelve el nombre completo del alumno indicado, lo indicamos con su nombre
 */
function nombreCompleto(alumno) {
    let nombre = "";
    nombre = alumno.nombre;
    for (let apellido of alumno.apellidos) {
        nombre = nombre + apellido;
    }
    return nombre;
}

/**
 * @description Esta funcion nos devuelve los alumnos que pertenecen a un curso concreto
 * @param {String} curso El curso del que queremos buscar los alumnos
 * @param {Array} listaAlumnos Coleccion en la que queremos buscar a los alumnos (la coleccion general)
 * @returns {Array} Nos devuelve los alumnos que pertenecen al grupo indicado
 */
function alumnosCurso(curso, listaAlumnos) {
    let alumnosCurso = [];
    for (let alumno of listaAlumnos) {
        if (curso = alumno.curso) {
            alumnosCurso.push(alumno.nombre);
        }
    }
    return alumnosCurso;
}

/**
 * @description Esta funcion nos devuelve a los alumnos que estan matriculados en la asignatura que le indicamos
 * @param {String} asignatura Asignatura en cuestion 
 * @param {Array} listaAlumnos Coleccion en la que queremos buscar a los alumnos (la coleccion general)
 * @returns {Array} Nos devuelve los alumnos que pertenecen a una asignatura indicada
 */
function alumnosAsignatura(asignatura, listaAlumnos) {
    let alumnosAsignatura = [];
    for (let alumno of listaAlumnos) {
        if (alumno.asignatura = asignatura) {
            alumnosAsignatura.push(alumno);
        }
    }
    return alumnosAsignatura;
}




//////////////////////////EMPIEZA EL PROGRAMA//////////////////////////////////////////

console.log("EMPIEZA EL PROGRAMA!");

/**
 * @description Cuenta el numero de ficheros que hay
 */
let fs = require("fs");
let alumnos = fs.readFileSync("alumnos.json", "utf-8");

let alumnosArray = JSON.parse(alumnos);

// console.log("El número de alumnos del ficheros es:", alumnosArray.length);

// console.log("Los nombres de los alumnos matriculados son:", nombreAlumnos(alumnosArray));



// console.log("Voy a comprobar si hay una alumna llamada Olivia")
// let alumno=buscarAlumno("Olivia",alumnosArray); //Como no hay tendría que mostrar null, pero me dice que Olivia is not defined
// console.log(alumno);

// console.log("Voy a comprobar si hay un alumno llamado Pedro");
// let alumno=buscarAlumno("Pedro",alumnosArray); //Como si lo hay muestra el alumno Pedro
// console.log(alumno);



// console.log("Ahora voy a mostrar el nombre completo de Pedro");
// let alumno = buscarAlumno("Manolo!,alumnosArray); //Es necesario que buscarAlumno funcione bien
// let nombre_completo= nombreCompleto(alumno);
// console.log(nombre_completo);

// console.log("Alumnos de Primero")
// let alumnosprimero=alumnosCurso("primero",alumnosArray);
// console.log(alumnosprimero);