var rondasdefecto=25;
rondas=rondasdefecto;

var tiempodefecto=20;
var tiemponivel=tiempodefecto;
var iniciotiempo=tiemponivel;

var fallosdefecto=0;
var aciertosdefecto=0;
fallos=fallosdefecto;
aciertos=aciertosdefecto;

var nota=0;

var CronoID = null;

function baseConverter (number,ob,nb) {
    number = number+"";
	number = number.toUpperCase();
	var list = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var dec = 0;
	for (var i = 0; i <=  number.length; i++) {
		dec += (list.indexOf(number.charAt(i))) * (Math.pow(ob , (number.length - i - 1)));
	}
	number = "";
	var magnitude = Math.floor((Math.log(dec))/(Math.log(nb)));
	for (var i = magnitude; i >= 0; i--) {
		var amount = Math.floor(dec/Math.pow(nb,i));
		number = number + list.charAt(amount); 
		dec -= amount*(Math.pow(nb,i));
	}
    if (number.length < 6){
     for (var i=number.length; i<6 ;i++){
      number="0"+number;
     }
    }
	return number;
}


function iniciacronometro() {
 window.clearTimeout(CronoID);
 iniciotiempo=tiemponivel;
 escribetiempo(iniciotiempo);
 setTimeout("cronometro()",1000);
 rondas=rondas-1;
}

function cronometro() {
 iniciotiempo=iniciotiempo-1;
 escribetiempo(iniciotiempo);
 document.fletra.imgnota.src="imagenes/blanco.gif";
 if (iniciotiempo==0) {
  fallos=fallos+1;
  escribefallos(fallos);
  ponnota();
  ponletra();
 }else{
  CronoID=setTimeout("cronometro()",1000);
 }
}

function cambianivel(nivel) {
 dificil=5;
 intermedio=10;
 facil=20;
 tiemponivel=eval(nivel);
 escribetiempo(tiemponivel);
}

function ponnota() {
 if ((fallos+aciertos)!=0){
  nota=(10*aciertos/(fallos+aciertos))
  if (nota<2){
   calificacion="muy deficiente";
  } else if ((nota>=2) && (nota<5)){
   calificacion="insuficiente";
  } else if ((nota>=5) && (nota<6)){
   calificacion="suficiente";
  } else if ((nota>=6) && (nota<8)){
   calificacion="bien";
  } else if ((nota>=8) && (nota<9)){
   calificacion="notable";
  } else if (nota>=9){
   calificacion="sobresaliente";
  }
 }else{
  calificacion="---"
 }
 escribenota(calificacion);
}

function ponletra() {
 escriberonda(rondas);
 if (rondas!=0){
  tecla=String.fromCharCode(Math.round(Math.random()*93)+33);
  if (tecla=="~") {
   tecla="ñ"
  }
  if (tecla=="^") {
   tecla="á"
  }
  if (tecla=="`") {
   tecla="é"
  }
  if (tecla=="´") {
   tecla="í"
  }
  if (tecla=="¨") {
   tecla="ó"
  }
  iniciacronometro();
  document.fletra.letra.focus();
  document.fletra.letra.value=tecla;
  colorido=baseConverter(Math.round(Math.random()*16777205),10,16);
  document.fletra.letra.style.color="#"+colorido;
 }else{
  window.clearTimeout(CronoID);
  escribetiempo(0);
  document.fletra.letra.value="";
  escribeaqui2();
  document.fletra.imgnota.src="imagenes/blanco.gif";
  alert("Juego terminado");
  window.focus();
 }
}

function pulsatecla(oEvento){ 
    var iAscii; 
     
    if (oEvento.keyCode) 
        iAscii = oEvento.keyCode; 
    else if (oEvento.which) 
        iAscii = oEvento.which; 
    else 
        return false; 
         
    if (String.fromCharCode(iAscii) == tecla){
     aciertos=aciertos+1;
     document.fletra.imgnota.src="imagenes/aciertos.gif";
     escribeaciertos(aciertos);
     ponnota();
     ponletra();
    }else{
     fallos=fallos+1;
     document.fletra.imgnota.src="imagenes/fallos.gif";
     escribefallos(fallos);
     ponnota();
     ponletra();     
    }
    return true; 
} 

function empieza(){
 if (document.fturno.turno.value==0) {
  document.fturno.turno.value=rondasdefecto;
 }
 rondas=document.fturno.turno.value;
 fallos=fallosdefecto;
 aciertos=aciertosdefecto;

 escribeaqui();
 escribefallos(fallos);
 escribeaciertos(aciertos);
 ponnota();
 document.fletra.letra.select();
 ponletra();
}