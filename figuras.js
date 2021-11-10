// Código del cuadrado

// se puede incluir variables en el texto usando estas comillas `` y agregando la variable de este manera 
// const ladoCuadrado = 5;
// console.log(`los lados de cuadrado miden ${ladoCuadrado}`)

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm" )

function perimetroCuadrado(lado){
    return lado * 4;
} 

// const áreaCuadrado = ladoCuadrado * ladoCuadrado

function areaCuadrado(lado){
    return (lado * lado) + "cm^2";
}

// console.log("El área del cuadrado es: " + áreaCuadrado + "cm^2" )

console.groupEnd();

// Código del triángulo
// console.group("Triángulos");

// const ladoTriángulo1 = 6;
// const ladoTriángulo2 = 6;
// const baseTriángulo = 4;
// console.log(
//     "Los lados del triángulo miden: "
//     + ladoTriángulo1
//     + "cm, "
//     + ladoTriángulo2
//     + "cm, "
//     + baseTriángulo
//     + "cm"
// );

// const alturaTriángulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriángulo + "cm");


// const perimetroTriángulo = ladoTriángulo1 + ladoTriángulo2 + baseTriángulo;
// console.log("El perimetro del triángulo es: " + perimetroTriángulo + "cm");


function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

// const áreaTriángulo = (baseTriángulo * alturaTriángulo / 2);
// console.log("El área del triángulo es: " + áreaTriángulo + "cm^2");

function areaTriangulo(base, altura){
    return (base * altura / 2) + "cm^2";
}

console.groupEnd();


//Código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diámetro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del círculo es: " + diametroCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
// const áreaCirculo = (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: " + áreaCirculo + "cm");

function areaCirculo(radio){
    return ((radio * radio) * PI) + "cm^2";
}

console.groupEnd;


// Aquí interactuamos con HTML:
// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


// Triángulo:
function calcularPerimetroTriangulo(){
    const ladoA = document.getElementById("InputTriánguloLadoA");
    const valueA = Number(ladoA.value);

    const ladoB = document.getElementById("InputTriánguloLadoB");
    const valueB = Number(ladoB.value);

    const base = document.getElementById("InputTriánguloBase");
    const valueC = Number(base.value);

    const perimetro = perimetroTriangulo(valueA, valueB, valueC);
    alert (perimetro);
}

function calcularAreaTriangulo(){
    const altura = document.getElementById("InputTriánguloAltura");
    const valueA = Number(altura.value);

    const base = document.getElementById("InputTriánguloBaseB")
    const valueB = Number(base.value)

    const área = areaTriangulo(valueA, valueB);
    alert(área);
}


// Círculo:
function calcularPerimetroCirculo(){
    const radio = document.getElementById("InputCirculoRadio");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro)
}

function calcularAreaCirculo(){
    const radio = document.getElementById("InputCirculoRadio");
    const value = radio.value;

    const area = areaCirculo(value);
    alert(area);
}


// Trángulo isósceles:
function alturaTrianguloIsosceles(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base ){
        const altura = Math.sqrt((lado1 * lado2) - ((base * base) / 4));
        console.log("La altura es: " + altura + "cm");
    }
    else{
        console.log("Error, no es un triángulo isósceles");
    }
}

// function calcularAlturaIsosceles(){
//     const ladoA = document.getElementById("InputIsoscelesLadoA");
//     const valueA = Number(ladoA.input);

//     const ladoB = document.getElementById("InputIsoscelesLadoB");
//     const valueB = Number(ladoB.input);

//     const base = document.getElementById("InputIsoscelesBase");
//     const valueC = Number(base.input);

//     const altura = alturaTrianguloIsosceles(valueA, valueB, valueC);
//     alert(altura);
// }