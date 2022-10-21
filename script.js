// Modificar Nodos

let prologo = document.getElementById("prologo")
prologo.innerHTML = "<h2>¿Qué es el creador de sueños?</h2><p >El creador de sueños es un sistema que te va a permitir soñar lo que vos elijas, al tomar antes de dormir una de nuestras pastillas, todo lo que imaginaste se hace realidad.</p><p>Tenemos un banco de más de 20.000 sueños. Hay uno para vos</p>"

// Query Selector
const btnSwitch = document.querySelector('#switch');
	

btnSwitch.addEventListener('click',() => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});

// Variables
const baseDeSueños = [
    {
        id: 1,
        nombre: 'Amor',
        precio: 1000,
        stock: 100,
        imagen: 'img/amor.png'
    },
    {
        id: 2,
        nombre: 'Dinero',
        precio: 1500,
        stock: 100,
        imagen: 'img/dinero.jpg'
    },
    {
        id: 3,
        nombre: 'Naturaleza',
        precio: 500,
        stock: 100,
        imagen: 'img/naturaleza.jpg'
    },
    {
        id: 4,
        nombre: 'Deseos',
        precio: 1800,
        stock: 100,
        imagen: 'img/deseos.jpg'
    },
    {
        id: 5,
        nombre: 'Espiritualidad',
        precio: 800,
        stock: 100,
        imagen: 'img/espiritual.jpg'
    },
    {
        id: 6,
        nombre: 'Pesadillas',
        precio: 3000,
        stock: 100,
        imagen: 'img/pesadilla.jpg'
    }

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');

// Funciones


function renderizarProductos() {
    baseDeSueños.forEach((info) => {
        
        const miLista = document.createElement('div');
        miLista.classList.add('card', 'col-sm-4');
        
        const miListaCardBody = document.createElement('div');
        miListaCardBody.classList.add('card-body');
    
        const miListaTitle = document.createElement('h5');
        miListaTitle.classList.add('card-title');
        miListaTitle.textContent = info.nombre;
        
        const miListaImagen = document.createElement('img');
        miListaImagen.classList.add('img-fluid');
        miListaImagen.setAttribute('src', info.imagen);

        const miListaStock = document.createElement("p");
        miListaStock.classList.add('card-text');
        miListaStock.innerText = `Stock: ${info.stock}`;
        
        const miListaPrecio = document.createElement('p');
        miListaPrecio.classList.add('card-text');
        miListaPrecio.textContent = `${info.precio}${divisa}`;
       
        const miListaBoton = document.createElement('button');
        miListaBoton.classList.add('btn', 'btn-primary');
        miListaBoton.textContent = '+';
        miListaBoton.setAttribute('marcador', info.id);
        miListaBoton.addEventListener('click', anyadirProductoAlCarrito);
        // Insertamos
        miListaCardBody.appendChild(miListaImagen);
        miListaCardBody.appendChild(miListaTitle);
        miListaCardBody.appendChild(miListaPrecio);
        miListaCardBody.appendChild(miListaBoton);
        miListaCardBody.appendChild(miListaStock);
        miLista.appendChild(miListaCardBody);
        DOMitems.appendChild(miLista);
    });
}

/**
 * Evento para añadir un sueño al carrito de compras
 */
function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    renderizarCarrito();

}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    const carritoSinDuplicados = [...new Set(carrito)];
    
    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeSueños.filter((itemBaseSueños) => {
            return itemBaseSueños.id === parseInt(item);
        });

        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);
        const miLista = document.createElement('li');
        miLista.classList.add('list-group-item', 'text-right', 'mx-2');
        miLista.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'Borrar sueño';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        miLista.appendChild(miBoton);
        DOMcarrito.appendChild(miLista);
    });
    DOMtotal.textContent = calcularTotal();
}

/**
 * Evento para borrar los sueños
 */
function borrarItemCarrito(evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    
    renderizarCarrito();
}

/**
 * Calcular el precio total 
 */
function calcularTotal() {
    return carrito.reduce((total, item) => {
        const miItem = baseDeSueños.filter((itemBaseSueños) => {
            return itemBaseSueños.id === parseInt(item);
        });
        // suma total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {
    carrito = [];
    renderizarCarrito();
}

// Eventos al hacer click
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();
renderizarCarrito();

// Json muestra la lista de sueños en consola con Stringify y Parse


const enJson = JSON.stringify(baseDeSueños); 
console.log(enJson);

const sueños = JSON.parse(enJson);
console.log(baseDeSueños);





// function saveCartToStorage(){
//     localStorage.setItem('cart', JSON.stringify(cart))
// }

// function loadCartFromStorage(){
//     if(localStorage.getItem('cart') !== null){
//         cart = JSON.parse(localStorage.getItem('cart'))
//     }
// }



/* Local storage */

function guardarDatos() {
    localStorage.nombre = document.getElementById("nombre").value;
    localStorage.password = document.getElementById("password").value;
}

function recuperarDatos() {
    if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
        document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Password: " + localStorage.password;
    } else {
        document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    }
}

       
//    let miFormulario = document.getElementById("formulario");
//     miFormulario.addEventListener("submit", validarFormulario);
    
//     function validarFormulario(e) {
//              e.preventDefault();
//         console.log("Formulario Enviado")
//         alert("Mensaje enviado")
  

//      } 