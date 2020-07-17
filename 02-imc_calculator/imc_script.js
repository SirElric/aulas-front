"use strict";

const calcularImc = (peso, altura) => peso / (altura * altura);

const definirEstado = (imc) => {

    let msg;
    if(imc <= 18.5){
        msg = 'Abaixo do peso.';
    }else if(imc <= 24.9){
        msg = 'Peso ideal.';
    }else if(imc <= 29.9){
        msg = 'Levemente acima do peso.';
    }else if(imc <= 34.9){
        msg = 'Obesidade Grau I.';
    }else if(imc <= 39.9){
        msg = 'Obesidade Grau II.';
    }else {
        msg = 'Obesidade Grau III.';
    }
    return msg;
}

const exibirResultado = () => {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const $resultado = document.getElementById('resultado');
    const imc = calcularImc (peso, altura);
    const estado = definirEstado (imc);

    $resultado.innerHTML =`${nome} seu IMC foi de ${imc} você esta no ${estado}`;
}

document.getElementById('calcular')
        .addEventListener('click', exibirResultado);