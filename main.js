const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const image = document.getElementById("munieco")
const tituloMensaje = document.getElementById("titulo-mensaje")
const parrafo = document.getElementById("parrafo")
let mensajeFinal = document.getElementById("mensaje")



btnEncriptar.addEventListener("click", function(event){
   encriptar();
});

btnDesencriptar.addEventListener("click", function(event){
   desencriptar();
});



function encriptar(){ 

    let texto = document.getElementById("texto").value;
    if(texto.length == 0){
      alert("Debes ingresar algun texto")
    }
    texto = texto.toLowerCase();
    texto = texto.split("");
    for(i = 0; i < texto.length; i++){
       if(texto[i] == "e"){
          texto[i] = "enter";
       }else if(texto[i] == "i"){
        texto[i] = "imes";
       }else if(texto[i] == "a"){
        texto[i] = "ai";
       }else if(texto[i] == "o"){
        texto[i] = "ober";
       }else if(texto[i] == "u"){
        texto[i] = "ufat";
       }
      } 
    if (Array.isArray(texto)) {
      texto = texto.join("");
    } else {
      
    }
   

    ocultar()
    
    
     
    mensajeFinal.innerHTML = texto
 
    console.log(mensajeFinal.textContent)
    


}

function ocultar(){
   munieco.classList.add("ocultar")
    tituloMensaje.classList.add("ocultar")
    parrafo.classList.add("ocultar")
    
}

function desencriptar(){
   let texto = document.getElementById("texto").value;
    texto = texto.toLowerCase();
    if(texto.length == 0){
      alert("Debes ingresar algun texto")
    }
    let textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
   ocultar()
    mensajeFinal.innerHTML = texto
    console.log(texto)
    
}