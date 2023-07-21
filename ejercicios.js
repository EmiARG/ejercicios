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
/* Ejercicio 31, crea un array con al menos 5 gustos de helados y luego crea una funcion que:
 - Coloque el ultimo sabor de helado del array al principio del mismo.
 - Agregue un sabor (recibido como parametro) al final del array.
 - Imprima el array en consola.
 */
/*
 let gustosHelados = ['Frutilla', 'Americana', 'Chocolate', 'Anana', 'Limon'];

 let moverGusto = (nuevoGusto) => {
    let ultimoGusto = gustosHelados.pop();
    gustosHelados.unshift(ultimoGusto);
    gustosHelados.push(nuevoGusto);
    console.log(gustosHelados);
 };
 moverGusto('Dulce de leche');
 */

 // Ejercicio 32, crea una funcion que elimine el primer elemento del array y lo coloque al final. Imprimi el array en consola.
/*
 let gustosHelados = ['Frutilla', 'Americana', 'Chocolate', 'Anana', 'Limon'];

 let moverGustos = () => {
    gustosHelados.push(gustosHelados.shift());
    console.log(gustosHelados)
 };
 moverGustos();
 */

 // Ejercicio 33, crea una funcion que invierta el orden de los elementos del array e imprima en consola un "string" a partir de ese array invertido, separando las palabras con "-".
/*
let array = ['Juan', 'Pablo', 'Lorena', 'Javier'];

let funcion = () => {
    console.log(array.reverse().join('-'));
};
funcion();
*/

/* Ejercicio 34, crea otro array de gustos de helado con al menos 3 gustos de helado. Luego, crea una funcion que una ambos arrays y retorne un unico array que solo deje los dos ultimos elementos del primer array y los primeros del segundo. Imprimir el nuevo array.
*/
/*
let arr1 = ['Frutilla', 'Americana', 'Chocolate'];
let arr2 = ['Dulce de leche', 'Kinoto', 'Almendras'];

let funcion = () => {
    arr1.shift();
    arr2.pop();
    console.log(arr1.concat(arr2));
};
funcion();
*/
/*
let funcion = () => {
    let gustos =  arr1.slice(arr1.length - 2).concat(arr2.slice(0, 2));
    return gustos;
};
console.log(funcion());
*/

/* Ejercicio 35, Escribí un código en el cual crees un array con gustos de helados y una función que reciba un array de gustos de helados como parámetro que imprima en consola un array con los mismos gustos pero que solo estén las primeras 3 letras de cada gusto, pasadas todas a mayúscula.
*/
/*
let arr = ['Coco', 'Chocolate', 'Vainilla'];

let funcion = (gustos) => {
    let newArr = [];
    for ( i = 0; gustos.length > i; i++ ){
        newArr.push(gustos[i].slice(0, 3).toUpperCase());
    };
    console.log(newArr);
}
funcion(arr);
*/
/* Ejercicio 36, un integrante del equipo de Nucba es fanático de Cristiano Ronaldo y de escribir las palabras al revés. Como si esto fuera poco, suele poner muchos espacios al principio y al final de cada frase. El otro día escribió la frase que van a ver en este enunciado.
Para arreglar esto, les pedimos que escriban una función que:
- Elimine los espacios al principio y al final de la frase.
- invierta todas las palabras para que el texto pueda leerse correctamente.
- Reemplace la palabra “Ronaldo” por la palabra “Messi” y viceversa.
*/
/*
let frase = "      .levin us ed sojel yum atse isseM y odnum led rodaguj rojem le se odlanoR         ";
console.log(frase);
let funcion = (frase) => {
    let newFrase = frase.trim().split('').reverse('').join('').replace('Messi', 'Ronaldo').replace('Ronaldo', 'Messi');
    console.log(newFrase);
};
funcion(frase);
*/

// Ejercicio 37, Utilizando forEach, crea una función que reciba un array de palabras y devuelva otro solamente con las palabras que incluyan la letra “m” (tanto mayúscula como minúscula).
//let arr2 = [];
//let arr = ['Moldavia', 'Colombia', 'Togo', 'Argentina', 'Brasil'];
/*
arr.forEach((e) => {
    if(e.includes('M') || e.includes('m') == true){
    arr2.push(e);
    };
});
console.log(arr2);
*/
/*
let funcion = (paises) => {
    arr2 = [];
    paises.forEach((pais) => {
        if(pais.toLowerCase().includes('m')){
            arr2.push(pais);
        }
    });
    console.log(arr2);
    return arr2;
};
funcion(arr);
*/

