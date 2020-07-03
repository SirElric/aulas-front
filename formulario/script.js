"use strict"

import { validar, emailValidator } from "./masks.js";

const $novo = document.getElementById('novo');
const $fechar = document.getElementById('fechar');
const $salvar = document.getElementById('salvar');

const exibirModal = () => document.querySelector('.conteiner-modal').classList.add ('exibir-modal');
const fecharModal = () => document.querySelector('.conteiner-modal').classList.remove('exibir-modal');
const salvarAluno = () => {
    fecharModal();
}

validar (document.getElementById('form'));
emailValidator (document.getElementById('email'));

/*const $campos = document.querySelectorAll('.form > input');
$campos.forEach ( campo => {
    const tipoValidacao = campo.dataset.type;
    campo.addEventListener('input', e => {
        e.target.value = masks[tipoValidacao](e.target.value);
    })
});*/

$novo.addEventListener('click', exibirModal);
$fechar.addEventListener('click', fecharModal);
$salvar.addEventListener('click', salvarAluno);