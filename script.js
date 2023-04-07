
let quantasCartas = 0;
let deck=0;
let arrayCartas=[];
contador = 0;

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
   while(indice < quantasCartas){
        indice++
    deck.innerHTML+= '<div class="card" onclick="rotacionar2(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif" alt=""></div></div>'

   }
   


}

function rotacionar2(elemento){

    const rotate2 = elemento.querySelector(".frontFace");
    rotate2.classList.add("rotate2");
   
    
   
   // setInterval(temporizador, 1000);

   const rotate1 = elemento.querySelector('.backFace');
    rotate1.classList.add('rotate1');
    

}


   
    


    




function temporizador(){

    
    contador = contador + 1;
    console.log(contador);

if(contador = 2){
   
    const i = document.querySelector('.backFace') ;
    i.classList.remove('rotate1');

    const o = document.querySelector('.frontFace') ;
    o.classList.remove('rotate2');

    
    contador = 0;
    const meuInterval = setInterval(temporizador,1000);
    clearInterval(meuInterval);
}

}
