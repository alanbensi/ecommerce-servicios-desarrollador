// // Objetos.

// // // const o let nombreObjeto = {
// //     PROPIEDADES : ABC ,
// //     METODOS () {
// //         BLOQUE DE CODIGO A EJECUTAR DEL METODO
// //     }
// // }


// //  Objeto auto con metodo "arrancar"

// // const auto = {
// //     marca: "Ferrari",
// //     modelo: "2.0 turbo",
// //     motor: "3.15",
// //     consumoGasolina: 35,
// //     estadoArrancar: false,
// //     arrancarAuto () {
// //         console.log ("METODO: El auto arranco perfecto!");
// //         return auto.estadoArrancar = true;
// //     }
// // }

// // console.log ("Hola soy el mejor auto del mundo:", auto)

// // console.log ("Motor del auto", auto.motor);
// // console.log ("Modelo:", auto.modelo);
// // console.log ("El auto actualmente esta: ", auto.estadoArrancar);

// // console.log(auto.arrancarAuto());


// // // Los objetos pueden tener todos los tipos de datos dentro. Propiedades, metodos (que pueden tener argumentos en sus () o no). + destructuring

// // const alumno = {
// //     nombre: "Pepe",
// //     apellido: "Perez",
// //     edad: 27,
// //     gustos: ["correr", "caminar", "andar en bicicleta", "estudiar programación", "dejar responsive su proyecto para que el profe no moleste mas😂"],
// //     curso: "Programacion web",
// //     buenEstudiante: true,
// //     hablar () {
// //         console.log ("Hola profe, recien estoy volviendo de vacaciones y no entiendo en que idioma me estas hablando😥😅")
// //     }
// // }

// // // alumno.hablar ();
// // console.log (alumno, "primer momento");
// // // console.log(alumno.gustos[3]);
// // alumno.mejorProfe = "El mejor profe que tuve en la vida por lejos es Alan 😉" //AGREGO PROPIEDAD AL OBJETO EXISTENTE

// // console.log(alumno, "segundo momento");



// //////////////////////////

// //DESTRUCTURING o Desestructuracion

// // const {nombre} = alumno
// // console.log(nombre);



// ///////////////////////////////////////////

// // //ARRAYS => Son como las "Listas del supermercado" pero en programacion!

// // const productos = ["hola", 54, "papas fritas", true, tortugaNinja={nombre: "leonardo", tortuga: "roja"}, arrayDentro = ["estoy dentro", "soy el segundo array"] ];

// // // console.log (productos);

// // // console.log("array dentro de array", productos[5][0]);


// // const [saludo, edad,comida,boleano] = productos;

// // console.log (comida);






// // const carritoDeCompras = [];

// // console.log (carritoDeCompras);

// // const servicio1 = {
// //     nombre: "Pagina web sencilla",
// //     imagen: "abc.jpg",
// //     precio: 500, 
// //     detalle: "Pagina web simple con 3 html, totalmente estatica."
// // }

// // const servicio2 = {
// //     nombre: "Pagina web ecommerce",
// //     imagen: "abc.jpg",
// //     precio: 1000,
// //     detalle: "Pagina web ecommerce, en la cual podras vender todos tus productos online"
// // }

// // carritoDeCompras.push(servicio1);

// // console.log(carritoDeCompras);

// // carritoDeCompras.push (servicio2);

// //ESTRUCTURA DE FUNCIONES:

// // function nombreDeFuncion (LE PUEDO PASAR PARAMETROS) {
// //     BLOQUE DE CODIGO A EJECUTAR
// // }

// // LLAMADO A LA FUNCION ();


// // Funcion con function sin parametros


// //Funcion con function + parametros (Nos permite hacer mas dinamica y re-utilizable la función)

// // function saludarParametros (nombre, edad, cursoProgramacion = "ReactJs") {
// //     console.log (`Hola ${nombre}. Tenés ${edad} años y queres hacer el curso de ${cursoProgramacion}`);
// // }

// // saludarParametros ("David", 27, "Programacion web");
// // saludarParametros ("Alfredo", 34, "Python");
// // saludarParametros("Cesar", 34, "Backend");
// // saludarParametros("Orlando", 26, "Angular");



// /////////////////////////////////////////////////////////////////////////////////////////////
// // //ARROW FUNCTION (Funcion flecha)

// // -Sin parametros:

// // const saludarArrow = () => console.log("Esta es la => sin parametros. Hola usuario de la => function!");

// // saludarArrow();


// // -Con 1 parametro:

// // const saludarArrow = nombre => console.log("Esta es la => con 1 parametro. Hola " + nombre + " de la => function!");

// // saludarArrow("Alejandro");
// // saludarArrow("Pepito");
// // saludarArrow("Marcelito");

// // -Con + de 1 parametro:

