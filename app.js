"use strict";
// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log(PERSONAJE.nombre, PERSONAJE.edad);
// Cree una interfaz que sirva para validar el siguiente objeto
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log(batman.nombre, batman.artesMarciales);
// Convertir esta funcion a una funcion de flecha
var resultadoDoble = function (a, b) {
    return (a + b) * 2;
};
console.log(resultadoDoble(3, 2));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + arma;
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
var Rectangulo = (function () {
    function Rectangulo(base, altura) {
        this.base = 0;
        this.altura = 0;
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.calculateArea = function () {
        return (this.base * this.altura);
    };
    return Rectangulo;
}());
var rectangulo = new Rectangulo(2, 4);
console.log(rectangulo.calculateArea());
