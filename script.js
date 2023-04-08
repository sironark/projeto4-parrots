
let quantasCartas = 0;
let deck=0;
let arrayCartas=[
    '<div class="card" onclick="contagem(),rotacionar1(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/explodyparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/fiestaparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/metalparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/revertitparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/tripletsparrot.gif" alt=""></div></div>',
    '<div class="card" onclick="contagem(),rotacionar1(this)"><div class="frontFace face" ><img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png" alt=""></div><div class="backFace face"><img class"one" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/unicornparrot.gif" alt=""></div></div>'
];
let global1;
let global2;
let jogada3=""; 
let jogada4=""; 
contador = 0;



quantedadeDeCartas();



function contagem(){
    contador++
    console.log(contador)
    if(contador==2){
        setInterval(desvirarDiferentes, 1500);
        meuInterval = setInterval(desvirarDiferentes, 1500);
        
    }
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
   


    let rotate2 = elemento.querySelector(".frontFace");
    rotate2.classList.add("rotate2");
    
 

    let rotate1 = elemento.querySelector('.backFace');
    rotate1.classList.add('rotate1');
    
    
    
    
    
   console.log(contador)

    if(contador == 2){
        jogada3 =rotate1.innerHTML;
        console.log(jogada3)
        global2 = elemento


       // elemento.classList.add(string);
        
        

       
        
    } if(contador==1){
        jogada4 = rotate1.innerHTML;
        global1=elemento
        
        console.log(jogada4)
        //elemento.classList.add(string3);
        
        
        
    }


    if(jogada3 == jogada4){
        jogada3 = "";
        jogada4 = "";
        contador=0;
        console.log("cartas iguais")
        clearInterval(meuInterval);
        
                
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

      //  const indice2 = document.querySelector(string2);
      //  const indice12 = indice2.querySelector('.rotate2');
        

   
    

        console.warn("oooooo")
        jogada3 = "";
        jogada4 = "";
        contador = 0;
        clearInterval(meuInterval);


    }
}





