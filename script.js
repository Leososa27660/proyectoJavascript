// Modificar Nodos

let prologo = document.getElementById("prologo")
prologo.innerHTML = "<h2>¿Qué es el creador de sueños?</h2><p >El creador de sueños es un sistema que te va a permitir soñar lo que vos elijas, al tomar antes de dormir una de nuestras pastillas, todo lo que imaginaste se hace realidad.</p><p>Tenemos un banco de más de 20.000 sueños. divididos en seis categorías: Amor, Dinero, Deseos, Naturaleza, Espiritualidad y Pesadillas. Hay uno para vos.</p> <p>Los sueños son una parte de nuestra vida psíquica que ha despertado curiosidad desde tiempos inmemoriales. Fueron objeto de estudio de magos y augures en la antigüedad. Hoy, luego del descubrimiento de nuestro equipo cientifico a traves de una pastilla podremos elegir como, con quien y donde queres soñar, ¿qué esperás para hacerlo?. </p>"

// Query Selector

const btnSwitch = document.querySelector('#switch');
btnSwitch.addEventListener('click', () => {
	document.body.classList.toggle('dark');
	btnSwitch.classList.toggle('active');
});

// Uso Fetch localmente en formato Json

const lista = document.querySelector('#listado')
fetch('/data.json')
	.then((res) => res.json())
	.then((data) => {
		data.forEach((producto) => {
			const li = document.createElement('li')
			li.innerHTML = `
<h2>${producto.nombre}</h2>
<p>${producto.text}</p>
<p>Encontralo en sueños de: ${producto.data}</p>
<hr/>
`
			lista.append(li)
		})
	})


// Uso un contador de visitantes de la pagina con una api

const countEl = document.getElementById('count');
updateVisitCount();
function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/florin-popcom/codepen/?amount=1')
		.then(res => res.json())
		.then(res => {
			countEl.innerHTML = res.value;
		})
}

// Variables
const baseDeSueños = [{
		id: 1,
		nombre: 'Amor',
		precio: 1000,
		stock: 99999,
		imagen: 'img/amor.png'
	}, {
		id: 2,
		nombre: 'Dinero',
		precio: 1500,
		stock: 99999,
		imagen: 'img/dinero.jpg'
	}, {
		id: 3,
		nombre: 'Naturaleza',
		precio: 500,
		stock: 99999,
		imagen: 'img/naturaleza.jpg'
	}, {
		id: 4,
		nombre: 'Deseos',
		precio: 1800,
		stock: 99999,
		imagen: 'img/deseos.jpg'
	}, {
		id: 5,
		nombre: 'Espiritualidad',
		precio: 800,
		stock: 99999,
		imagen: 'img/espiritual.jpg'
	}, {
		id: 6,
		nombre: 'Pesadillas',
		precio: 3000,
		stock: 99999,
		imagen: 'img/pesadilla.jpg'
	}

];

let carrito = [];
const divisa = '$';
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonComprar = document.querySelector('#boton-comprar');

// Funciones- método forEach

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
		miListaBoton.classList.add('btn', 'btn-dark');
		miListaBoton.textContent = 'soñar';
		miListaBoton.setAttribute('marcador', info.id);
		miListaBoton.addEventListener('click', agregarProductoAlCarrito);
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


 // Evento para añadir un sueño al carrito de compras - Toastify / método push
 
