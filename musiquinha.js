let musica;

function preload(){
  musica = loadSound("Fundo.mp3")
}

function setup(){
  musica.play();
  musica.loop();
}