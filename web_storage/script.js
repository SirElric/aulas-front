"use strict";

const array = [""];
localStorage.setItem("listItens", JSON.stringify(array));

const transform = (array) => JSON.stringify(array);
const getLocalDates = () => JSON.parse(localStorage.getItem("listItens"));
const updateData = () => localStorage.setItem("listItens", transform(arrayNames));
let arrayNames = getLocalDates();

const addData = (newName) => {
    arrayNames.push(newName);

    updateData();
    showInformations();
}

const showInformations = () => {
    const $listName = document.getElementById("list");
    $listName.innerHTML = "";

    const arrayNames = JSON.parse(localStorage.getItem("listItens"));
    arrayNames.forEach(element => {
        $listName.innerHTML += `<li>${element}</li>`;
    });

}

const getValidNames = () => {
    const name = prompt("Digite o nome para atualizar:").trim();
    const stringDataBase = arrayNames.toString();

    if (stringDataBase.indexOf(name) != -1) {
        return name;
    } else {
        alert(`O nome ${name} não foi encontrado no banco! Ele pode ser cadastrado.`);
        return "no results"
    };

}

const clear = () => {
    localStorage.clear();
    arrayNames = [];
    
    showInformations();
}

const rename = () => {
    const oldName = getValidNames();
    if (oldName !== "no results") {
        const newName = prompt(`O ${oldName} foi escolhido. Digite o novo nome para atualizar:`);

        remove(oldName);
        addData(newName);
    }    
}

const remove = (remove) => {
    arrayNames = arrayNames.filter((dataName) => dataName != remove);    

    updateData();
    showInformations();
}

const inputText = () => {
    var newName = prompt("Digite um nome:");

    addData(newName);
}

const deleteText= () => {
    var name = prompt("Digite um nome a ser deletado:");

    remove(name)
}

showInformations();

document.getElementById("add").addEventListener("click", () => inputText());
document.getElementById("alter").addEventListener("click", () => rename());
document.getElementById("remove").addEventListener("click", () => remove(deleteText()));
document.getElementById("clear").addEventListener("click", () => clear());