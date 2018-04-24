var a;
var nombre = 'Jose';
nombre = 'jose';
var cedula = '1099667790';
//cedula  = '112200892';no se puede reasignar
var apellido = 'Tayupanta';
//apellido = 1; si una variable se asigna algun tipo, en la reasignacion no se puede cambiar el tipo
//duck Typing
var frase = 'hola que hace';
frase = 1;
frase = {};
var edad = 1;
var casado = false;
var fechaNacimiento = new Date();
var usuario = {
    nombre: 'jose',
    edad: 27
};
var Uusario = /** @class */ (function () {
    function Uusario(mNombre, mEdad) {
        this.nombre = mNombre;
        this.edad = mEdad;
    }
    Uusario.prototype.imprimirUsuario = function (saludo) {
        //template string
        return saludo + "mi nombre es: " + this.nombre + ", y mi edadad es: " + this.edad;
        //return juan;
    };
    return Uusario;
}());
var Usuario2 = /** @class */ (function () {
    function Usuario2(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Usuario2;
}());
var jose = new Uusario(nombre, 'jose', edad, 27);
console.log('jose', jose);
var carlos = {
    nombre: 'carlos',
    edad: 18
};
