/*


// Ejercicio 1, crear variable nombre y edad e imprimir en consola.
let nombre = 'Emilio';
let edad = 35;
console.log(nombre, edad);

// Ejercicio 2, imprimi en consola "Hola mi nombre es (nombre) y tengo (edad) años".
console.log('Hola! Mi nombre es ' + nombre + ' y tengo ' + edad + ' años.');
console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años.`);

 // Ejercicio 3, reasigna los valores de las variables e imprime en consola.
 nombre = 'Andres';
 edad = 29;
 console.log(`Hola! Mi nombre es ${nombre} y tengo ${edad} años.`);

 // Ejercicio 4, crea dos variables con valores de tipo numero e imprimi la suma de ambos por consola.
 let num1 = 8;
 let num2 = 10;
 console.log(num1 + num2);
*/


 /* Ejercicio 5, el siguiente codigo nos esta dando un error en consola. Corregir para que de 25 
 const numero = 15;
 numero = 25;
 console.log(numero);
 
let numero = 15;
numero = 25;
console.log(numero);

// Ejercicio 6, escribi un codigo que pase el valor de una variable como una alerta en el navegador.
let alerta = 'Esto es una alerta';
alert(alerta);

// Ejercicio 7, escribi un codigo que pida un valor, lo almacene en una variable y lo muestre por consola.
let valorIngresado = prompt('Ingresa tu nombre');
console.log(valorIngresado);

// Ejercicio 8, igual que el ejercicio anterior pero mostrar una alerta diciendo: "El valor ingresado es (el valor)".
let valor = prompt('Ingresa un numero del 1 al 10');
alert(`El valor ingresado es ${valor}`);

*/
/*
// Ejercicio 9, escribir un codigo que pida dos nombres, almacenar en variables y mostrar alerta que diga: "El primer valor ingresado es (valor1) y el segundo es (valor2)".
 let nom1 = prompt('valor 1');
 let nom2 = prompt('Valor 2');
 alert(`El primer valor ingresado es ${nom1} y el segundo es ${nom2}`);
 */

// Ejercicio 10, El siguiente codigo nos devuelve "undefined" por consola. Modificalo de manera que nos devuelva el valor de la variable nombre.
 // console.log(nombre);
 // var nombre = "Carlos";
 //var nombre = "Carlos";
 //console.log(nombre);
 
// Ejercicio 11, teniendo en cuenta lo visto en clase scopes, que es lo que nos va a imprimir la consola en el siguiente ejercicio?
/* let valor = 'Hola';
    function mostrarVariable(){
        let valor = 'chau';
    }
    console.log(valor);
    Va a imprimir Hola.
*/ 
// Ejercicio 12, Que va a imprimir la consola en el siguiente ejemplo.
// let a = false, let b = true, let c = true
// console.log(!a && b && c);
// La consola va a imprimir TRUE;

// Ejercicio 13, que se va a imprimir en el sig ejercicio
// let a = 18, let b = 20
// console.log( a < b || a === b || a >= b);
// La consola va a imprimir True;

// Ejercicio 14, escribi un codigo que tome una variable edad como un valor numerico e imprima por consola "soy mayor de edad" si el numero es mayor o igual a 18, y "soy menor de edad" en caso contrario.
/*
let edad = 25;
if (edad >= 18){
    console.log('Soy mayor de edad');
} else {
    console.log('Soy menor de edad')
};
*/

// Ejercicio 15, escribi un codigo que tome dos valores numericos e imprima por consola la opcion que corresponda
// - valor1 es mayor a el valor2, - valor2 es mayor a valor1, - valor1 y valor2 son iguales.
/*
let valor1 = 66;
let valor2 = 25;

if(valor1 < valor2){
    console.log(`${valor2} es mayor a ${valor1}`)
} else if (valor1 > valor2){
    console.log(`${valor1} es mayor a ${valor2}`)
} else {
    console.log(`${valor1} y ${valor2} son iguales`)
};
*/

// Ejercicio 16, escribi un codigo que pida un string mediante un prompt, lo almacene en una variable y cumpla con las siguientes condiciones
/* - Si el string es "alerta", q imprima una alerta en pantalla que diga "Soy una alerta"
- Si el string es "consola", q imprima en consola "Soy un msj en consola"
- En caso de que no sea ninguno de los casos anteriores, q se imprima una alerta y tambien en consola "Me muestro en ambos lados" */
/*
let valor = prompt('Escribir alerta o consola');

if (valor === 'alerta'){
    alert('Soy una alerta')
} else if (valor === 'consola'){
    console.log('Soy un msj en consola')
} else {
    alert('Me muestro en ambos lados')
    console.log('Me muestro en ambos lados')
}
*/

// Ejercicio 17, escribi un codigo mediante el uso de condicionales que defina una variable "edad" y que cumpla las siguientes condiciones
/*
let edad = prompt('Ingresa tu edad');

if (edad < 13){
    console.log('Soy un niño');
} else if(edad >= 13 && edad < 20){
    console.log('Soy un adolescente');
} else if(edad >= 20 && edad < 50){
    console.log('Soy un adulto');
} else{
    console.log('Soy un adulto mayor');
};
*/

// Ejercicio 18, escribi una sentencia switch que cumplas los sig requisitos
/*
let fruta = prompt('Ingresa una fruta');

switch (fruta){
    case 'manzana':
        console.log(`Soy una ${fruta}`);
        break;
    case 'banana':
        console.log(`Soy una ${fruta}`);
        break;
    case 'melon':
        console.log(`Soy un ${fruta}`);
        break;
    case 'sandia':
        console.log(`Soy una ${fruta}`);
        break;
    default:
        console.log(`No soy una fruta`);
        break;
}
*/

