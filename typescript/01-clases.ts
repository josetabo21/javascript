let a;
let nombre: String= 'Jose'
nombre ='jose';
const cedula = '1099667790'
//cedula  = '112200892';no se puede reasignar
let apellido = 'Tayupanta';
//apellido = 1; si una variable se asigna algun tipo, en la reasignacion no se puede cambiar el tipo
//duck Typing

let frase: any = 'hola que hace';
frase=1;
frase = {};

let edad: number = 1;
let casado: boolean = false;
let fechaNacimiento: Date = new Date();


let usuario = {
    nombre: 'jose',
    edad: 27
};

class Uusario{
    public nombre: string;
    private edad: number;

    constructor(mNombre: string, mEdad:number){
        this.nombre= mNombre;
        this.edad= mEdad;
    }
    public imprimirUsuario(saludo: string):string{
        //template string
        return `${saludo}mi nombre es: ${this.nombre}, y mi edadad es: ${this.edad}`;
        //return juan;
    }
}
class Usuario2{
    constructor(public nombre:string, private edad: number){

    }
}
let jose = new Uusario(nombre: 'jose', edad: 27 );
console.log('jose',jose);

interface UsuarioTres{
    nombre: string;
    edad: number;
}
let  carlos: UsuarioTres={
    nombre: 'carlos',
    edad:18
};


