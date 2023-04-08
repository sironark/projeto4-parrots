
let quantasCartas = 0;
let deck=0;
let arrayCartas=[
    '<div class="card" onclick="contagem(),rotacionar1(this)" data-test="card"><div class="frontFace face" ><img data-test="face-down-image" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img data-test="face-up-image" class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)" data-test="card"><div class="frontFace face" ><img data-test="face-down-image" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img data-test="face-up-image" class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)" data-test="card"><div class="frontFace face" ><img data-test="face-down-image" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img data-test="face-up-image" class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)" data-test="card"><div class="frontFace face" ><img data-test="face-down-image" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img data-test="face-up-image" class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)" data-test="card"><div class="frontFace face" ><img data-test="face-down-image" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img data-test="face-up-image" class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/revertitparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)" data-test="card"><div class="frontFace face" ><img data-test="face-down-image" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img data-test="face-up-image" class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/tripletsparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)" data-test="card"><div class="frontFace face" ><img data-test="face-down-image" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img data-test="face-up-image" class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif" alt=""></div></div>'
];
let global1;
let global2;
let jogada3=""; 
let jogada4=""; 
contador = 0;
contadorFinalizador = 0;
contadorJogadas = 0;


quantedadeDeCartas();

function contagem(){
    contador++
}



function quantedadeDeCartas(){
   
    quantasCartas = prompt("Quantas cartas deseja jogar?    *escolha números pares de 4 à 14"); 
    while (quantasCartas < 4 || quantasCartas > 14 || quantasCartas%2 == 1){
    quantasCartas = prompt("Quantas cartas deseja jogar? *escolha de 4 à 14");
    }
distribuirCartas();
}



function distribuirCartas(){
    let deck = document.querySelector(".cartasJogo");
    let indice=0;
    let arrayCartasescolhidas = [];
    let conta = quantasCartas/2;
    arrayCartasescolhidas.push()

   while(indice < conta){
        indice++
        arrayCartasescolhidas.push(arrayCartas[indice]);
        arrayCartasescolhidas.push(arrayCartas[indice]);

   }
   arrayCartasescolhidas.sort(comparador)
   function comparador() { 
       return Math.random() - 0.5; 
   }
   
  deck.innerHTML+= arrayCartasescolhidas;
   
}

function rotacionar1(elemento){
   
contadorJogadas++

    let rotate2 = elemento.querySelector(".frontFace");
    rotate2.classList.add("rotate2");
    
    let rotate1 = elemento.querySelector('.backFace');
    rotate1.classList.add('rotate1');
      
    if(contador == 2){
        jogada3 =rotate1.innerHTML;
        console.log(jogada3)
        global2 = elemento

        setTimeout(desvirarDiferentes, 1000);
        meuInterval = setTimeout(desvirarDiferentes, 1000);

    } if(contador==1){
        jogada4 = rotate1.innerHTML;
        global1=elemento
        
    } if(jogada3 == jogada4){
        jogada3 = "";
        jogada4 = "";
        contador=0;
        console.log("cartas iguais")
        contadorFinalizador++
                  
    } if(contadorFinalizador == quantasCartas/2){
        setTimeout(alertFinal, 400);
        meuAlertFinal = setTimeout(alertFinal, 400);
        
    }
}

   
function desvirarDiferentes(){
    if(jogada3 != "" && jogada3!=jogada4 && jogada4!=""){
        
        const indice1 = global1.querySelector('.rotate1');
        indice1.classList.remove('rotate1');

        const indice11 = global1.querySelector('.rotate2');
        indice11.classList.remove('rotate2');


        const indice2 = global2.querySelector('.rotate1');
        indice2.classList.remove('rotate1');

        const indice22 = global2.querySelector('.rotate2');
        indice22.classList.remove('rotate2');

        jogada3 = "";
        jogada4 = "";
        contador = 0;
        clearInterval(meuInterval);
    } 
}


function alertFinal(){
    alert(`Você ganhou em ${contadorJogadas} jogadas!`)
    clearTimeout(meuAlertFinal);
    contadorJogadas=0;
}



