"use strict"

const search = () => {

    const artistName = document.getElementById('artist').value;
    const songName = document.getElementById('song').value;

    const searchBtn = document.getElementById('searchBtn');

    if(searchBtn.addEventListener('click')){
      const url = `https://api.lyrics.ovh/v1/${artistName}/${songName}`;

      return url;    
    }else{
      return "não encontrado";
    }


    //const getLyric = await fetch(url);

    //const lyricJson = await getLyric.json();
    

    //lyric(jsonLetra, idMusica);
  }

console.log(search ());
/*var request = new XMLHttpRequest();

request.open('GET', 'https://api.lyrics.ovh/v1/artist/title');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

request.send();*/