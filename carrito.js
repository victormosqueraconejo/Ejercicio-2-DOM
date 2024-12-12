const productos = [
    { id: 1, nombre: "Producto 1", descripcion: "Descripción del Producto 1", precio: 19.99 },
    { id: 2, nombre: "Producto 2", descripcion: "Descripción del Producto 2", precio: 29.99 },
    { id: 3, nombre: "Producto 3", descripcion: "Descripción del Producto 3", precio: 39.99 },
    { id: 4, nombre: "Producto 4", descripcion: "Descripción del Producto 4", precio: 39.99 },
    { id: 5, nombre: "Producto 5", descripcion: "Descripción del Producto 5", precio: 39.99 },
    { id: 6, nombre: "Producto 6", descripcion: "Descripción del Producto 6", precio: 39.99 },

];

let carrito = [];

function mostrarProductos() {
    const galeria = document.getElementById('galeria-productos');
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement('div');
        tarjetaProducto.className = 'tarjeta-producto';

        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        tarjetaProducto.appendChild(nombre);

        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;
        tarjetaProducto.appendChild(descripcion);

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio.toFixed(2)}`;
        tarjetaProducto.appendChild(precio);

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.addEventListener('click', function() {
            agregarAlCarrito(producto.id)
        })

        tarjetaProducto.appendChild(botonAgregar);

        galeria.appendChild(tarjetaProducto);
    });
}

function agregarAlCarrito(idProducto) {
    const producto = productos.find(p => p.id === idProducto);
    if (producto) {
        carrito.push(producto);
        actualizarCarrito();
    }
}

function actualizarCarrito() {
    const itemsCarrito = document.getElementById('items-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    itemsCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((item, indice) => {
        const li = document.createElement('li');
        
        const infoItem = document.createElement('span');
        infoItem.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        li.appendChild(infoItem);

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(indice);
        li.appendChild(botonEliminar);

        itemsCarrito.appendChild(li);
        total += item.precio;
    });

    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

function eliminarDelCarrito(indice) {
    carrito.splice(indice, 1);
    actualizarCarrito();
}

function limpiarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Funcionalidad del modal
const modal = document.getElementById('modal-carrito');
const botonAbrirCarrito = document.getElementById('abrir-carrito');
const botonCerrar = document.getElementsByClassName('cerrar')[0];
const botonLimpiarCarrito = document.getElementById('limpiar-carrito');
const botonSeguirComprando = document.getElementById('seguir-comprando');


botonAbrirCarrito.addEventListener('click', function() {
    modal.style.display = 'block';
})

botonLimpiarCarrito.addEventListener('click', limpiarCarrito)

botonSeguirComprando.addEventListener('click', function() {
    modal.style.display = 'none';
})



// Inicializar
mostrarProductos();