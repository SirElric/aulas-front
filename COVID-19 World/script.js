"use restrict"

let DB = [
    {
        "uf": "World",
        "suspect": "<div class='spinner gold'></div>",
        "confirmed": "<div class='spinner orange'></div>",
        "dead": "<div class='spinner red'></div>"
    }
]

const showData =  ( data ) => {
    const panel = `
        <div class='card nation'>
            ${data.uf}
        </div>
        <div class='card suspect'>
            <div class='numbers'>
                ${data.suspect}
            </div>
            <div class='title'>
                SUSPEITOS
            </div>
        </div>
        <div class='card confirmed'>
            <div class='numbers'>
                ${data.confirmed}
            </div>
            <div class='title'>
                CONFIRMADO
            </div>
        </div>
        <div class='card dead'>
            <div class='numbers'>
                ${data.dead}
            </div>
            <div class='title'>
                MORTOS
            </div>
        </div>
    `;

    const $container = document.createElement ('div');
    $container.innerHTML = panel;

	const $info = document.getElementById ('info');
	
	$info.removeChild($info.firstChild);
    $info.appendChild ($container);

};

const getCovidWorld = async () => {
    const url = "https://corona.lmao.ninja/countries?sort=country";
    const getApi = await fetch(url);
    const json = await getApi.json();
    DB = json;
}

const getCovidNation = async () => {
    const url = "https://corona.lmao.ninja/countries?sort=country";
    const getApi = await fetch(url);
    const json = await getApi.json();
    DB = json;
}

const findNations = ( event ) => {
    let maps = event.target.id;
    
    const paises = DB.find(country => country.countryInfo.iso2 == maps? country:"");

    console.log(paises);
    const country = {
        "paises_nome": paises.country,
        "casos": paises.cases,
        "mortes": paises.deaths
    };

    showData(country);
}

document.querySelector("svg").addEventListener("click", findNations);

showData(DB[0]);
getCovidWorld();
getCovidNation();