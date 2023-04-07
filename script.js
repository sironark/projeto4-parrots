
let quantasCartas,deck=0;
let arrayCartas=[];

quantedadeDeCartas();


function quantedadeDeCartas(){
   
    quantasCartas = prompt("Quantas cartas deseja jogar?    *escolha números pares de 4 à 14"); 
   
    while (quantasCartas < 4 || quantasCartas > 14 || quantasCartas%2 == 1){

        quantasCartas = prompt("Quantas cartas deseja jogar? *escolha de 4 à 14");
    }
distribuirCartas();
}



function distribuirCartas(){
   
   for(i=0; quantasCartas > i; i++){

    arrayCartas.push('<div onclick=alert("oi") class="card"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""> </div>');
   }
   deck = document.querySelector('.cartasJogo')
   
   deck.innerHTML = arrayCartas;
   console.log(deck)
   
console.log(arrayCartas)

}