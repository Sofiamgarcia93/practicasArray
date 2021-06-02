// Arrays
// nombreArray = []

const vacio = [];
const frutas = ["manzana", "Naranja", "platano",["limones", "tanjarina", "jamaica"], "pera", "mango"];
const edades = [1, 2, 3, 4, 5, 10, 8];
const booleanos = [true, true, false, true];


frutas[3][1];
console.log(frutas[3][2]);

// "manzana" == frutas[0]

// Acceder a los valores de un array
// array[posicionElemento] a través del índice : array[indice] 

//console.log(frutas[2])


console.log(edades.length);

frutas.push("sandia");
console.log(frutas);

frutas.unshift("tanjarina", "culo");
console.log(frutas);


frutas.shift();
console.log(frutas);
frutas.shift();
console.log(frutas);

frutas.pop();
console.log(frutas);


const posicionElemento = frutas.indexOf("platano");
console.log(posicionElemento);

console.log(frutas.length);




/*

// Array tienen la propiedad length (Inicia en 1) (Longitud del arreglo)
// array.length == longitud escrita en número

console.log(vacio.length)

const ultimoElemento = frutas[frutas.length]
console.log(ultimoElemento)

// Añadir elemento nuevo al arreglo: push (Al final de la lista)
// arreglo.push(elementoNuevo)

frutas.push("Fresa", "Naranja", "Melón")
edades.push(36)
console.log(frutas)
console.log(edades)


// Eliminar ultimo elemento del Array: pop
// arreglo.pop()

const ultimaFruta = frutas.pop();
// const ultimoDeVacio = vacio.pop(); Arroja undefined porque no puede eliminar algo de un array vacio
console.log('Ultima Fruta', ultimaFruta);
console.log('Arreglo Frutas', frutas);

// Agregar elemento al inicio de un Array: unshift
// arreglo.unshift(elementoNuevo)

// frutas.unshift("Coco")
frutas.unshift("Coco", "Uvas", "Moras")
console.log("Frutas unshift", frutas);

// Eliminar el primer elemento de un Array: shift
// arreglo.shift()

const primerFruta = frutas.shift()
console.log('Primer fruta', primerFruta)
console.log("Frutas shift", frutas);

// Obtener la posición de un elemento especificado o en concreto: indexOf
const elementoPosicion = frutas.indexOf("Naranja");
console.log('indexOf', elementoPosicion);


// ------------- ejercicio ----------
// Dados un array de 10 números, informar cuantos de ellos son positivos.

/*
1- Recibir un array de 10 elementos
2- Verificar cada elemento y saber si es positivos
3- Agregar a un contador para informar cuantos son positivos
4- Informar resultado
*/

const numbersArray = [2, -10, -50, -5, -8, 12, -13, 25, 0, 65];
const positivosTotal = [];
/*
for(inicio del ciclo; fin del ciclo; incremento del ciclo){
  CODIGO A EJECUTAR
};*/

/*
for(let i = 0; i < numbersArray.length; i+= 1){
  if(numbersArray[i] >= 0){
    positivosTotal += 1;
  }
}


console.log("RESULTADO", positivosTotal)


/*const obtenerMenor = (numeros) => {
    let menor = Infinity;
    for (let i=0; i < numeros.length; i++){
      if(numeros[i]<menor){
       menor = numeros[i];
      }
    }
    return menor;
  }
  */


/*
  const obtenerMenor = (numeros) =>{
    let min = Infinity // es un numero conceptual mas grande de todos
    for(const numero of numeros){
      // 1000000 > 5
      //console.log({min,numero,resultado:min > numero});
      if(min > numero){
        min = numero;
      }
    }
    return min;
  }
 
   const arrai1 = [5, 7, 99, 34, 54, 2, 12];
  obtenerMenor(arrai1);
  obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) 
  */



  
  const contiene = (numeroAEncontrar,numeros) =>{
    for(const numero of numeros){
      if(numeroAEncontrar === numero){
        return true;
      }
    }
    return false;
  }
  
  console.log(contiene(54, [5, 7, 99, 3, 4, 50, 2, 12]))
  

  const gano = (tragamonedas)=>{
    const simboloPrimero = tragamonedas[0];
    for(const simbolo in tragamonedas){
      if(tragamonedas[simbolo] !== simboloPrimero){
        return false;
      }
      
      if(simbolo === 4){
        return true;
      }
    }
  }
  


/*Definí una función 
separar que tome por
 parámetro un string
  con emojis de perros
   y gatos y devuelva un
    string con los perros
     agrupados por un lado
      y los gatos por otro
*/



/*
const separar = (linea) => {
  
const separados = [];

  for(const emoji of linea){
    if(emoji === "🐶"){
      separados.unshift(emoji);
    }else{
      separados.push(emoji);
    }
  };
  return separados;
}
*/


//const arrayVacio = []
//const repetir (valor, cantidad) =>{

  
//}


/*
obtenerMenor(numeros)
Crear una función obtenerMenor que tome como argumento un array 
de numeros y devuelva el menor de ellos. Ejemplo:

obtenerNumeroMenor(5, 7, 99, 34, 54, 2, 12) // 2

1-crear la funcion
2- crear un ciclo con un incremento de 1 en 1, empiece en el elemento 0 del array y termine en el ultimo
3- arroje el resultado con el numero menor

*/
const arrai1 = [5, 7, 99, 34, 54, 2, 12];
const arrai2 = [5, 7, 99, 34, 54, 2, 12,36,69, 0];

const obtenerMenor = (parametro) =>{
  let menor = Infinity;
for(let i = 0; i < parametro.length; i = i + 1){
  if(menor > parametro[i]){
    menor = parametro[i]
  }
} return menor;

}

console.log(obtenerMenor(arrai1));
console.log(obtenerMenor(arrai2));