// // const saludarArrow = (nombre, apellido, edad) => console.log("Esta es la => con + de 1 parametro. Hola " + nombre + apellido + " de la => function!" + " tenes " + edad + " años.") ;

// // saludarArrow("Alejandro", "gonzalez", 24);
// // saludarArrow("Pepito", "rodriguez", 57);
// // saludarArrow("Marcelito", "gomez", 38);


// // function saludar() {
// //     return "Hola usuario! Como estas?";
// // }
// // const resultadoFuncion = saludar();

// // console.log (resultadoFuncion);

// // const saludarArrow = () => "Esta es la => sin parametros. Hola usuario de la => function!";

// // console.log(saludarArrow());


// /////////////////////////////////////////////////////////////


// //OPERADOR TERNARIO

// // let autoProfe = true; 

// // // if (autoProfe) {
// // //     console.log ("Profe comprese una casa");
// // // } else {
// // //     console.log ("Genial, no estas en el auto");
// // // }

// // autoProfe ? (console.log("Profe comprese una casa")) : (console.log("Genial, no estas en el auto")); 

// // const verduras = [ 
// //     {nombre: "pepino", precio: 10},
// //     { nombre: "calabaza", precio: 20 },
// //     { nombre: "pepino2", precio: 30 },
// // ]

// // const ejercicio3 = verduras.map (item => item.precio); 

// // const ej3Reduce = ejercicio3.reduce ((total, precios)=> total + precios);

// // console.log ("total", ej3Reduce); 

// // const promedio = ej3Reduce / verduras.length;

// // console.log (promedio)


// // console.log ("Array original",ropaGatos);

// // for (let i = 0; i < ropaGatos.length; i++) {
// //     console.log ("LAS PROPIEDADES DE ESTE PRODUCTO: ", ropaGatos[i]);
// // }


// // console.log (ropaGatos);



// // console.log ("El carrito actualmente tiene : ", carrito);

// // carrito.push (ropaGatos[2]);

// // console.log("El carrito actualmente tiene : ", carrito);


// //for ( inicio; final; actualizador) {
// //     bloque de codigo que querramos hacer por cada iteracion
// // }

// // console.log ("CARRITO DE COMPRAS: " , carritoCompras);




// // agregarCarrito(ropaGatos[2], carritoCompras);
// // agregarCarrito(ropaGatos[1], carritoCompras);
// // agregarCarrito(ropaGatos[3], carritoCompras);

// // console.log ("El carrito ahora tiene estos productos: ",carritoCompras);

// // Mostrar en consola todos los productos del carrito: 

// // for (let i = 0; i < carritoCompras.length; i++) {
// //     console.log("LAS PROPIEDADES DE ESTE PRODUCTO: ", ropaGatos[i]);
// // }

// // Mostrar en consola el precio final del carrito:  


// // let totalCarrito = 0;  

// // for (let i = 0; i < carritoCompras.length; i++) {

// //     console.log("EL PRECIO TOTAL A PAGAR DEL CARRITO ES:  ", totalCarrito += carritoCompras[i].precio );
// // }


// ///////////////////////////////////////////////////


// //FOR EACH 

// // ropaGatos.forEach (item => {
// //     console.log ("Los productos hoy cuestan: ", item.precio /2)
// // })

// // FILTER 

// // const preciosMasBajos = ropaGatos.filter(elemento => elemento.precio < 100)

// // console.log ("Los productos con el precio mas bajo de mi ecommerce son: ", preciosMasBajos)

// // const preciosMasAltos = ropaGatos.filter (elemento => elemento.precio > 500);

// // console.log ("Los productos mas caros son: ", preciosMasAltos);

// // const nombreProducto = ropaGatos.filter (item => item.nombre.includes("P"));

// // console.log (nombreProducto, "INCLUYE?");


// // FIND

// // const productoSeleccionado = ropaGatos.find (producto => producto.id === 5);

// // console.log ("El producto que el usuario quiere comprar es: " , productoSeleccionado);

// // console.log ("El carrito tiene estos productos: " ,carritoCompras);

// // agregarCarrito (productoSeleccionado, carritoCompras); 

// // console.log("El carrito ahora tiene estos productos: ", carritoCompras);



// // SOME 

// // const productoRojo = ropaGatos.some(item => item.color === "rojo");
// // console.log ("HAY ALGUN PRODUCTO ROJO EN EL CARRITO ? ", productoRojo);

// // const tallaXL = ropaGatos.some(item => item.talle === "xl");
// // console.log("HAY ALGUN PRODUCTO XL EN EL CARRITO? ", tallaXL);


// // if (productoRojo && tallaXL) {
// //     console.log ("Te estas llevando una prenda unica, tenes un descuento exclusivo del 10%");
    
// // }else {
// //     console.log("Gracias por tu compra");
// // }


// // MAP 

// // console.log("PRECIOS NORMALES: ", ropaGatos);