function agregarProductoAlCarrito(evento) {
	carrito.push(evento.target.getAttribute('marcador'))
		
// Actualizar carrito-usamos toastify 
	
  renderizarCarrito();
	Toastify({
		text: "Se agrego al carrito correctamente",
		className: "info",
		style: {
			background: "linear-gradient(300deg, #acacac 0, #636279 50%, #15224a 100%)",
		}
	}).showToast();
}
//Método filter - método forEach
function renderizarCarrito() {
	DOMcarrito.textContent = '';
	const carritoSinDuplicados = [...new Set(carrito)];

	carritoSinDuplicados.forEach((item) => {
		const miItem = baseDeSueños.filter((itemBaseSueños) => {
			return itemBaseSueños.id === parseInt(item);
		});

// Cuenta el número de veces que se repite el producto / Operador ternario / método reduce
		const numeroUnidadesItem = carrito.reduce((total, itemId) => {
			return itemId === item ? total += 1 : total;

			// if(id === itemId)
			// {total += 1}
			// else {
			//     return total
			// }

		}, 0);
		const miLista = document.createElement('li');
		miLista.classList.add('list-group-item', 'text-right', 'mx-2');
		miLista.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;

		const miBoton = document.createElement('button');
		miBoton.classList.add('btn', 'btn-dark', 'mx-5');
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
// Promesa- then - uso Sweet alert2 

function borrarItemCarrito(evento) {

	renderizarCarrito();
	Swal.fire({
		html: `<h3>Estás seguro que queres borrar este sueño</h3> <p>"Este proceso no se puede revertir"</p>`,

		imageUrl: 'img/sleeping-panda-2748380.png',
		showCancelButton: true,
		cancelButtonText: 'Cancelar',
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, borrarlo!'
  //método filter
	}).then((result) => {
		if (result.isConfirmed) {
			const id = evento.target.dataset.item;
			carrito = carrito.filter((carritoId) => {
				return carritoId !== id;
			})

			renderizarCarrito()
			Swal.fire(
				'Borrado!',
				'Se borro satisfactoriamente.',
				'success'
			)

		} else if (result.isDeneid) {
			Swal.fire('')
		}
	})
}

///Calculo el precio total- método filter - método reduce

function calcularTotal() {
	return carrito.reduce((total, item) => {
		const miItem = baseDeSueños.filter((itemBaseSueños) => {
			return itemBaseSueños.id === parseInt(item);
		});
		// suma total
		return total + miItem[0].precio;
	}, 0).toFixed(2);
}

//Simulo una compra - uso sweet alert que lleva una api

function comprarCarrito() {
	carrito = [];
	renderizarCarrito();
	Swal.fire({
		title: 'Envia tu usuario o alias para confirmar la compra',
		input: 'text',
		inputAttributes: {
			autocapitalize: 'off'
		},
		showCancelButton: true,
		confirmButtonText: 'Confirmar',
		cancelButtonText: 'Cancelar',
		showLoaderOnConfirm: true,
		preConfirm: (login) => {
			return fetch(`//api.github.com/users/${login}`)
				.then(response => {
					if (!response.ok) {
						throw new Error(response.statusText)
					}
					return response.json()
				})
				.catch(error => {
					Swal.showValidationMessage(
						`Datos incorrectos: ${error}`
					)
				})
		},
		allowOutsideClick: () => !Swal.isLoading()
	}).then((result) => {
		if (result.isConfirmed) {
			Swal.fire({
				title: `${result.value.login}' a confirmado la compra`,
				imageUrl: result.value.avatar_url
			})
		}
	})
}


// Eventos al hacer click
DOMbotonComprar.addEventListener('click', comprarCarrito);
renderizarProductos();
renderizarCarrito();

// Json muestra la lista de sueños en consola con Stringify y Parse

const enJson = JSON.stringify(baseDeSueños);
console.log(enJson);

const sueños = JSON.parse(enJson);
console.log(baseDeSueños);

/* Local storage - toastify*/

function guardarDatos() {
	localStorage.nombre = document.getElementById("nombre").value;
	localStorage.password = document.getElementById("alias").value;
	Toastify({
		text: "Se guardo tu nombre y tu alias",
		className: "info",
		style: {
			background: "linear-gradient(300deg, #acacac 0, #636279 50%, #15224a 100%)",
		}
	}).showToast();
}

//*operador ternanio/*

function recuperarDatos() {
	if ((localStorage.nombre != undefined) && (localStorage.password != undefined)) {
		document.getElementById("datos").innerHTML = "Nombre: " + localStorage.nombre + " Alias: " + localStorage.password;
	} else {
		document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu alias";
	}
}