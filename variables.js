console.log('hola mundo');
var mutar;
var nombre= 'Jose';
mutar= nombre;

var deudas = 0;
var fechaNacimiento = new Date();
var casado = false;
var estoyVacio = null; //false
var noEstoyDEefinido = undefined; //false
// null undefined 0 -1 1
// -1 0 1
if(estoyVacio){
    console.log('verdadero');
}else{
    console.log('falso');
}

//jason
//ctrol + a = seleccionar
//ctrl + alt + l = formatear
var usuario = {
    "nombre":"Jose",
    apellido:'Tayupanta',
    imprimirEnConsola: function (){
      console.log(this.nombre+ ' '+ this.apellido + ' ')
    }



};
console.log(usuario.nombre);
console.log(usuario.apellido);
delete usuario.nombre;
console.log(usuario);
usuario.cedula='1899002234'
console.log(usuario);
console.log(typeof nombre);
console.log(typeof casado);
console.log(typeof fechaNacimiento);
function sumarDosNumeros(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}
console.log(sumarDosNumeros(1,2));
usuario.imprimirEnConsola();

var arreglo[
    1,
    2,
    3,
    "jose",
    {
        nombre:"jose"
    },
    sumarDosNumeros(3,2),
];
console.log(arreglo);