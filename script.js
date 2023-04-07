
let quantasCartas = 0;
let deck=0;
let arrayCartas=[
    '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif" alt=""> </div></div>',
    '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif" alt=""> </div></div>',
    '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif" alt=""> </div></div>',
    '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/revertitparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/tripletsparrot.gif" alt=""> </div></div>',
    '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif" alt=""></div></div>'
];

let contador = 0;

quantedadeDeCartas();


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

function rotacionar2(elemento){

    const rotate2 = elemento.querySelector(".frontFace");
    rotate2.classList.add("rotate2");
   
    
   
   //setInterval(temporizador, 2000);

   const rotate1 = elemento.querySelector('.backFace');
    rotate1.classList.add('rotate1');
    contador++
    console.log(contador)

    

}



function temporizador(){

   
    const i = document.querySelector('.rotate1') ;
    i.classList.remove('rotate1');

    const o = document.querySelector('.rotate2') ;
    o.classList.remove('rotate2');

    
   
    const meuInterval = setInterval(temporizador,1000);
    clearInterval(meuInterval);
}


