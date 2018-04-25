var arregloNumeros = [1, 2, 3, 4, 5];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    //funciones de flecha gorda
    return numeroUno + numeroDos;
};
var sumatoraValores = 0;
var potenciaDosNumeros = function (numero) {
    return numero * numero;
};
var potenciaDosNumerosDos = function (numero) { return numero * numero; };
var resultadoForEach = arregloNumeros.forEach(function (valorDelArreglo, indice, arreglo) {
    console.log(valorDelArreglo);
    console.log(indice);
    console.log(arreglo);
});
console.log('resultado forEach', resultadoForEach);
var resultadoSuma = arregloNumeros.reduce(function (valorActualOperacion, valorArreglo) {
    return valorActualOperacion - valorArreglo;
}, 20);
console.log(resultadoSuma);
var arregloUsuarios = [
    {
        nombre: 'jose', edad: 10
    },
    {
        nombre: 'dalet', edad: 14
    },
    {
        nombre: 'carlos', edad: 28
    }
];
var arregloDeudasFamiliares = [
    140, 314.35, 50.90, 16, 200
];
var deuda = valorArregloDeudasFamiliares * (usuario.edad / 100);
var totalEdadUsuarios = arregloUsuarios.reduce(function (total, usuario) { return total + usuario.edad; }, 0);
console.log('total edad usuarios: ', totalEdadUsuarios);
function calcularDeuda(edad) {
    return arregloDeudasFamiliares.reduce(function (totalDeuda, valorDeuda) { return (totalDeuda + (valorDeuda * (usuario.edad / 100))); });
}
var usuariosCasados = arregloUsuarios.map(function (usuario, indice, arreglo) {
    usuario.casado = false;
    return usuario;
});
var usuariosDeudas = arregloUsuarios.map(function (usuario, indice, arreglo) {
    usuario.deuda;
    return usuariosDeudas;
})
    .map(function (usuario) {
    usuario.deuda = calcularDeuda(usuario.edad);
    return usuario;
})
    .filter(function (usuario) {
    return (usuario.deuda <= 310); //&&usuario.edad>30);
})
    //.every(//devuelve un verdadero o falso
    //    (usuario:UsuarioArreglo)=>{
    //        return usuario.edad>= 18;
    //    }
    //)
    .some(//or
function (usuario) {
    return usuario.edad >= 18;
});
console.log('usuarios casados:', usuariosCasados);
