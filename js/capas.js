function escribetiempo(texto){
 if (document.layers){
  var capa = document.layers['tiempo'].document;
  capa.open();
  capa.write(texto+"''");
  capa.close();
 }else if (document.all){ 
  document.all.tiempo.innerHTML=texto+"''";
 }else{
  document.getElementById('tiempo').innerHTML=texto+"''";
 }
}

function escribeaciertos(texto){
 if (document.layers){
  var capa = document.layers['acierto'].document;
  capa.open();
  capa.write(texto);
  capa.close();
 }else if (document.all){
  document.all.acierto.innerHTML=texto;
 }else{
  document.getElementById('acierto').innerHTML=texto;
 }
}

function escribefallos(texto){
 if (document.layers){
  var capa = document.layers['fallo'].document;
  capa.open();
  capa.write(texto);
  capa.close();
 }else if (document.all){
  document.all.fallo.innerHTML=texto;
 }else{
  document.getElementById('fallo').innerHTML=texto;
 }
}

function escribenota(texto){
 if (document.layers){
  var capa = document.layers['nota'].document;
  capa.open();
  capa.write("Calificación:&mbsp;"+texto);
  capa.close();
 }else if (document.all){
  document.all.nota.innerHTML="Calificación:&nbsp;"+texto;
 }else{
  document.getElementById('nota').innerHTML=texto;
 }
}

function escriberonda(texto){
 if (document.layers){
  var capa = document.layers['ronda'].document;
  capa.open();
  capa.write("Rondas:&nbsp;<form name=fturno><input type=text name=turno class=texto value="+texto+" size=2 maxlength=2></form>");
  capa.close();
 }else if (document.all){
  document.all.ronda.innerHTML="Rondas:&nbsp;<form name=fturno><input type=text name=turno class=texto value="+texto+" size=2 maxlength=2></form>";
 }else{
  document.getElementById('ronda').innerHTML="Rondas:&nbsp;<form name=fturno><input type=text name=turno class=texto value="+texto+" size=2 maxlength=2></form>";
 }
}

function escribeaqui(){
 if (document.layers){
  var capa = document.layers['empiezaaqui'].document;
  capa.open();
  capa.write("");
  capa.close();
 }else if (document.all){
  document.all.empiezaaqui.innerHTML="";
 }else{
  document.getElementById('empiezaaqui').innerHTML="";
 }
}

function escribeaqui2(){
 if (document.layers){
  var capa = document.layers['empiezaaqui'].document;
  capa.open();
  capa.write("<a href=# onclick=empieza();>Pulsa aqu&iacute; para reiniciar el juego</a>");
  capa.close();
 }else if (document.all){
  document.all.empiezaaqui.innerHTML="<a href=# onclick=empieza();>Pulsa aqu&iacute; para reiniciar el juego</a>";
 }else{
  document.getElementById('empiezaaqui').innerHTML="<a href=# onclick=empieza();>Pulsa aqu&iacute; para reiniciar el juego</a>";
 }
}