/* Ejercicio 38, Utilizando forEach, crea una función que reciba dos números y un array de números y que devuelva otro array con aquellos números que estén en el array y sean mayores al primer numero dado y menores al segundo ( sin incluirlos).
*/
/*
let arrNum = [2, 13, 15, 25, 40, 18];

let funcion = (a, b, array) => {
    let arrNum2 = [];
    arrNum.forEach((numero) => {
        if(numero > a && numero < b){
            arrNum2.push(numero);
            arrNum2.sort((a, b) => a-b);
        }
    });
    console.log(arrNum2);
    return arrNum2;
};
funcion(10, 28, arrNum);
*/

/* Ejercicio 39, Utilizando forEach, crea una función que reciba dos números y un array de números y que devuelva el mismo array pero con los números mayores al primer numero dado multiplicados por el segundo numero dado. En caso de que no sean mayores al número dado, devolver el mismo número en esa posición.
Ejemplo: Si tenemos un array de números del 1 al 5 , y llamamos a multiplicarMayoresA(3,10,numeros) , el output será : [1,2,3,40,50]
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

let funcion = (a, b, array) => {
    let newArr = [];
    arr.forEach((numero) => {
        if(a >= numero){
            newArr.push(numero);
        } else if(a < numero){
            newArr.push(b * numero);
        }
    });
    console.log(newArr);
    return newArr;
};
funcion(2, 10, arr);
*/

// Ejercicio 40, Crea una función que reciba un array de números y un número que EN CASO DE QUE EXISTA al menos un número mayor al dado, retorne el primero que cumpla con esa condición. En caso contrario, que retorne “No hay números mayores al número dado”
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

let funcion = (array, numeroLimite) => 
    array.some((a) => a > numeroLimite)
    ? array.find((a) => a > numeroLimite)
    : 'No hay números mayores al número dado';

console.log(funcion(arr, 4));

*/
// Ejercicio 41, Crea una función que reciba un array de palabras que devuelva la primer palabra del array ( la primera que se encuentre) que tenga mas de 4 letras. En caso de que no haya, deberá devolver un string que diga : “No hay palabras con mas de 4 letras”
/*
let palabras = ['Rojo', 'Azul', 'Amarillo', 'Violeta'];

let funcion = (array) => 
    array.some((a) => a.length > 4)
    ? array.find((a) => a.length > 4)
    : 'No hay palabras con mas de 4 letras';
console.log(funcion(palabras));
*/

// Ejercicio 42, Utilizando map, crea una función que reciba un array de números y devuelva el mismo array pero con todos los números duplicados.
/*
let numeros = [1, 2, 3, 4, 5, 6, 7];

let numerosXdos = (arr) => {
    return arr.map((a) => a * 2);
};
console.log(numerosXdos(numeros));
console.log(numeros);
*/

/* Ejercicio 43, Usando el mismo array de números y map , crea una función que reciba un array de números, un número y una función que realice una operación matemática con el número dado y la función pasada como parámetro para cada número del array dado , y devuelva el nuevo array con los resultados ( podes utilizar las funciones de suma, resta, multiplicación y división de anteriores prácticas.
*/
/*
let numeros = [1, 2, 3, 4, 5, 6, 7];

let suma = (a, b) => {
    return a + b;
};

let funcion = (arr, numero, callback) => {
    let numerosSumados = arr.map((a) => callback(a, numero));
    return numerosSumados;
};
console.log(funcion(numeros, 2, suma));
*/

/* Ejercicio 44, A partir de este ejercicio vamos a trabajar con objetos. Les damos la clase y también 5 películas ya creadas (vamos a usar este array para los siguientes ejercicios también).
Como primera medida, creá un array de películas vacío y mediante métodos de array agrega todas las películas al array vacío e imprimí por consola el array.
*/

class Pelicula {
    constructor(titulo, duracion, año) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.año = año;
    }
  }
  
  const pokemon = new Pelicula("Pokemon:La Pelicula", 75, 1998);
  const avengers = new Pelicula("Avengers: Endgame", 181, 2019);
  const starWars = new Pelicula(
    "Star Wars: El despertar de la fuerza",
    135,
    2015
  );
  const batman = new Pelicula("Batman vs Superman", 151, 2016);
  const wonderWoman = new Pelicula("La Mujer Maravilla", 141, 2017);

  let arrPeliculas = [];
  arrPeliculas.push(pokemon, avengers, starWars, batman, wonderWoman);
  console.log(arrPeliculas);

  // Creá una función que ordene el array por año de salida, desde la mas larga hasta la mas corta e imprimí el array por consola.

