let nombreSueñoA = "Amor"
let precioSueñoA = "1000"
let stockSueñoA = 5

let nombreSueñoB = "Dinero"
let precioSueñoB = "500"
let stockSueñoB = 5

let nombreSueñoC = "Naturaleza"
let precioSueñoC = "400"
let stockSueñoC = 5

let nombreSueñoD = "Deseos"
let precioSueñoD = "1500"
let stockSueñoD = 5

let nombreSueñoE = "ESpiritualidad"
let precioSueñoE = "1500"
let stockSueñoE = 5

let nombreSueñoF = "Pesadillas"
let precioSueñoF = "2000"
let stockSueñoF = 5

let precioTotal = 0



alert("Bienvenidos al creador de Sueños")


let opcion = prompt ("¿Queres soñar? \n - Si\n - No"); 

while (opcion != "No"){

  let opcion = prompt ("¿Con que queres soñar? \n - Amor - valor = 1000 $\n - Dinero - valor = 500 $\n - Naturaleza - valor = 400 $\n - Deseos - valor = 1500 $\n - Espiritualdiad - valor = 1500 $\n - Pesadillas - valor = 2000 $\n - ESC"); 


  if(opcion.toUpperCase() == "AMOR") {
    let cantidadProductoAmor = prompt ("Ingrese la cantidad de sueños sobre " + nombreSueñoA + " que quiere tener:")
    if(cantidadProductoAmor <= stockSueñoA)
    {precioTotal = cantidadProductoAmor * precioSueñoA}
  else{
    alert("Solo hay " + stockSueñoA + " sueños") 
   } 
}


else if(opcion.toUpperCase() == "DINERO") {
  let cantidadProductoDinero = prompt ("Ingrese la cantidad de sueños sobre " + nombreSueñoB + " que quiere tener:")
  if(cantidadProductoDinero <= stockSueñoB)
  {precioTotal = cantidadProductoDinero * precioSueñoB
  }
else{
  alert("Solo hay " + stockSueñoB + " sueños")
 } 
}


else if(opcion.toUpperCase() == "NATURALEZA") {
    let cantidadProductoNaturaleza = prompt ("Ingrese la cantidad de sueños sobre " + nombreSueñoC + " que quiere tener:")
    if(cantidadProductoNaturaleza <= stockSueñoC)
    {precioTotal = cantidadProductoNaturaleza * precioSueñoC
    }
  else{
    alert("Solo hay " + stockSueñoC + "sueños")
   } 
  }


else if(opcion.toUpperCase() == "DESEOS") {
  let cantidadProductoDeseos = prompt ("Ingrese la cantidad de sueños sobre " + nombreSueñoD + " que quiere tener:")
  if(cantidadProductoDeseos <= stockSueñoD)
  {precioTotal = cantidadProductoDeseos * precioSueñoD
  }
 else {
  alert("Solo hay " + stockSueñoD + "sueños")
 } 
}


else if(opcion.toUpperCase() == "ESPIRITUALIDAD") {
    let cantidadProductoEspiritualidad = prompt ("Ingrese la cantidad de sueños sobre " + nombreSueñoE + " que quiere tener:")
    if(cantidadProductoEspiritualidad <= stockSueñoE)
    {precioTotal = cantidadProductoEspiritualidad * precioSueñoE
    }
  else{
    alert("Solo hay " + stockSueñoE + "sueños")
   } 
  }
 

  else if(opcion.toUpperCase() == "pESADILLAS") {
    let cantidadProductoPesadillas = prompt ("Ingrese la cantidad de sueños sobre " + nombreSueñoF + " que quiere tener:")
    if(cantidadProductoPesadillas <= stockSueñoF)
    {precioTotal = cantidadProductoPesadillas * precioSueñoF
    }
   else {
    alert("Solo hay " + stockSueñoD + "sueños")
   } 
  }



  if (precioTotal != 0){
    alert("El precio total de sus sueños es de " + precioTotal + " $")
   }  
   alert("Gracias por visitarnos")
  
   var color = "" 
   while (color != "ESC"){ 
        color = prompt("Escriba ESC para salir","") 
   }



  breack
   
  };

 function despedida (){
  alert("Gracias por visitarnos")
 }

 despedida()