// // const mitadPrecio = ropaGatos.map (item => item.precio / 2);

// // console.log ("Hoy estamos de oferta, los precios estan 50% off", mitadPrecio); 


// //REDUCE (ACUMULADOR, VALORES ACTUALES ////// OPCIONAL: Valor inicial). 


// //OPCION A: MEZCLA MAP Y REDUCE. 

// // const arrayPrecios = carritoCompras.map(item => item.precio);

// // console.log ("PRECIOS DEL CARRITO: ",arrayPrecios);

// // const precioFinal = arrayPrecios.reduce ((total, precio)=>total + precio);

// // console.log ("El precio que el cliente tiene que pagar: ", precioFinal);

// // //OPCION B: SOLO REDUCE


// // const precioFinalOpcionB = carritoCompras.reduce ((acumulador, item)=> acumulador + item.precio, 500);

// // console.log ("En la opcion B, el precio total + EL DELIVERY es: ", precioFinalOpcionB); 


// // if (precioFinal >= 500) {
// //     console.log ("Tu compra es muy grande, te bonificamos el envio. El total es: ", precioFinal);
// // } else {
// //     console.log ("El precio final + envio es: ", precioFinalOpcionB);
// // }



// // SORT 

// // const masBaratoAMasCaro = ropaGatos.sort ((producto1 , producto2) => producto1.precio - producto2.precio);

// // console.log ("LOS PRODUCTOS ORDENADOS DE MAS BARATO A MAS CARO", masBaratoAMasCaro); 

// // const masCaroAMasBarato = ropaGatos.sort((producto1, producto2) => producto2.precio - producto1.precio);

// // console.log("LOS PRODUCTOS ORDENADOS DE MAS Caro A MAS barato", masCaroAMasBarato); 


// // const ordenAlfabetico = ropaGatos.sort ((item1 , item2) => {
// //     if (item1.nombre == item2.nombre){
// //         return 0;
// //     }else if(item1.nombre < item2.nombre) {
// //         return -1;
// //     } else {
// //         return 1;
// //     }
// // })

// // console.log("LOS PRODUCTOS ORDENADOS ALFABETICAMENTE", ordenAlfabetico); 

// // COMO ACCEDEMOS A LOS ELEMENTOS (NODOS) DEL DOM ???

// // QUERY SELECTOR

// // console.log(document.querySelector("h1")) // SOLAMENTE EL PRIMER ELEMENTO QUE CUMPLA CON ESE SELECTOR
// // console.log(document.querySelector(".logo")) // SOLAMENTE EL PRIMER ELEMENTO QUE CUMPLA CON ESE SELECTOR DE CLASE
// // console.log(document.querySelector("#contenedorProductos")) // CAPTURA EL NODO CON ESE ID

// // // QUERY SELECTOR ALL

// // console.log(document.querySelectorAll("li")) // TODOS LOS ELEMENTOS COMO UN NODELIST QUE CUMPLAN CON EL SELECTOR DE ETIQUETA
// // console.log(document.querySelectorAll(".linksNav")) // TODOS LOS ELEMENTOS COMO UN NODELIST QUE CUMPLAN CON EL SELECTOR DE CLASE
// //                                                     // NO TIENE SENTIDO HACERLO POR ID XQ ES UNICO, IRREPETIBLE, BLA, BLA BLA.


// // // GET ELEMENT BY ID

// // console.log(document.getElementById ("")) // TRAE EL ELEMENTO POR ID. 


// // COMO MODIFICAR UN NODO/// ELEMENTO CON EL DOM?? 

// // const h1 = document.querySelector("h1");

// // h1.textContent = "<p>AHORA ESTOY MODIUFICANDO CON text content DESDE UN PARRAFO </p>"; 



// // contenedorProductos.innerHTML ="<p>HOLA</p>"

// // COMO AGREGAR ESTILOS SIN INNER HTML 

// // contenedorProductos.classList.add ("gola", "papaFrita", "tercerClase");


// // COMO AGREGAR ETIQUETAS SIN INNER HTML

// // const h3 = document.createElement ("h3"); 
// // h3.textContent = "CONTENIDO DEL H3";
// // contenedorProductos.appendChild (h3);







//CONSTANTES

const contenedorProductos = document.getElementById("contenedorProductos");
const contenedorIconoCarrito = document.getElementById("contenedorIconoCarrito"); 
const contenedorCarritoCanvas = document.getElementById ("contenedorCarritoCanvas");
const vaciarCarrito = document.getElementById ("vaciarCarrito"); 
const contadorCarrito = document.createElement("p");



// ARRAY CON TODOS MIS PRODUCTOS / SERVICIOS

