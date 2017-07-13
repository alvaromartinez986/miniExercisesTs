
// Uso de Let y Const
let nombre = "Ricardo Tapia";
let edad = 23;

let PERSONAJE = {
  nombre : nombre,
  edad: edad
};

console.log(PERSONAJE.nombre, PERSONAJE.edad);


interface superHero {
    nombre:string,
    artesMarciales:Array<String>,
}
// Cree una interfaz que sirva para validar el siguiente objeto
let batman:superHero = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log(batman.nombre, batman.artesMarciales);



// Convertir esta funcion a una funcion de flecha
let resultadoDoble = ( a:number, b:number ) => {
  return (a + b) * 2 ;
}

console.log(resultadoDoble(3,2));

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger( nombre:string, poder?:string, arma:string="arco" ){
  let mensaje:string;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + arma
  }
  return mensaje;
}

console.log(getAvenger("Thor", "volar", "martillo"));
console.log(getAvenger("Thor"));

// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Rectangulo {

  base: number = 0;
  altura: number = 0;

  constructor(base:number, altura:number){
    this.base = base;
    this.altura = altura;
  }

  public calculateArea():number{
    return (this.base*this.altura);
  }
}


let rectangulo:Rectangulo = new Rectangulo(2, 4);
console.log(rectangulo.calculateArea());
