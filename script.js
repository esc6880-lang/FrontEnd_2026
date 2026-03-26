const cria = document.getElementById("b");
const btn = document.getElementById("btn");

const estados = {
    normal:  "normal.png",
    puto: "bravo.png",
    morto: "morto.png",
    comendo: "comendo.png",
    alimentado: "comida(2).png",
}

let contador = 0; 
let intervalo = null;
let time_click = null;
let time_out = null;

function controlador (){
    if(intervalo) clearInterval(intervalo)
        
        intervalo = setInterval(() => {
            contador++;

            console.log("tempo:",contador);

            
            if (contador == 10){
                cria.src = estados.puto;
            }

            if(contador == 15){
                cria.src = estados.morto;
            }
            
        }, 1000);
}


controlador();