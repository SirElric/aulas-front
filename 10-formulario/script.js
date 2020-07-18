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

const loadTable = (data) => {
    const $registros = document.getElementById('registros');

    data.forEach( element => {
        const $tr = document.createElement('tr');
        $tr.innerHTML = 
        `
            <td>${element.id}</td>
            <td>${element.nome}</td>        
            <td>${element.email}</td>    
            <td>${element.celular}</td>    
            <td>${element.cidade}</td>    
            <td>
                <button id=editar-${element.id}>editar</button>
                <button id=excluir-${element.id}>excluir</button>
            </td>    
        `;
        
        $registros.appendChild($tr);
    });
}

const getAlunos = async url => {
    const response = await fetch ( url );
    const json = await response.json();
    
    return json.data;
}

const  showAlunos = async () =>  {
    const url = 'http://localhost/pwfe/apiphp-master/alunos/';
    const alunos = await getAlunos(url);

    const numero = [1,2,3];

    const formatAlunos = alunos.map ( ({ id:id, nome: nome, email, celular, logradouro, bairro, cidade, estado, cep}) => 
    ({ id, nome, email, celular, cidade}) );

    loadTable(formatAlunos);
};

// function createAluno( aluno ) {
//     const url = 'http://localhost/pwfe/apiphp-master/alunos/';
//     const options = {
//       method: 'POST',
//       body: JSON.stringify( aluno)
//     };
  
//     fetch(url, options )
//     console.log(url, options);
// };
  

  
// createAluno(aluno);

showAlunos();

$novo.addEventListener('click', exibirModal);
$fechar.addEventListener('click', fecharModal);
$salvar.addEventListener('click', salvarAluno);