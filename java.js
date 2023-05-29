var btnencriptar=document.querySelector(".botonencriptar");
var btndesencriptar=document.querySelector(".botondesencriptar");
var munheco=document.querySelector(".munheco");
var cabeza=document.querySelector("#cabeza");
var cuerpo=document.querySelector("#cuerpo");
var btncopiar=document.querySelector("#copiar")
var respuesta=document.querySelector("#respuesta")
var btncopiar=document.querySelector("#copiar")

btnencriptar.onclick= encriptar;
btndesencriptar.onclick= desencriptar;
btncopiar.onclick=copiar;
function encriptar(){
    quitar();
    respuesta.textContent=textoencriptado(pasartexto());
}

function desencriptar(){
    quitar();
    respuesta.textContent=textodesencriptado(pasartexto());
}

function copiar(){
    var texto = document.querySelector("#respuesta");
    texto.select();
    document.execCommand("copy");
}

function pasartexto(){
    var area = document.querySelector(".texarea");
    return area.value;
}
function quitar(){
 munheco.classList.add("ocultar");
 cabeza.classList.add("ocultar");
 cuerpo.classList.add("ocultar");
 btncopiar.classList.add("mostrar");
 respuesta.style.display="block";
}

function textoencriptado(mensaje){
var texto= mensaje;
var textofinal="";

for(var i=0; i<texto.length; i++){
    if(texto[i]=="a"){
    
    textofinal=textofinal+"ai"
    }
    else if(texto[i]=="e"){
    textofinal=textofinal+"enter"
    }
    else if(texto[i]=="i"){ 
    textofinal=textofinal+"imes"
    } 
    else if(texto[i]=="o"){ 
    textofinal=textofinal+"ober"
    }
    else if(texto[i]=="u"){ 
    textofinal=textofinal+"ufat" 
    }
    else{
        textofinal=textofinal+texto[i];
    }
 }
    return textofinal;
  }


  function textodesencriptado(mensaje){
    var texto= mensaje;
    var textofinal="";
    
    for(var i=0; i<texto.length; i++){
        if(texto[i]=="a"){
        
        textofinal=textofinal+"a"
        i=i+1;   
        }
        else if(texto[i]=="e"){
        textofinal=textofinal+"e"
        i=i+4; 
        }
        else if(texto[i]=="i"){ 
        textofinal=textofinal+"i"
        i=i+3; 
        } 
        else if(texto[i]=="o"){ 
        textofinal=textofinal+"o"
        i=i+3; 
        }
        else if(texto[i]=="u"){ 
        textofinal=textofinal+"u"
        i=i+3;  
        }
        else{
            textofinal=textofinal+texto[i];
        }
     }
        return textofinal;
      }