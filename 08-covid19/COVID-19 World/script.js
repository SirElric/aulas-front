"use restrict"

let DB = [
    {
        "uf": "World",
        "recovered": "<div class='spinner gold'></div>",
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
                ${data.recovered}
            </div>
            <div class='title'>
                RECUPERADOS
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
    const url = "https://api.covid19api.com/summary";
    const getApi = await fetch(url);
    const json = await getApi.json();
    const global = await {
        "uf": "Global",
        "recovered": json.Global.TotalRecovered,
        "confirmed": json.Global.TotalConfirmed,
        "dead": json.Global.TotalDeaths
    }    
    console.log(json);
    showData(global);
}

const getCovidNation = async () => {
    const url = "https://api.covid19api.com/summary";
    const getApi = await fetch(url);
    const json = await getApi.json();
    DB = json;
}

const findNations = ( event ) => {
    let maps = event.target.id;

    console.log(maps);
    
    const paises = DB.Countries.find(country => country.CountryCode.match (maps));

    console.log(paises);
    const country = {
        "uf": paises.Country,
        "recovered": paises.TotalRecovered,
        "confirmed": paises.TotalConfirmed,
        "dead": paises.TotalDeaths
    };

    console.log(country);
    showData(country);
}

document.querySelector("svg").addEventListener("click", findNations);

showData(DB[0]);
getCovidWorld();
getCovidNation();