/* Ejercicio 19, crear un array del 1 al 10
- crear un bucle for que imprima en consola todos los numeros del array.
- crear un bucle que imprima solo los 5 primeros numeros.
- crear un bucle que impria los 5 ultimos numeros.
- crear un bucle que imprima todos los numeros, excepto el que este en la 4ta posicion.

let miArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; miArr.length >= i; i++){
    console.log(miArr[i]);
};

for (let i = 1; miArr.length >= i; i++){
    if(i >= 6){
        break;
    }
    console.log(i);
};

for (let i = 0; miArr.length >= i; i++){
    if(i >= 6){
        console.log(i)
    }
};

for(let i = 0; miArr.length - 1 >= i; i++){
    if(i === 3){
        continue;
    }
    console.log(i);
};
*/

// Ejercicio 20, escribi una funcion que reciba como parametro un nombre y q imprima en la consola "Hola soy {nombre}".
/*
function nombre(nombre){
    console.log(`Mi nombre es ${nombre}`);
};
nombre('Emilio');
*/

// Ejercicio 21, escribi una funcion que imprima en consola la suma de dos numeros pasados por parametros.
/*
function suma(a, b){
    console.log(a + b);
}
suma(5, 8);
*/

// Ejercicio 22, escribi una funcion que reciba dos numeros por parametro, multiplique a cada uno por dos y luego imprima por consola la suma de ambos.
/*
function suma(a, b){
    console.log(a * 2 + b * 2);
};
suma(2,3);
*/

// Ejercicio 23, escribi una funcion que pueda recibir un numero como parametro y q imprima por consola la tabla de multiplic del 1 al 10 de ese numero.
/*
function tabla(numero){
    for( let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`El ${numero} multiplicado por ${i} es igual a ${resultado}`)
    }
}
tabla(2);
*/

/* Ejercicio 24, escriba una funcion que reciba 2 numeros como parametro y q imprima por consola todo el intervalo entre ambos numeros, incluyendolos.
*/
/*
const miFuncion = (a, b) =>{
    if (a > b){
        console.log(a);
        while (a > b){
            a--;
            console.log(a);
        }
    } else if(a < b){
        console.log(a);
        while(a < b){
            a++;
            console.log(a);
        }
    } else {
        console.log('Ambos numeros son iguales');
    }
}
miFuncion(5, 9);
*/

// Ejercicio 25
/*
const sumar = (a, b) => {
    console.log(a + b);
};
const restar = (a, b) => {
    console.log(a - b);
};
const multiplicar = (a, b) => {
    console.log(a * b);
};
const dividir = (a, b) => {
    console.log(a / b);
};
const resultado = (a, b, callback) => {
    callback(a, b);
}

resultado(4, 6, multiplicar);
*/

// Ejercicio 26, crear un objeto literal "zapatilla" que tenga las propiedades talle, color y marca.
/*
let zapatilla = {
    talle: 43,
    color: 'Rojo',
    marca: 'Adidas'
};
console.log(`Soy una zapatilla ${zapatilla.marca} de talle ${zapatilla.talle} y color ${zapatilla.color}.`);
*/

// Ejercicio 27
/*
let zapatilla = {
    talle: 43,
    color: 'Rojo',
    marca: 'Adidas'
};
let zapatilla2 = {
    talle: 45,
    color: 'Rojo',
    marca: 'Converse'
};
if(zapatilla.talle > zapatilla2.talle){
    console.log(`El talle de la zapatilla ${zapatilla.marca} es mayor que el de la zapatilla ${zapatilla2.marca}`);
} else if(zapatilla.talle < zapatilla2.talle){
    console.log(`El talle de la zapatilla ${zapatilla.marca} es menor que el de la zapatilla ${zapatilla2.marca}`);
} else {
    console.log(`Los talles de ambas zapatillas son iguales`);
};
*/

// Ejercicio 28
/*
class zapatilla {
    constructor(marca, talle, color){
        this.marca = marca;
        this.talle = talle;
        this.color = color;
    }
};
let zapatilla1 = new zapatilla('Adidas', 45, 'Roja');
console.log(zapatilla1);
let zapatilla2 = new zapatilla('Nike', 40, 'Negra');
console.log(zapatilla2);
*/

// Ejercicio 29
/*
class zapatilla {
    constructor(marca, talle, color){
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.getInfo = () => {
            return `Soy una zapatilla ${this.marca} de color ${this.color} y talle numero ${this.talle}`;
        }
    }
};
let zapatilla1 = new zapatilla('Adidas', 45, 'Roja');
console.log(zapatilla1.getInfo());
let zapatilla2 = new zapatilla('Nike', 40, 'Negra');
console.log(zapatilla2.getInfo());
*/

// Ejercicio 30
/*
class zapatilla {
    constructor(marca, talle, color, precio){
        this.marca = marca;
        this.talle = talle;
        this.color = color;
        this.precio = precio;
    }
};
let zapatilla1 = new zapatilla('Adidas', 45, 'Roja', 25000);
let zapatilla2 = new zapatilla('Nike', 40, 'Negra', 30000);

const zapatillaMasCara = (a,b) => {
    if(a.precio > b.precio){
        console.log(`La zapatilla ${a.marca} es la mas cara del mercado, con un valor de $ ${a.precio}`);
    } else if(a.precio < b.precio){
        console.log(`La zapatilla ${b.marca} es la mas cara del mercado, con un valor de $ ${b.precio}`);
    } else {
        console.log('Ambas son las mas caras del mercado');
    }
};
zapatillaMasCara(zapatilla1, zapatilla2);
*/
// Ejercicio 31

