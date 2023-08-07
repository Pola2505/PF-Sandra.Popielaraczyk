let productos = [
    { 
        id: "ebook-1",
        titulo: "Ebook 1",
        imagen: "./img/template-ebook.png",
        precio: 2000,
        
    },
    {
        id: "ebook-2",
        titulo: "Ebook 2",
        imagen: "./img/template-ebook.png",
        precio: 2000,
        
    },
    {
        id: "ebook-3",
        titulo: "Ebook 3",
        imagen: "./img/template-ebook.png",
        precio: 3000,
        
    },
    {
        id: "ebook-4",
        titulo: "Ebook 4",
        imagen: "./img/template-ebook.png",
        precio: 2000,
        
    },
    {
        id: "ebook-5",
        titulo: "Ebook 5",
        imagen: "./img/template-ebook.png",
        precio: 2000,
        
    },
    {
        id: "ebook-6",
        titulo: "Ebook 6",
        imagen: "./img/template-ebook.png",
        precio: 3000,
        
    },
    {
        id: "dieta-primavera",
        titulo: "Dieta Primavera",
        imagen: "./img/template-ebook.png",
        precio: 2500,
        
    },
    {
        id: "dieta-invierno",
        titulo: "Dieta Invierno",
        imagen: "./img/template-ebook.png",
        precio: 3000,
        
    },
    {
        id: "dieta-verano",
        titulo: "Dieta Verano",
        imagen: "./img/template-ebook.png",
        precio: 2500,
        
    },
    {
        id: "dieta-veggie",
        titulo: "Dieta Veggie",
        imagen: "./img/template-ebook.png",
        precio: 2500,
        
    },
    {
        id: "dieta-vegana",
        titulo: "Dieta Vegana",
        imagen: "./img/template-ebook.png",
        precio: 3000,
        
    },
    {
        id: "dieta-otono",
        titulo: "Dieta Otono",
        imagen: "./img/template-ebook.png",
        precio: 2500,
        
    },

]

/********************************************************************************************************************************/

// Buscamos los elementos del HTML y los asignamos a las variables para poder a utilizarlos

const contenedorProductos = document.querySelector("#contenedor-productos");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numero = document.querySelector('#numero');

/********************************************************************************************************************************/

// Si hacemos click al boton de agregar lo agrega al carrito
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

/********************************************************************************************************************************/

//  El numero de los items en el carrito cambia dependiendo de cuantos productos fueron cargados contando la cantidad de cada uno de los productos desde 0

function updateNumber() {
    let newNumber = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = newNumber;
}


/********************************************************************************************************************************/

// Creamos los productos para la venta y mandamos al HTML con CSS aplicado con la posibilidad de agregar al carriton de compras

function cargarProductos() {

    productos.forEach(producto => {

        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
    `;
        contenedorProductos.append(div);
        
    })

    actualizarBotonesAgregar();
    
}
if(contenedorProductos)cargarProductos();

/********************************************************************************************************************************/


let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    updateNumber();
} else {
    productosEnCarrito = [];
}

/********************************************************************************************************************************/

// funcion de agregar los productos al carrito de compras, hace el update de la cantidad, mandar a local storage con toda la info

function agregarAlCarrito(e) {

    Toastify({
        text: "Se agrego un producto",
        duration: 4000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true,
        offset: {
            x: 30, 
            y: 40 
          }, 
        style: {
          background: "linear-gradient(to right, rgb(183, 196, 207), rgb(150, 126, 118)",
        },
        onClick: function(){} 
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    updateNumber();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}





