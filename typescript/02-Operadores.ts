let arregloNumeros: number[] = [1,2,3,4,5];

let sumarDosNumeros=( numeroUno: number, numeroDos: number): number=>{
    //funciones de flecha gorda
    return numeroUno + numeroDos;
};
let sumatoraValores= 0;
let potenciaDosNumeros = numero => {
    return numero * numero;
}

let potenciaDosNumerosDos = numero => numero*numero;

let resultadoForEach = arregloNumeros.forEach(
     (valorDelArreglo, indice, arreglo)=> {

        console.log(valorDelArreglo);
        console.log(indice);
        console.log(arreglo);
}

)
console.log('resultado forEach', resultadoForEach);

var resultadoSuma = arregloNumeros.reduce(
    (valorActualOperacion, valorArreglo)=>{
        return valorActualOperacion-valorArreglo;
    },
    20
)
console.log(resultadoSuma);

let arregloUsuarios = [
    {
        nombre: 'jose', edad: 10
    },
    {
        nombre: 'dalet', edad: 14
    },
    {
        nombre:'carlos', edad:28
    }
]
let arregloDeudasFamiliares = [
    140, 314.35, 50.90, 16, 200
]
const deuda = valorArregloDeudasFamiliares*(usuario.edad/100);

let totalEdadUsuarios = arregloUsuarios.reduce(
    (total,usuario: UsuarioArreglo)=>total+usuario.edad,0
);
interface UsuarioArreglo {
    nombre: string;
    edad: number;
    casado?: boolean;
    deuda? : number;

}
console.log('total edad usuarios: ',totalEdadUsuarios);

function calcularDeuda(edad: number):number {
    return arregloDeudasFamiliares.reduce(
        (totalDeuda, valorDeuda)=>(totalDeuda+(valorDeuda*(usuario.edad/100)))

    )

}
const usuariosCasados= arregloUsuarios.map(
    (usuario: UsuarioArreglo,indice,arreglo)=>{
        usuario.casado=false;
        return usuario;
    }
)
const usuariosDeudas= arregloUsuarios.map(
    (usuario: UsuarioArreglo,indice,arreglo)=>{
        usuario.deuda
        return usuariosDeudas;
    }
)
    .map(
        (usuario: UsuarioArreglo)=>{
            usuario.deuda=calcularDeuda(usuario.edad);

            return usuario;
        }
    )
    .filter(
        (usuario: UsuarioArreglo)=>{
            return(usuario.deuda<=310);//&&usuario.edad>30);
        }
    )
    //.every(//devuelve un verdadero o falso
    //    (usuario:UsuarioArreglo)=>{
    //        return usuario.edad>= 18;
    //    }
    //)
    .some(//or
        (usuario: UsuarioArreglo)=>{
            return usuario.edad>=18;
        }
    )
console.log('usuarios casados:', usuariosCasados)