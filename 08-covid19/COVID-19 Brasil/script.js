"use restrict"

let DB = [
    {
        "uf": "Brasil",
        "suspect": "<div class='spinner gold'></div>",
        "confirmed": "<div class='spinner orange'></div>",
        "dead": "<div class='spinner red'></div>"
    }
]

const showData =  ( data ) => {
    const panel = `
        <div class='state'>
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

    $info.removeChild ($info.firstChild);
    $info.appendChild ($container);

};

const getCovidBrazil = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil';
    const getApi = await fetch ( url );
    const json = await getApi.json();
    const brazil = await {
        "uf": "Brasil",
        "suspect": json.data.cases,
        "confirmed": json.data.confirmed,
        "dead": json.data.deaths
    }
    showData (brazil);
}

const getCovidState = async () => {
    const url = 'https://covid19-brazil-api.now.sh/api/report/v1/';
    const getApi = await fetch ( url );
    const json = await getApi.json();
    DB = await json.data;
}

const findState = ( event ) => {
    const ufMap = event.target.parentNode.id;
    const getState = DB.find  (test => test.uf.match (ufMap));
    console.log(DB);
    const state = {
        "uf": getState.uf,
        "suspect": getState.suspects,
        "confirmed": getState.cases,
        "dead": getState.deaths
    }
    showData (state);
}

document.querySelector ('svg').addEventListener ('click', findState);

showData ( DB[0] );
getCovidState ();
getCovidBrazil ();
