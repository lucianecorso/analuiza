let estado = 0; // 0: campo, 1: cidade, 2: entregando
let caminhão;
let alimentos;
let mercado;
let tecnologia;

function preload() {
  caminhão = loadImage('https://images.app.goo.gl/tCPSsne2twdqPqWH6'); 
  alimentos = loadImage('https://images.app.goo.gl/CFptz13abymnyBcS6'); 
  mercado = loadImage('https://images.app.goo.gl/qGiYSZkdTAKEebsP9');
  tecnologia = loadImage('https://images.app.goo.gl/NbBM6EWSouEPqkVU9');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul

  if (estado === 0) {
    // Cenário do campo
    fill(34, 139, 34); // Verde campo
    rect(0, height / 2, width, height / 2); // Campo
    image(caminhão, width / 4, height / 2 - 50); // Caminhão no campo
    textSize(32);
    fill(0);
    text("Caminhão indo para a cidade", 50, height / 40);
    
  } else if (estado === 1) {
    // Cenário da cidade
    fill(200); // Cor da cidade
    rect(0, height / 2, width, height / 2); // Cidade
    image(caminhão, width / 4 + frameCount % width * 0.5, height / 2 - 50); // Caminhão na cidade
    image(alimentos, width / 2 + frameCount % width * -0.5, height /2 -50); // Alimentos na cidade
    
    textSize(32);
    fill(0);
    text("Caminhão entregando alimentos", 50, height / 40);
    
  } else if (estado === 2) {
    // Retornando ao campo com tecnologia
    fill(34,139,34);
    rect(0,height/2,width,height/2); // Campo novamente
    image(caminhão,width/4,height/2-50); // Caminhão voltando
    image(tecnologia,width/2,height/2-50); // Tecnologia no campo
    
    textSize(32);
    fill(0);
    text("Caminhão trouxe tecnologia!",50,height/40);
    
  }
}

function mousePressed() {
  if (mouseButton === LEFT) {
    if (estado === 0) {
      estado = (estado + 1) % 3; // Muda para a cidade
    } else if (estado === 1) {
      estado = (estado + 1) % 3; // Retorna ao campo com tecnologia
    } else if (estado === 2) {
      estado = (estado + 1) % 3; // Volta para o campo inicial 
    }
    
    frameCount = -1; // Reinicia animação do caminhão
   }
}