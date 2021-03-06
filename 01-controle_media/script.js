//const $nome = document.querySelector("input>div")

const $calc = document.getElementById( 'calc' );
const $exibir = document.getElementById('exibir');
const $ocultar = document.getElementById('ocultar');
const $conteiner = document.querySelector ('.conteiner');


console.log($conteiner);

const calcMedia = (n1 , n2) => (parseInt(n1) + parseInt(n2)) / 2;

const calcSituacao = ( media ) => media >= 50? "Aprovado" : "Reprovado";

/*{
    if ( media >= 50 ){
        $situacao.value="Aprovado";
        $situacao.classList.remove('reprovado');
        $situacao.classList.add('aprovado');
        
    } else {
        $situacao.value="Reprovado";
        $situacao.classList.remove('aprovado');
        $situacao.classList.add('reprovado');
        
    }*/

const exibirMedia = () => {
    const $nome = document.getElementById( 'nome' );
    const nota1 = document.getElementById( 'nota1' ).value;
    const nota2 = document.getElementById( 'nota2' ).value;
    const $media = document.getElementById( 'media' );    
    const $situacao = document.getElementById( 'situacao' );

    const media = calcMedia (nota1 , nota2);

    $situacao.value = calcSituacao(media);

    $media.value = media;

    console.log($nome.value);

}

const calcConceito = () => {
    const media = document.getElementById( 'media' ).value;
    const $conceito = document.getElementById( 'conceito' );   
    
    
    if(media < 0 || media > 100){
        $conceito.value= "*ERRO*";
    }else if (media < 30){
        $conceito.value= "E";
    }else if(media < 50){
        $conceito.value= "D";
    }else if(media < 80){
        $conceito.value= "C";
    }else if(media < 100){
        $conceito.value= "B";
    }else if(media == 100){
        $conceito.value= "A";
    }

}

const calcular = () => {
    exibirMedia();
    calcConceito();
    
}

const exibir = (el) => el.classList.add ( 'exibir' );
const ocultar = (el) => el.classList.remove ( 'exibir' );

$calc.addEventListener('click', calcular);
$exibir.addEventListener('click',( ) => exibir ($conteiner));
$ocultar.addEventListener('click',( ) => ocultar ($conteiner));