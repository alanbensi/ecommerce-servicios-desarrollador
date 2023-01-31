// Objetos.

// // const o let nombreObjeto = {
//     PROPIEDADES : ABC ,
//     METODOS () {
//         BLOQUE DE CODIGO A EJECUTAR DEL METODO
//     }
// }


//  Objeto auto con metodo "arrancar"

// const auto = {
//     marca: "Ferrari",
//     modelo: "2.0 turbo",
//     motor: "3.15",
//     consumoGasolina: 35,
//     estadoArrancar: false,
//     arrancarAuto () {
//         console.log ("METODO: El auto arranco perfecto!");
//         return auto.estadoArrancar = true;
//     }
// }

// console.log ("Hola soy el mejor auto del mundo:", auto)

// console.log ("Motor del auto", auto.motor);
// console.log ("Modelo:", auto.modelo);
// console.log ("El auto actualmente esta: ", auto.estadoArrancar);

// console.log(auto.arrancarAuto());


// // Los objetos pueden tener todos los tipos de datos dentro. Propiedades, metodos (que pueden tener argumentos en sus () o no). + destructuring

// const alumno = {
//     nombre: "Pepe",
//     apellido: "Perez",
//     edad: 27,
//     gustos: ["correr", "caminar", "andar en bicicleta", "estudiar programación", "dejar responsive su proyecto para que el profe no moleste mas😂"],
//     curso: "Programacion web",
//     buenEstudiante: true,
//     hablar () {
//         console.log ("Hola profe, recien estoy volviendo de vacaciones y no entiendo en que idioma me estas hablando😥😅")
//     }
// }

// // alumno.hablar ();
// console.log (alumno, "primer momento");
// // console.log(alumno.gustos[3]);
// alumno.mejorProfe = "El mejor profe que tuve en la vida por lejos es Alan 😉" //AGREGO PROPIEDAD AL OBJETO EXISTENTE

// console.log(alumno, "segundo momento");



//////////////////////////

//DESTRUCTURING o Desestructuracion

// const {nombre} = alumno
// console.log(nombre);



///////////////////////////////////////////

// //ARRAYS => Son como las "Listas del supermercado" pero en programacion!

// const productos = ["hola", 54, "papas fritas", true, tortugaNinja={nombre: "leonardo", tortuga: "roja"}, arrayDentro = ["estoy dentro", "soy el segundo array"] ];

// // console.log (productos);

// // console.log("array dentro de array", productos[5][0]);


// const [saludo, edad,comida,boleano] = productos;

// console.log (comida);






const carritoDeCompras = [];

console.log (carritoDeCompras);

const servicio1 = {
    nombre: "Pagina web sencilla",
    imagen: "abc.jpg",
    precio: 500, 
    detalle: "Pagina web simple con 3 html, totalmente estatica."
}

const servicio2 = {
    nombre: "Pagina web ecommerce",
    imagen: "abc.jpg",
    precio: 1000,
    detalle: "Pagina web ecommerce, en la cual podras vender todos tus productos online"
}

carritoDeCompras.push(servicio1);

console.log(carritoDeCompras);

carritoDeCompras.push (servicio2);