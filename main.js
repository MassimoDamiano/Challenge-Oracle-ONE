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
    if(texto.length == 0){
      alert("Debes ingresar algun texto")
      mostrar()
    }
    


    mensajeFinal.innerHTML = texto
   
    textoInicial();

    

}
function textoInicial(){


   if(texto.value =! ""){
      
      texto.value = "";
      
   }
   } 

function ocultar(){
   munieco.classList.add("ocultar")
    tituloMensaje.classList.add("ocultar")
    parrafo.classList.add("ocultar")
    
}
function mostrar(){
   munieco.classList.remove("ocultar")
   tituloMensaje.classList.remove("ocultar")
   parrafo.classList.remove("ocultar")
}
function reemplazarPalabras(texto) {
   // Reemplazar "enter" por "e"
   texto = texto.replace(/enter/g, 'e');
   
   // Reemplazar "imes" por "i"
  texto= texto.replace(/imes/g, 'i');
   
   // Reemplazar "ai" por "a"
   texto = texto.replace(/ai/g, 'a');
   
   // Reemplazar "ober" por "o"
   texto = texto.replace(/ober/g, 'o');
   
   // Reemplazar "ufat" por "u"
   texto = texto.replace(/ufat/g, 'u');
   
}

function desencriptar(){
   let texto = document.getElementById("texto").value;
   texto = texto.toLowerCase();
   function reemplazarPalabras(texto) {
      if (typeof texto !== 'string') {
         return 'Error: La frase debe ser una cadena de texto.';
       }
      
      texto = texto.replace(/enter/g, 'e');
      texto= texto.replace(/imes/g, 'i');
      texto = texto.replace(/ai/g, 'a');
      texto = texto.replace(/ober/g, 'o');
      texto= texto.replace(/ufat/g, 'u');
      
      textoFinal= texto
      
   } 
   reemplazarPalabras(texto)
   ocultar()
   
   
   if(texto.length == 0){
      alert("Debes ingresar algun texto")
      mostrar()
    }
    

    mensajeFinal.innerHTML = textoFinal
    texto.Value = "";
    console.log(texto + "1");
    textoInicial()
}
