// ejercicios.js

// 1.
function ejercicio1() {
  let numero = 10;
  numero += 5;
  alert("Resultado: " + numero);
}

// 2. concat 
function ejercicio2() {
  let cad1 = "Hola";
  let cad2 = "Mundo";
  alert(cad1 + " " + cad2);
}

// 3. Comparación entre dos valores por parámetro

function ejercicio3() {
  let a = parseFloat(prompt("Ingrese el primer número"));
  let b = parseFloat(prompt("Ingrese el segundo número"));

  if (a === b) alert("Son iguales");
  else if (a > b) alert("El primero es mayor");
  else alert("El segundo es mayor");
}



// 4. Switch con numero ingresado
function ejercicio4() {
  let num = parseInt(prompt("Ingrese un número del 1 al 10"));
  switch (true) {
    case (num >= 1 && num <= 3): alert("Grupo 1"); break;
    case (num >= 4 && num <= 6): alert("Grupo 2"); break;
    case (num >= 7 && num <= 10): alert("Grupo 3"); break;
    default: alert("Número fuera de rango");
  }
}

// 5. Sumatoria 
function ejercicio5() {
  let suma = 0;
  for (let i = 0; i <= 10; i++) suma += i;
  alert("Sumatoria: " + suma);
}

// 6. Array de 10 números, con el producto de todos los elementos del array 
function ejercicio6() {
  let arr = [1,2,3,4,5,6,7,8,9,10];
  let prod = 1;
  for (let n of arr) prod *= n;
  alert("Producto total: " + prod);
}

// 7. prod de dos valores 
function ejercicio7() {
  let a = parseFloat(prompt("Ingrese el primer valor"));
  let b = parseFloat(prompt("Ingrese el segundo valor"));
  let resultado = a * b;
  alert("Producto: " + resultado);
}


// 8. Función que concatena dos CADENAS (me habia confundido y cuando lo volvi a leer me di cuenta que eran cadenas y no arrays)
function ejercicio8() {
  let cad1 = prompt("Ingrese la primera cadena:");
  let cad2 = prompt("Ingrese la segunda cadena:");
  let resultado = cad1 + cad2;
  alert("Resultado de la concatenación: " + resultado);
}

// 9. comparacion de dos valores 
function ejercicio9() {
  let a = parseFloat(prompt("Ingrese el primer valor"));
  let b = parseFloat(prompt("Ingrese el segundo valor"));

  if (a === b) return "Son iguales";
  return a > b ? a + " es mayor" : b + " es mayor";
}


function ejercicio10() {
  let n = parseInt(prompt("Ingrese un número"));
  let salida = "";
  for (let i = 0; i < n; i++) {
    salida += "*";
  }
  alert(salida);
}


// 11. Función con descuentos según medio de pago
function ejercicio11() {
  let monto = parseFloat(prompt("Ingrese el monto del producto:"));
  let medio = prompt("Ingrese el medio de pago (C=Crédito, D=Débito, E=Efectivo):").toUpperCase();
  let descuento = 0;
  if (monto < 200) descuento = 0;
  else if (monto <= 400) {
    if (medio === "E") descuento = 0.3;
    else if (medio === "D") descuento = 0.2;
    else if (medio === "C") descuento = 0.1;
  } else descuento = 0.4;

  let total = monto - (monto * descuento);
  alert("Total a pagar: " + total)
  alert("Descuento aplicado: " + (descuento * 100) + "%");
}

// 12. Medio árbol con asteriscos segun la altura ingresada 
function ejercicio12() {
  let altura = parseInt(prompt("Ingrese la altura del árbol:"));
  let arbol = "";
  for (let i = 1; i <= altura; i++) {
    arbol += "*".repeat(i) + "\n";
  }
  alert(arbol);
}
