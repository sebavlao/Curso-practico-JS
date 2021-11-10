//Helpers / Utils
function esPar(numerito) {
    return (numerito % 2 === 0);
    //     if (numerito % 2 === 0) {
//         return true;
//     } else {
//         return false
//     }
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


// Calculadora de medianas
function medianaSalario(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad = lista[mitad - 1];
        const personitaMitad1 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad, personitaMitad1]);
        return mediana
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad
    }
}


//Mediana general
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);




const medianaGeneralCol = medianaSalario(salariosColSorted);
// Mediana del top 10%
// const arrayEjemplo = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  en este ejemplo, el splice me devolverrñia la posición 6 y 7.
// const ejemplo = arrayEjemplo.splice(5, 2)
// (P * (100 - 15)) / 100 PORCENTAJE
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col = medianaSalario(salariosColTop10);


console.log({
    medianaGeneralCol,
    medianaTop10Col,
});