const serviciosDesarrollador = [
    { id: 1, img: "../imagenes/web-estatica.gif", nombre: "Desarrollo de sitio web estático", precio: 500, cantidad: 1 },
    { id: 2, img: "../imagenes/ecommerce.gif", nombre: "Desarrollo de E-commerce", precio: 1500, cantidad: 1 },
    { id: 3, img: "../imagenes/mantenimiento.gif", nombre: "Mantenimiento del sitio web", precio: 300, cantidad: 1 },
    { id: 4, img: "../imagenes/servidor.gif", nombre: "Subida al servidor", precio: 200, cantidad: 1 },
    { id: 5, img: "../imagenes/dominio.gif", nombre: "Gestion de hosting y dominio", precio: 900, cantidad: 1 }
];

// ARRAY DE CARRITO DE COMPRAS

const carritoCompras = []; 

// FX QUE AGREGA LOS PRODUCTOS AL CARRITO

const agregarAlCarrito = (servicioSeleccionado, carrito) => {
    const servicioElegido = serviciosDesarrollador.find (item => item.id === servicioSeleccionado)
    carrito.push(servicioElegido);
    console.log("Se agrego con exito el producto!");
    agregarContadorCarrito();
    mostrarCarrito();
    agregarLocal("carrito", carritoCompras);
}

// FX QUE AGREGA EL CONTADOR DE LA CANTIDAD DE PRODUCTOS DEL CARRITO

const agregarContadorCarrito = () => {
    if (carritoCompras.length !== 0) {
        contenedorIconoCarrito.appendChild(contadorCarrito);
        contadorCarrito.textContent = carritoCompras.length;
        contadorCarrito.classList.add("productosEnCarrito");
        vaciarCarrito.classList.remove("d-none"); 
    } else {
        contadorCarrito.textContent = "";
        contadorCarrito.classList.remove ("productosEnCarrito"); 
    }
}

// FX QUE ELIMINA EL PRODUCTO ELEGIDO DEL CARRITO

const eliminarProducto = (productoSeleccionado) => {
    const productoElegido = carritoCompras.find (item => item.id === productoSeleccionado);
    const indice = carritoCompras.indexOf (productoElegido)
    carritoCompras.splice (indice, 1);
    mostrarCarrito();
    agregarContadorCarrito();
}

//FX QUE BORRA TODO EL CARRITO 

const borrarCarrito = () => {
    vaciarCarrito.addEventListener ("click", () =>{
        carritoCompras.length = 0;
    })
}

// FUNCION QUE GENERA EL DOM REFERIDO A LOS ELEMENTOS DEL CARRITO Y LOS MUESTRA EN LA SECCION DEL CARRITO

const mostrarCarrito = () => {
    const precioTotal = document.createElement ("p");
    precioTotal.textContent =`Precio total:`;
    contenedorCarritoCanvas.classList.remove("carritoCanvasCuerpo");
    contenedorCarritoCanvas.innerHTML ="";
    
    carritoCompras.forEach (servicio => {
        const div = document.createElement("div");
        div.classList.add("pruebaCarrito");
        div.innerHTML =
        `
            <p>${servicio.cantidad} </p>
            <p>${servicio.nombre}</p>
            <p>${servicio.precio}</p>
            <button id="eliminar${servicio.id}"><iconify-icon icon="mdi:trash-can-circle" style="color: red;"></iconify-icon></button>
        `
        contenedorCarritoCanvas.appendChild(div);

        const botonEliminarProducto = document.getElementById(`eliminar${servicio.id}`);
        botonEliminarProducto.addEventListener ("click",()=> {
            console.log ("eliminar" , servicio.id);
            eliminarProducto(servicio.id);
        })
    })
    
    contenedorCarritoCanvas.appendChild (precioTotal);
    vaciarCarrito.innerHTML = "Vaciar carrito";
}


//MUESTRO MIS PRODUCTOS EN EL DOM

serviciosDesarrollador.forEach (servicio => {
    const div = document.createElement("div");
    div.innerHTML =
        `
    <div class="card cardServicios m-0">
        <img src="${servicio.img}" class="card-img-top imgServicios" alt="${servicio.nombre}">
        <div class="card-body cuerpoCard m-0">
            <h3 class="card-title tituloservicio">${servicio.nombre}</h3>
            <p class="card-text precioservicio">Precio: $${servicio.precio} </p>
            <div class ="contenedorBotonCarrito">
                <button class="btn btnAgregarCarrito" id="agregarCarrito${servicio.id}">AGREGAR AL CARRITO</button>
            </div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div);

    const botonAgregarCarrito = document.getElementById(`agregarCarrito${servicio.id}`); 
    botonAgregarCarrito.addEventListener("click", ()=> {
        agregarAlCarrito(servicio.id, carritoCompras);
    })
})




// setear un elemento (guardarlo)

const agregarLocal = (clave, valor)=> {
    localStorage.setItem (clave,JSON.stringify(valor));
}

// traer un elemento








































