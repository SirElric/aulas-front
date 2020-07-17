const fruits = ['Blue Barry', 'Orange', 'Banana', 'grape'];
const clients = ['Melon', 'WaterMelon', 'Banana', 'grape'];
const card = ( arr,title="List" ) => {
    const $card = document.createElement('div');
    $card.classList.add('card'); 
    const elementos = arr.join('</li><li>');
    $card.innerHTML = `
    <div class="card-title">
       ${title}
    </div>
    <div class="card-body">
        <ul>
          <li>${elementos}</li>
        </ul>
    </div>`;
    return $card;
}
const $container = document.querySelector('.container');

    $container.appendChild(card( fruits, "Fruits"));
    $container.appendChild(card( clients,));


