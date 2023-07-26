let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

/********************************************************************************************************************************/

// Llamamos a los elementos de HTML

const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
const contenedorTotal = document.querySelectorAll("#total");


/********************************************************************************************************************************/

// Cargar los productos, si el carrito tiene algo adentro muestra los productos, total posibilidad de borrarlos, pero sino sale carrito vacio 

function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("inactive");
        contenedorCarritoProductos.classList.remove("inactive");
        contenedorCarritoAcciones.classList.remove("inactive");
        contenedorCarritoComprado.classList.add("inactive");

        contenedorCarritoProductos.innerHTML = "";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
} else {
    contenedorCarritoVacio.classList.remove("inactive");
    contenedorCarritoProductos.classList.add("inactive");
    contenedorCarritoAcciones.classList.add("inactive");
    contenedorCarritoComprado.classList.add("inactive");
}

    actualizarBotonesEliminar();
    updateTotal();
}

/********************************************************************************************************************************/

// Eliminar productos y vaciar el carrito de compras

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito);
    });
}


cargarProductosCarrito()


function eliminarDelCarrito(e) {
    let idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

/********************************************************************************************************************************/

// El total para pagar 
function updateTotal() {
    total.innerText = productosEnCarrito.reduce((acumulador, producto) => acumulador + (producto.precio * producto.cantidad), 0);
}