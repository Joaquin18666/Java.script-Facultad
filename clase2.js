// ARRAYS SON LISTAS

const NUMEROS = [1,2,3,4,5] // CUANDO ES UNA CONSTANTE POR CONVENCION SE ESCRIBE EN MAYUSCULA
console.log (NUMERO5[0]) // print de python
NUMEROS[0] = 'ESTEBAN'
NUMEROS.push('HOLA') //APPEND
console.log(NUMEROS)
NUMEROS.pop()
NUMEROS.shift()//remueve el primero
NUMEROS.unshift('Javier')
// Objeto literal
let profesor = {
    nombre:'ESTEBAN',
    edad : 32,
    profesor : true,
    cumplirAnios : function(){
        this.edad = this.edad +1
    }    
}
console.log(profesor.nombre)
console.log(profesor.cumplirAnios())

//Array de objetos literales

let productos = [
    {nombre:'crema',precio:100},
    {nombre:'shampoo',precio:50},
    {nombre:'enguaje',precio:75},
]
console.log(productos[0].nombre) // me devuelve la crema

let products = [
    {nombre:'crema',precio:100},
    {nombre:'shampoo',precio:50},
    {nombre:'enguaje',precio:75,stock:false},
]
console.table(products)


//operadores logicos
console.log (3 > 1 && 2 > 1) //true
// AND - &&

console.log (3 > 1 || 2 > 1) // true
//OR - ||

console.log (1 && 3) // 3
console.log (1 || 3) // 1
const ARRAY1 = [1]
console.log(ARRAY1[2]) // undefined

console.log(1+1)
console.log('esteban'+1) //el mas concatena y suma (importancia concatenacion)
console.log('11'+1) //111
console.log(1-1)//Nan
console.log('esteban'-1)//10
console.log('asd' - 'dsa')//Nan
console.log('asd'*3)//Nan
console.log(0.1+0.7) //0.7999999999 medio malo con nummeros decimales
console.log(10%5)//0 resto
console.log(10/0)//infinity


//Operadores aritmeticos
console.log(10>2)
console.log(10<2)
console.log(10>=2)
console.log(10<=2)
console.log (10 == '10') //true comparacion debil compara solo el valor
console.log (10 != '10') //true negacion debil compara solo el valor
console.log (10 === '10')//comparacion estricta compara el valor y el tipo
console.log (10 !== '10')//negacion estricta compara el valor y el tipo

//castear aca es pastear
console.log(Number('10')) // 10
console.log((10).toString)// '10'
console.log(parseInt('120')) //120

console.log((3.145086).toFixed(2)) //3.14