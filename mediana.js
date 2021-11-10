// function calcularMediaAritmetica(lista){
//         const sumaLista = lista.reduce(
//             function (valorAcumulado = 0, nuevoElemento) {
//                 return valorAcumulado + nuevoElemento;
//             }
//         );
    
//         const promedioLista = sumaLista / lista.length;
    
//         return promedioLista
//     }

// const lista1 = [
//     100,
//     200,
//     500,
//     400000000,
// ];

// function calcularMediana(lista){
//     const mitadLista = parseInt(lista.length / 2);
//     return mitadLista;
// }



// function esPar(numerito){
//     if (numerito % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let mediana;


// if (esPar(lista1.length)) {
//     const elemento1 = lista1[mitadLista1 - 1];
//     const elemento2 = lista1[mitadLista1];

//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemento1,
//         elemento2,
//     ]);

//     mediana = promedioElemento1y2
// } else {
//     mediana = lista1[mitadLista1];
//     // posición mitadLista1 dentro lista1
//     // -> mediana
// }


function lista (lista1){
    const orden = lista1.sort(
        function (num1, num2){
            return num1 - num2;
        }
    );
    const mitadLista = parseInt(orden.length / 2);

    let mediana;

    if (esPar(orden.length)) {
        const elemento1 = orden[mitadLista - 1];
        const elemento2 = orden[mitadLista];
    
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
    
        mediana = promedioElemento1y2
        return mediana;
    } else {
        mediana = orden[mitadLista];
        return mediana;
    }
}

function esPar(numerito){
    if (numerito % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}

