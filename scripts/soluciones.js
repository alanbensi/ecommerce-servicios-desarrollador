// SOLUCIONES

// PROBLEMA 1 => FOR


// 1 Alert() los 10 alumnos que van a preguntar
// 2 Console log para los 10 alumnos y lo muestro en consola
// 3. Hacer el ciclo for para llegar de 1 a 10

// for(Punto de inicio ; Punto final ; ACTUALIZADOR){
//     TODO LO QUE QUIERO HACER. SECUENCIA DE CODIGOS.
// }


// let alumnos = 1;

// for(alumnos; alumnos <= 10; alumnos = alumnos + 1) {
//     let nombreAlumno = prompt ("Como te llamas?");
//     console.log ("El alumno se llama: " + nombreAlumno + " y va a hacer la consulta " + alumnos);
//     alert (`El alumno se llama: ${nombreAlumno} y va a hacer la consulta ${alumnos}`);
// }


//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

//PROBLEMA 2 => WHILE

// 1 Pedir nombre al usuario
// 2 Saludar
// 3 Aclarar que debe escribir salir, sino no podra escapar del ciclo.

// while ====== MIENTRAS QUE.

// while(CONDICION) {
//     BLOQUE DE CODIGO A EJECUTAR.
//}


// let nombreUsuario = prompt ("Hola! Como te llamas?").toUpperCase();

// while(nombreUsuario != "SALIR") {
//     alert ("Hola " + nombreUsuario + "\nEstas dentro de un ciclo. Para escapar de el, por favor escribi 'SALIR'.");
//     nombreUsuario = prompt ("Ingresa tu nombre nuevamente o escribi SALIR").toUpperCase();
// }


//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 3 => DO WHILE

// let nombre = false;

// do {
//     nombre = prompt("Como te llamas?")
//     alert("Hola " +nombre )
// } while (nombre);

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎


// PROBLEMA 4 => FOR

// alert("Bienvenido a la rifa mas increible del mundo. \nTe vamos a pedir que nos digas tu nombre y te daremos un numero para participar 😉😉");
// for (let rifaSorteo = 1; rifaSorteo <= 20; rifaSorteo++ ) {
//     let compradorRifa = prompt ("Ingresa tu nombre");
//     alert ("Hola " + compradorRifa + " tu numero es el " + rifaSorteo);
//     if (rifaSorteo === 3){
//         alert ("Tardaste mucho, la rifa 3 ya la compro Alan");
//         console.log ("La rifa 3 la tiene reservada Alan");
//         continue;
//     }
//     console.log ("La rifa " + rifaSorteo + " la compro " + compradorRifa);
// }

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

//PROBLEMA 5 => FOR

// TABLA DE MULTIPLICAR DE UN NUMERO:

// let numeroTabla = parseInt (prompt("Ingresá un numero asi hacemos su tabla de multiplicar!"));

// for (let multiplicador = 1; multiplicador <= 10; multiplicador++ ){
//     let resultado = numeroTabla * multiplicador;
//     alert (numeroTabla + " x " + multiplicador + " = " + resultado);
// }

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

// PROBLEMA 6 => DO WHILE

// let edad = 0;

// do {
//     edad = prompt("Ingresa tu edad!");
//     console.log (edad);
// } while (parseInt(edad));

//😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎😎

//PROBLEMA 7 IMPOSIBLE 😬

// let nombre = '';
// let apellido = '';
// let num;
// let sistema = true;

// while (sistema) {
//     let option = prompt('Ingrese el número correspondiente a la acción que desea ejecutar: \n1.-Ingresar mi nombre \n2.-Ingresar mi apellido \n3.-Ver mi nombre \n4.-Imprimir las potencias de un número hasta 1000 \n5.-Imprimir números pares del 1 al numero que decidas \n"ESC" Salir del programa');
//     switch (option) {
//         case '1':
//             nombre = prompt('Ingresa tu nombre: ');
//             break;
//         case '2':
//             apellido = prompt('Ingresa tu apellido: ')
//             break;
//         case '3':
//             alert('Tu nombre es ' + nombre + ' ' + apellido);
//             break;
//         case '4':
//             num = prompt('Ingrese el número para calcular sus potencias:');
//             let potencia = 1 * num;
//             while (potencia < 1000) {
//                 alert(potencia);
//                 potencia = potencia * num;
//             }
//             break;
//         case '5':
//             let respuesta = '';
//             let final = parseInt(prompt("Elegi el numero hasta el que quieras ver los pares!"));
//             for (let index = 1; index <= final; index++) {
//                 if (index % 2 === 0) {
//                     respuesta = respuesta + ' ' + index;
//                 }
//             }
//             alert('Numéros pares: ' + respuesta);
//             break;
//         case 'ESC':
//             sistema = false;
//             alert('Nos vemos la próxima 😊')
//             break;
//         default:
//             alert('La opción ingresada no existe');
//             break;
//     }
// }