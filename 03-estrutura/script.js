"use strict";

const $result = document.getElementById('result');

const showDates= ( el, client,) =>{
    el.innerHTML += `
    <div class="card border-success mb-3" style="max-width: 18rem;">
        <div class="card-header">${client.name}</div>
        <div class="card-body">${client.age}</div>
        <div class="card-body">${client.city}</div>  
    </div>`;
}

const clients = [
    {name: "test name", age: "22",  city: "test-city",}
];

const name = prompt ("Digite seu nome");
const age = prompt ("Digite sua idade");
const city = prompt ("Digite seu Cidade");

clients.push({"name": name, "age": age, "city": city});

clients.forEach(client => showDates($result, client));