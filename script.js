/* let nombreSueñoA = "Amor"
let precioSueñoA = "1000"
let stockSueñoA = 5 */

let SueñoA = {
 nombreSueñoA: "Amor",
 precioSueñoA: "1000",
 stockSueñoA: 5
}

/* let nombreSueñoB = "Dinero"
let precioSueñoB = "500"
let stockSueñoB = 5 */

let SueñoB = {
  nombreSueñoB: "Dinero",
  precioSueñoB: "500",
  stockSueñoB: 5
 }

function Sueños (nombre,precio,stock){
this.nombre = nombre;
this.precio = precio;
this.stock = stock;
this.restarStock = function(cantidad){
  this.stock -= cantidad
}
}

/* let SueñoA = new Sueños ("AMor", "1000", 5);
let SueñoB = new Sueños ("Dinero", "400", 5); */
let SueñoC = new Sueños ("Naturaleza", "400", 15);
let SueñoD = new Sueños ("Deseos", "1500", 5);
let SueñoE = new Sueños ("Espiritualidad", "1500", 0);
let SueñoF = new Sueños ("Pesadillas", "2000", 5);


let listaSueños = [SueñoA, SueñoB, SueñoC, SueñoD, SueñoE, SueñoF]
/* listaSueños.length */

let listaSueñosConStock = listaSueños.filter((sue) => sue.stock > 0)

let listaNombres = listaSueñosConStock.map((prod) => prod.nombre)

/* let listaNombres = [] */

/* for (const sue of listaSueños){
  listaNombres.push(sue.nombre)
} */


/* let nombreSueñoC = "Naturaleza"
let precioSueñoC = "400"
let stockSueñoC = 5 */
/* 
let nombreSueñoD = "Deseos"
let precioSueñoD = "1500"
let stockSueñoD = 5 */


/* class Sueños {
  constructor(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  restarStock(cantidad) {
    this.stock -= cantidad
  }
} */


// let nombreSueñoE = "ESpiritualidad"
// let precioSueñoE = "1500"
// let stockSueñoE = 5



// let nombreSueñoF = "Pesadillas"
// let precioSueñoF = "2000"
// let stockSueñoF = 5
 

let precioTotal = 0

function precio(cantidad, precio) {
  precioTotal += (cantidad * precio)
}


alert("Bienvenidos al creador de Sueños")


let opcion = prompt ("¿Queres soñar? \n - Si\n - No"); 



while (opcion != "No"){

  alert ("Nuestros Valores: \n - Amor = 1000 $\n - Dinero = 500 $\n - Naturaleza = 400 $\n - Deseos = 1500 $\n - Espiritualdiad = 1500 $\n - Pesadillas = 2000 $");

  let opcion = prompt ("¿Con que queres soñar? \n " + listaNombres.join ("\n  ") + "\n  Amor \n  Dinero \n - ESC"); 


  if(opcion.toUpperCase() == "AMOR") {
    let cantidadProductoAmor = prompt ("Ingrese la cantidad de sueños sobre " + SueñoA.nombreSueñoA + " que quiere tener:")
    if(cantidadProductoAmor <= SueñoA.stockSueñoA)
    {precio(cantidadProductoAmor, SueñoA.precioSueñoA)}

  else{
    alert("Solo hay " + SueñoA.stockSueñoA + " sueños") 
   } 
}


else if(opcion.toUpperCase() == "DINERO") {
  let cantidadProductoDinero = prompt ("Ingrese la cantidad de sueños sobre " + SueñoB.nombreSueñoB + " que quiere tener:")
  if(cantidadProductoDinero <= SueñoB.stockSueñoB)
  {precio (cantidadProductoDinero, SueñoB.precioSueñoB)}
  
else{
  alert("Solo hay " + SueñoB.stockSueñoB + " sueños")
 } 
}



  else if(opcion.toUpperCase() == "NATURALEZA") {
    let cantidadProductoNaturaleza = prompt ("Ingrese la cantidad de sueños sobre " + SueñoC.nombre + " que quiere tener:")
    if(cantidadProductoNaturaleza <= SueñoC.stock)
    {precio(cantidadProductoNaturaleza, SueñoC.precio)
    }
   else {
    alert("Solo hay " + SueñoC.stock + " sueños")
    SueñoC.restarStock(cantidadProductoNaturaleza)
   } 
  }


else if(opcion.toUpperCase() == "DESEOS") {
  let cantidadProductoDeseos = prompt ("Ingrese la cantidad de sueños sobre " + SueñoD.nombre + " que quiere tener:")
  if(cantidadProductoDeseos <= SueñoD.stock)
  {precio(cantidadProductoDeseos, SueñoD.precio)
  }
 else {
  alert("Solo hay " + SueñoD.stock + " sueños")
  SueñoD.restarStock(cantidadProductoDeseos)
 } 
}


else if(opcion.toUpperCase() == "ESPIRITUALIDAD") {
    let cantidadProductoEspiritualidad = prompt ("Ingrese la cantidad de sueños sobre " + SueñoE.nombre + " que quiere tener:")
    if(cantidadProductoEspiritualidad <= SueñoE.stock)
    {precio(cantidadProductoEspiritualidad, SueñoE.precio)
    }
  else{
    alert("Solo hay " + SueñoE.stock + "sueños")
   } 
  }
 

  else if(opcion.toUpperCase() == "PESADILLAS") {
    let cantidadProductoPesadillas = prompt ("Ingrese la cantidad de sueños sobre " + SueñoF.nombre + " que quiere tener:")
    if(cantidadProductoPesadillas <= SueñoF.stock)
    {precio(cantidadProductoPesadillas, SueñoF.precio)
    }
   else {
    alert("Solo hay " + SueñoF.stock + "sueños")
   } 
  }



  if (precioTotal != 0){
    alert("El precio total de sus sueños es de " + precioTotal + " $")
   }  
   alert("Gracias por visitarnos")
  
   var color = "" 
   while (color != "DESPERTAR"){ 
        color = prompt("Escriba DESPERTAR para salir","") 
   }



  breack
   
};

 function despedida (){
  alert("Gracias por visitarnos")
 }

 despedida()
