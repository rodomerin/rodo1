"use strict";


const botonTurnoSiesta = document.getElementById("boton-siesta");
const botonTurnoMañana = document.getElementById("boton-mañana");
const botonTurnoTarde = document.getElementById("boton-tarde");
const botonTurnoNoche = document.getElementById("boton-noche");

botonTurnoMañana.addEventListener("click",()=>{


const boton = document.getElementById("boton");
boton.addEventListener("click",()=>{
   let inputDia = document.getElementById("input-dia");
   let datoDia = inputDia.value
   let inputMes = document.getElementById("input-mes");
   let datoMes = inputMes.value
   let inputAño = document.getElementById("input-año");
   let datoAño = inputAño.value

   
   const comienzoMañana = ()=>{
       
        let fechaInicioMañana = new Date(datoAño,(datoMes)-1,datoDia);
        let fechaInicioMañanaSeg = fechaInicioMañana.getTime();
        let fechaFinMañanaSeg = fechaInicioMañanaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinMañana = new Date(fechaFinMañanaSeg);
        let francoMañanaSeg = fechaFinMañanaSeg + (1000 * 60 * 60 * 24);
        let francoMañana = new Date(francoMañanaSeg);
        return [("Desde: " + depuradora(fechaInicioMañana) + "<br>" + "Hasta: " + depuradora(fechaFinMañana) + "<br>" + "franco: " + depuradora(francoMañana)),fechaInicioMañanaSeg,francoMañanaSeg,fechaInicioMañana]
        //return [fechaInicioMañana,fechaInicioMañanaSeg,fechaFinMañana,fechaFinMañanaSeg,francoMañana,francoMañanaSeg]
   }
        ///////////////////////////////////////////////////////////////////////////////////

   const comienzoSiesta =()=>{

         let fechaInicioSiestaSeg = comienzoMañana()[2] + (1000 * 60 * 60 * 24 )
        let fechaInicioSiesta = new Date(fechaInicioSiestaSeg);
        let fechaFinSiestaSeg = fechaInicioSiestaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinSiesta = new Date(fechaFinSiestaSeg);
        let francoSiestaSeg = fechaFinSiestaSeg+ (1000 * 60 * 60 * 24);
        let francoSiesta = new Date(francoSiestaSeg);
        return [(" Desde: " + depuradora(fechaInicioSiesta) + " <br> " + " Hasta: " + depuradora(fechaFinSiesta) + " <br> " + " Franco: " + depuradora(francoSiesta)),fechaInicioSiestaSeg,francoSiestaSeg]
    }
        ////////////////////////////////////////////////////////////////////////////////////

   const comienzoTarde = ()=>{

        let fechaInicioTardeSeg = comienzoSiesta()[2] + (1000 * 60 * 60 * 24 )
        let fechaInicioTarde = new Date(fechaInicioTardeSeg);
        let fechaFinTardeSeg = fechaInicioTardeSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinTarde = new Date(fechaFinTardeSeg);
        let francoTardeSeg = fechaFinTardeSeg+ (1000 * 60 * 60 * 24);
        let francoTarde = new Date(francoTardeSeg);
        return [("Desde: " + depuradora(fechaInicioTarde) + "<br>" + "Hasta: " + depuradora(fechaFinTarde) + "<br>" + `Franco: ` + depuradora(francoTarde)),fechaInicioTardeSeg,francoTardeSeg]
       
   }
        /////////////////////////////////////////////////////////////////////////////////////

   const comienzoNoche = ()=>{

        let fechaInicioNocheSeg = comienzoTarde()[2] + (1000 * 60 * 60 * 24 )
        let fechaInicioNoche = new Date(fechaInicioNocheSeg);
        let fechaFinNocheSeg = fechaInicioNocheSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinNoche = new Date(fechaFinNocheSeg);
        let francoNocheSeg = fechaFinNocheSeg+ (1000 * 60 * 60 * 24);
        let francoNoche = new Date(francoNocheSeg);
        return [("Desde: " + depuradora(fechaInicioNoche) + "<br>" + "Hasta: " + depuradora(fechaFinNoche) + "<br>" + "Franco " + depuradora(francoNoche)),fechaInicioNocheSeg,fechaFinNoche]
        
   }

  


   const turnoMañana = (a,b)=>{
        
        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoSiesta = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoTarde = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoNoche = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let seg4 = seg2 + (1000 * 60 * 60 * 48)
        let seg5 = seg2 + (1000 * 60 * 60 * 72)
        let franco1 = new Date(seg3)
        let franco2 = new Date(seg4)
        let franco3 = new Date(seg5)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco1) + "<br>" + "Franco: " + depuradora(franco2) + "<br>" + "Franco: " + depuradora(franco3))
   }

 const depuradora = (obj)=>{
     let dia = obj.getDay();
     let numeroDia = obj.getDate();
     let mes = obj.getMonth();
     let año = obj.getYear();
           switch(mes){
           case 0:
               mes = "Enero"
               break;
           case 1:
               mes = "Febrero"
               break;
           case 2:
               mes = "Marzo"
               break;
           case 3:
               mes = "Abril"
               break;
           case 4:
               mes = "Mayo"
               break;
           case 5:
               mes = "Junio"
               break;
           case 6:
               mes = "Julio"
               break;
           case 7:
               mes = "Agosto"
               break;
           case 8:
               mes = "Septiembre"
               break;
           case 9:
               mes = "Octubre"
               break;
           case 10:
               mes = "Noviembre"
               break;
           case 11:
               mes = "Diciembre"
               break;
         }   
         switch(dia){
         case 0:
              dia = "Domingo"
              break;
              case 1:
              dia = "Lunes"
              break;
              case 2:
              dia = "Martes"
              break;
              case 3:
              dia = "Miercoles"
              break;
              case 4:
              dia = "Jueves"
              break;
              case 5:
              dia = "Viernes"
              break;
              case 6:
              dia = "Sabado"
              break;
         }

     return (dia + " " + numeroDia + " de " + mes + " del " + (año + 1900));
 }

 document.querySelector(".turnoMañana1").innerHTML = comienzoMañana()[0]
 document.querySelector(".turnoSiesta1").innerHTML = comienzoSiesta()[0]
 document.querySelector(".turnoTarde1").innerHTML = comienzoTarde()[0]
 document.querySelector(".turnoNoche1").innerHTML = comienzoNoche()[0]

  for(let i = 0; i < 12; i++){
     document.querySelector(`.turnoMañana${i + 1}`).innerHTML = turnoMañana(comienzoMañana()[1],(30 * i))
     document.querySelector(`.turnoSiesta${i + 1}`).innerHTML = turnoSiesta(comienzoSiesta()[1],(30 * i))
     document.querySelector(`.turnoTarde${i + 1}`).innerHTML = turnoTarde(comienzoTarde()[1],(30 * i))
     document.querySelector(`.turnoNoche${i + 1}`).innerHTML = turnoNoche(comienzoNoche()[1],(30 * i))
   }
})
})


botonTurnoSiesta.addEventListener("click",()=>{
    
    document.body.innerHTML = 
        `<div class="botones-turnos">
        <button id="boton-mañana" class="botones">Turno Mañana</button>
        <button id="boton-siesta" class="botones">Turno Siesta</button>
        <button id="boton-tarde" class="botones">Turno Tarde</button>
        <button id="boton-noche" class="botones">Turno Noche</button>
        </div>
        <h1 class="h1">Introduce la fecha de inicio del turno siesta</h1>
           <div class="entrada-datos">
               <input id="input-dia" type="number" placeholder="DIA" min="1" max="31">
      
               <input id="input-mes" type="number" placeholder="MES" min="1" max="12">
      
               <input id="input-año" type="number" placeholder="AÑO">
               <button id="boton">OBTENER TURNOS</button>
            </div>
            
            <div class="contenedor">
               <div class="mes">
                   <h3 class="mes2">PRIMER MES</h3>

                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta1"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde1"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche1"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana1"></p>
                   
                  
                </div>
                <div class="mes">
                    <h3 class="mes2">SEGUNDO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta2"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde2"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche2"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana2"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">TERCER MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta3"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde3"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche3"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana3"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">CUARTO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta4"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde4"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche4"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana4"></p>
                   
                </div>

                <div class="mes">
                    <h3 class="mes2">QUINTO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta5"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde5"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche5"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana5"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">SEXTO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta6"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde6"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche6"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana6"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">SEPTIMO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta7"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde7"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche7"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana7"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">OCTAVO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta8"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde8"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche8"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana8"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta8"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">NOVENO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta9"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde9"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche9"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana9"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta9"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">DECIMO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta10"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde10"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche10"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana10"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta10"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">ONCEAVO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta11"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde11"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche11"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana11"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta11"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">DOCEAVO MES</h3>
                    <h4>Turno Siesta</h4>
                      <p class="turnoSiesta12"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde12"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche12"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana12"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta12"></p>
                </div>

             </div>`
              
 const boton = document.getElementById("boton");
   boton.addEventListener("click",()=>{
   let inputDia = document.getElementById("input-dia");
   let datoDia = inputDia.value
   let inputMes = document.getElementById("input-mes");
   let datoMes = inputMes.value
   let inputAño = document.getElementById("input-año");
   let datoAño = inputAño.value

   
   const comienzoMañana = ()=>{
       
        let fechaInicioMañanaSeg = comienzoNoche()[3] + (1000 * 60 * 60 * 24 * 4);
        let fechaInicioMañana = new Date(fechaInicioMañanaSeg);
        let fechaFinMañanaSeg = fechaInicioMañanaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinMañana = new Date(fechaFinMañanaSeg);
        let francoMañanaSeg = fechaFinMañanaSeg + (1000 * 60 * 60 * 24);
        let francoMañana = new Date(francoMañanaSeg);
        return [("Desde: " + depuradora(fechaInicioMañana) + "<br>" + "Hasta: " + depuradora(fechaFinMañana) + "<br>" + "franco: " + depuradora(francoMañana)),fechaInicioMañanaSeg,francoMañanaSeg,fechaInicioMañana]
        //return [fechaInicioMañana,fechaInicioMañanaSeg,fechaFinMañana,fechaFinMañanaSeg,francoMañana,francoMañanaSeg]
   }
        ///////////////////////////////////////////////////////////////////////////////////

   const comienzoSiesta =()=>{

         let fechaInicioSiesta = new Date(datoAño,(datoMes)-1,datoDia)
        let fechaInicioSiestaSeg = fechaInicioSiesta.getTime();
        let fechaFinSiestaSeg = fechaInicioSiestaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinSiesta = new Date(fechaFinSiestaSeg);
        let francoSiestaSeg = fechaFinSiestaSeg+ (1000 * 60 * 60 * 24);
        let francoSiesta = new Date(francoSiestaSeg);
        return [(" Desde: " + depuradora(fechaInicioSiesta) + " <br> " + " Hasta: " + depuradora(fechaFinSiesta) + " <br> " + " Franco: " + depuradora(francoSiesta)),fechaInicioSiestaSeg,francoSiestaSeg]
    }
        ////////////////////////////////////////////////////////////////////////////////////

   const comienzoTarde = ()=>{

        let fechaInicioTardeSeg = comienzoSiesta()[2] + (1000 * 60 * 60 * 24)
        let fechaInicioTarde = new Date(fechaInicioTardeSeg);
        let fechaFinTardeSeg = fechaInicioTardeSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinTarde = new Date(fechaFinTardeSeg);
        let francoTardeSeg = fechaFinTardeSeg+ (1000 * 60 * 60 * 24);
        let francoTarde = new Date(francoTardeSeg);
        return [("Desde: " + depuradora(fechaInicioTarde) + "<br>" + "Hasta: " + depuradora(fechaFinTarde) + "<br>" + `Franco: ` + depuradora(francoTarde)),fechaInicioTardeSeg,francoTardeSeg]
       
   }
        /////////////////////////////////////////////////////////////////////////////////////

   const comienzoNoche = ()=>{

        let fechaInicioNocheSeg = comienzoTarde()[2] + (1000 * 60 * 60 * 24 )
        let fechaInicioNoche = new Date(fechaInicioNocheSeg);
        let fechaFinNocheSeg = fechaInicioNocheSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinNoche = new Date(fechaFinNocheSeg);
        let francoNocheSeg = fechaFinNocheSeg+ (1000 * 60 * 60 * 24);
        let francoNoche = new Date(francoNocheSeg);
        return [("Desde: " + depuradora(fechaInicioNoche) + "<br>" + "Hasta: " + depuradora(fechaFinNoche) + "<br>" + "Franco " + depuradora(francoNoche)),fechaInicioNocheSeg,fechaFinNoche,fechaFinNocheSeg]
        
   }

  


   const turnoMañana = (a,b)=>{
        
        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoSiesta = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoTarde = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoNoche = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let seg4 = seg2 + (1000 * 60 * 60 * 48)
        let seg5 = seg2 + (1000 * 60 * 60 * 72)
        let franco1 = new Date(seg3)
        let franco2 = new Date(seg4)
        let franco3 = new Date(seg5)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco1) + "<br>" + "Franco: " + depuradora(franco2) + "<br>" + "Franco: " + depuradora(franco3))
   }

 const depuradora = (obj)=>{
     let dia = obj.getDay();
     let numeroDia = obj.getDate();
     let mes = obj.getMonth();
     let año = obj.getYear();
           switch(mes){
           case 0:
               mes = "Enero"
               break;
           case 1:
               mes = "Febrero"
               break;
           case 2:
               mes = "Marzo"
               break;
           case 3:
               mes = "Abril"
               break;
           case 4:
               mes = "Mayo"
               break;
           case 5:
               mes = "Junio"
               break;
           case 6:
               mes = "Julio"
               break;
           case 7:
               mes = "Agosto"
               break;
           case 8:
               mes = "Septiembre"
               break;
           case 9:
               mes = "Octubre"
               break;
           case 10:
               mes = "Noviembre"
               break;
           case 11:
               mes = "Diciembre"
               break;
         }   
         switch(dia){
         case 0:
              dia = "Domingo"
              break;
              case 1:
              dia = "Lunes"
              break;
              case 2:
              dia = "Martes"
              break;
              case 3:
              dia = "Miercoles"
              break;
              case 4:
              dia = "Jueves"
              break;
              case 5:
              dia = "Viernes"
              break;
              case 6:
              dia = "Sabado"
              break;
         }

     return (dia + " " + numeroDia + " de " + mes + " del " + (año + 1900));
 }

 document.querySelector(".turnoMañana1").innerHTML = comienzoMañana()[0]
 document.querySelector(".turnoSiesta1").innerHTML = comienzoSiesta()[0]
 document.querySelector(".turnoTarde1").innerHTML = comienzoTarde()[0]
 document.querySelector(".turnoNoche1").innerHTML = comienzoNoche()[0]

  for(let i = 0; i < 12; i++){
     document.querySelector(`.turnoMañana${i + 1}`).innerHTML = turnoMañana(comienzoMañana()[1],(30 * i))
     document.querySelector(`.turnoSiesta${i + 1}`).innerHTML = turnoSiesta(comienzoSiesta()[1],(30 * i))
     document.querySelector(`.turnoTarde${i + 1}`).innerHTML = turnoTarde(comienzoTarde()[1],(30 * i))
     document.querySelector(`.turnoNoche${i + 1}`).innerHTML = turnoNoche(comienzoNoche()[1],(30 * i))
   }
})

})




 botonTurnoTarde.addEventListener("click",()=>{
    
    document.body.innerHTML = 
	   `<div class="botones-turnos">
        <button id="boton-mañana" class="botones">Turno Mañana</button>
        <button id="boton-siesta" class="botones">Turno Siesta</button>
        <button id="boton-tarde" class="botones">Turno Tarde</button>
        <button id="boton-noche" class="botones">Turno Noche</button>
        </div>
        <h1 class="h1">Introduce la fecha de inicio del turno tarde</h1>
           <div class="entrada-datos">
               <input id="input-dia" type="number" placeholder="DIA" min="1" max="31">
      
               <input id="input-mes" type="number" placeholder="MES" min="1" max="12">
      
               <input id="input-año" type="number" placeholder="AÑO">
               <button id="boton">OBTENER TURNOS</button>
            </div>
            
            <div class="contenedor">
               <div class="mes">
               	   <h3 class="mes2">PRIMER MES</h3>
               	   
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde1"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche1"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana1"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta1"></p>
                  
                </div>
                <div class="mes">
                	<h3 class="mes2">SEGUNDO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde2"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche2"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana2"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta2"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">TERCER MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde3"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche3"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana3"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta3"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">CUARTO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde4"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche4"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana4"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta4"></p>
                </div>

                <div class="mes">
                	<h3 class="mes2">QUINTO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde5"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche5"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana5"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta5"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">SEXTO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde6"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche6"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana6"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta6"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">SEPTIMO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde7"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche7"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana7"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta7"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">OCTAVO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde8"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche8"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana8"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta8"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">NOVENO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde9"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche9"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana9"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta9"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">DECIMO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde10"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche10"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana10"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta10"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">ONCEAVO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde11"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche11"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana11"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta11"></p>
                </div>
                <div class="mes">
                	<h3 class="mes2">DOCEAVO MES</h3>
               	   <h4>Turno Tarde</h4>
                      <p class="turnoTarde12"></p>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche12"></p>
                   <h4>Turno Mañana</h4>
                      <p class="turnoMañana12"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta12"></p>
                </div>

             </div>`
              
 const boton = document.getElementById("boton");
   boton.addEventListener("click",()=>{
   let inputDia = document.getElementById("input-dia");
   let datoDia = inputDia.value
   let inputMes = document.getElementById("input-mes");
   let datoMes = inputMes.value
   let inputAño = document.getElementById("input-año");
   let datoAño = inputAño.value

   
   const comienzoMañana = ()=>{
       
        let fechaInicioMañanaSeg = comienzoNoche()[3] + (1000 * 60 * 60 * 24 * 4);
        let fechaInicioMañana = new Date(fechaInicioMañanaSeg);
        let fechaFinMañanaSeg = fechaInicioMañanaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinMañana = new Date(fechaFinMañanaSeg);
        let francoMañanaSeg = fechaFinMañanaSeg + (1000 * 60 * 60 * 24);
        let francoMañana = new Date(francoMañanaSeg);
        return [("Desde: " + depuradora(fechaInicioMañana) + "<br>" + "Hasta: " + depuradora(fechaFinMañana) + "<br>" + "franco: " + depuradora(francoMañana)),fechaInicioMañanaSeg,francoMañanaSeg,fechaInicioMañana]
        //return [fechaInicioMañana,fechaInicioMañanaSeg,fechaFinMañana,fechaFinMañanaSeg,francoMañana,francoMañanaSeg]
   }
        ///////////////////////////////////////////////////////////////////////////////////

   const comienzoSiesta =()=>{

         let fechaInicioSiestaSeg = comienzoMañana()[2] + (1000 * 60 * 60 * 24 )
        let fechaInicioSiesta = new Date(fechaInicioSiestaSeg);
        let fechaFinSiestaSeg = fechaInicioSiestaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinSiesta = new Date(fechaFinSiestaSeg);
        let francoSiestaSeg = fechaFinSiestaSeg+ (1000 * 60 * 60 * 24);
        let francoSiesta = new Date(francoSiestaSeg);
        return [(" Desde: " + depuradora(fechaInicioSiesta) + " <br> " + " Hasta: " + depuradora(fechaFinSiesta) + " <br> " + " Franco: " + depuradora(francoSiesta)),fechaInicioSiestaSeg,francoSiestaSeg]
    }
        ////////////////////////////////////////////////////////////////////////////////////

   const comienzoTarde = ()=>{

        let fechaInicioTarde = new Date(datoAño,(datoMes)-1,datoDia)//comienzoSiesta()[2] + (1000 * 60 * 60 * 24 )
        let fechaInicioTardeSeg = fechaInicioTarde.getTime();
        let fechaFinTardeSeg = fechaInicioTardeSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinTarde = new Date(fechaFinTardeSeg);
        let francoTardeSeg = fechaFinTardeSeg+ (1000 * 60 * 60 * 24);
        let francoTarde = new Date(francoTardeSeg);
        return [("Desde: " + depuradora(fechaInicioTarde) + "<br>" + "Hasta: " + depuradora(fechaFinTarde) + "<br>" + `Franco: ` + depuradora(francoTarde)),fechaInicioTardeSeg,francoTardeSeg]
       
   }
        /////////////////////////////////////////////////////////////////////////////////////

   const comienzoNoche = ()=>{

        let fechaInicioNocheSeg = comienzoTarde()[2] + (1000 * 60 * 60 * 24 )
        let fechaInicioNoche = new Date(fechaInicioNocheSeg);
        let fechaFinNocheSeg = fechaInicioNocheSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinNoche = new Date(fechaFinNocheSeg);
        let francoNocheSeg = fechaFinNocheSeg+ (1000 * 60 * 60 * 24);
        let francoNoche = new Date(francoNocheSeg);
        return [("Desde: " + depuradora(fechaInicioNoche) + "<br>" + "Hasta: " + depuradora(fechaFinNoche) + "<br>" + "Franco " + depuradora(francoNoche)),fechaInicioNocheSeg,fechaFinNoche,fechaFinNocheSeg]
        
   }

  


   const turnoMañana = (a,b)=>{
        
        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoSiesta = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoTarde = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoNoche = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let seg4 = seg2 + (1000 * 60 * 60 * 48)
        let seg5 = seg2 + (1000 * 60 * 60 * 72)
        let franco1 = new Date(seg3)
        let franco2 = new Date(seg4)
        let franco3 = new Date(seg5)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco1) + "<br>" + "Franco: " + depuradora(franco2) + "<br>" + "Franco: " + depuradora(franco3))
   }

 const depuradora = (obj)=>{
     let dia = obj.getDay();
     let numeroDia = obj.getDate();
     let mes = obj.getMonth();
     let año = obj.getYear();
           switch(mes){
           case 0:
               mes = "Enero"
               break;
           case 1:
               mes = "Febrero"
               break;
           case 2:
               mes = "Marzo"
               break;
           case 3:
               mes = "Abril"
               break;
           case 4:
               mes = "Mayo"
               break;
           case 5:
               mes = "Junio"
               break;
           case 6:
               mes = "Julio"
               break;
           case 7:
               mes = "Agosto"
               break;
           case 8:
               mes = "Septiembre"
               break;
           case 9:
               mes = "Octubre"
               break;
           case 10:
               mes = "Noviembre"
               break;
           case 11:
               mes = "Diciembre"
               break;
         }   
         switch(dia){
         case 0:
              dia = "Domingo"
              break;
              case 1:
              dia = "Lunes"
              break;
              case 2:
              dia = "Martes"
              break;
              case 3:
              dia = "Miercoles"
              break;
              case 4:
              dia = "Jueves"
              break;
              case 5:
              dia = "Viernes"
              break;
              case 6:
              dia = "Sabado"
              break;
         }

     return (dia + " " + numeroDia + " de " + mes + " del " + (año + 1900));
 }

 document.querySelector(".turnoMañana1").innerHTML = comienzoMañana()[0]
 document.querySelector(".turnoSiesta1").innerHTML = comienzoSiesta()[0]
 document.querySelector(".turnoTarde1").innerHTML = comienzoTarde()[0]
 document.querySelector(".turnoNoche1").innerHTML = comienzoNoche()[0]

  for(let i = 0; i < 12; i++){
     document.querySelector(`.turnoMañana${i + 1}`).innerHTML = turnoMañana(comienzoMañana()[1],(30 * i))
     document.querySelector(`.turnoSiesta${i + 1}`).innerHTML = turnoSiesta(comienzoSiesta()[1],(30 * i))
     document.querySelector(`.turnoTarde${i + 1}`).innerHTML = turnoTarde(comienzoTarde()[1],(30 * i))
     document.querySelector(`.turnoNoche${i + 1}`).innerHTML = turnoNoche(comienzoNoche()[1],(30 * i))
   }
})
})


botonTurnoNoche.addEventListener("click",()=>{
   document.body.innerHTML = 
        `<div class="botones-turnos">
        <button id="boton-mañana" class="botones">Turno Mañana</button>
        <button id="boton-siesta" class="botones">Turno Siesta</button>
        <button id="boton-tarde" class="botones">Turno Tarde</button>
        <button id="boton-noche" class="botones">Turno Noche</button>
        </div>
        <h1 class="h1">Introduce la fecha de inicio del turno noche</h1>
           <div class="entrada-datos">
               <input id="input-dia" type="number" placeholder="DIA" min="1" max="31">
      
               <input id="input-mes" type="number" placeholder="MES" min="1" max="12">
      
               <input id="input-año" type="number" placeholder="AÑO">
               <button id="boton">OBTENER TURNOS</button>
            </div>
            
            <div class="contenedor">
               <div class="mes">
                   <h3 class="mes2">PRIMER MES</h3>
                   <h4>Turno Noche</h4>
                      <p class="turnoNoche1"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana1"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta1"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde1"></p>
               </div>
                <div class="mes">
                    <h3 class="mes2">SEGUNDO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche2"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana2"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta2"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde2"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">TERCER MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche3"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana3"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta3"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde3"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">CUARTO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche4"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana4"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta4"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde4"></p>
                   
                </div>

                <div class="mes">
                    <h3 class="mes2">QUINTO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche5"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana5"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta5"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde5"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">SEXTO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche6"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana6"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta6"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde6"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">SEPTIMO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche7"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana7"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta7"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde7"></p>
                   
                </div>
                <div class="mes">
                    <h3 class="mes2">OCTAVO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche8"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana8"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta8"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde8"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">NOVENO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche9"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana9"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta9"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde9"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">DECIMO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche10"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana10"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta10"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde10"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">ONCEAVO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche11"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana11"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta11"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde11"></p>
                </div>
                <div class="mes">
                    <h3 class="mes2">DOCEAVO MES</h3>
                    <h4>Turno Noche</h4>
                      <p class="turnoNoche12"></p>
                   <h4>Turno Mañana</h4>
                       <p class="turnoMañana12"></p>
                   <h4>Turno Siesta</h4>
                      <p class="turnoSiesta12"></p>
                   <h4>Turno Tarde</h4>
                      <p class="turnoTarde12"></p>
                </div>

             </div>`
              
 const boton = document.getElementById("boton");
   boton.addEventListener("click",()=>{
   let inputDia = document.getElementById("input-dia");
   let datoDia = inputDia.value
   let inputMes = document.getElementById("input-mes");
   let datoMes = inputMes.value
   let inputAño = document.getElementById("input-año");
   let datoAño = inputAño.value

   
   const comienzoMañana = ()=>{
       
        let fechaInicioMañanaSeg = comienzoNoche()[3] + (1000 * 60 * 60 * 24 * 4);
        let fechaInicioMañana = new Date(fechaInicioMañanaSeg);
        let fechaFinMañanaSeg = fechaInicioMañanaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinMañana = new Date(fechaFinMañanaSeg);
        let francoMañanaSeg = fechaFinMañanaSeg + (1000 * 60 * 60 * 24);
        let francoMañana = new Date(francoMañanaSeg);
        return [("Desde: " + depuradora(fechaInicioMañana) + "<br>" + "Hasta: " + depuradora(fechaFinMañana) + "<br>" + "franco: " + depuradora(francoMañana)),fechaInicioMañanaSeg,francoMañanaSeg,fechaInicioMañana]
        //return [fechaInicioMañana,fechaInicioMañanaSeg,fechaFinMañana,fechaFinMañanaSeg,francoMañana,francoMañanaSeg]
   }
        ///////////////////////////////////////////////////////////////////////////////////

   const comienzoSiesta =()=>{

         let fechaInicioSiestaSeg = comienzoMañana()[2] + (1000 * 60 * 60 * 24)
        let fechaInicioSiesta = new Date(fechaInicioSiestaSeg);
        let fechaFinSiestaSeg = fechaInicioSiestaSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinSiesta = new Date(fechaFinSiestaSeg);
        let francoSiestaSeg = fechaFinSiestaSeg+ (1000 * 60 * 60 * 24);
        let francoSiesta = new Date(francoSiestaSeg);
        return [(" Desde: " + depuradora(fechaInicioSiesta) + " <br> " + " Hasta: " + depuradora(fechaFinSiesta) + " <br> " + " Franco: " + depuradora(francoSiesta)),fechaInicioSiestaSeg,francoSiestaSeg]
    }
        ////////////////////////////////////////////////////////////////////////////////////

   const comienzoTarde = ()=>{

        let fechaInicioTardeSeg = comienzoSiesta()[2] + (1000 * 60 * 60 * 24)
        let fechaInicioTarde = new Date(fechaInicioTardeSeg);
        let fechaFinTardeSeg = fechaInicioTardeSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinTarde = new Date(fechaFinTardeSeg);
        let francoTardeSeg = fechaFinTardeSeg+ (1000 * 60 * 60 * 24);
        let francoTarde = new Date(francoTardeSeg);
        return [("Desde: " + depuradora(fechaInicioTarde) + "<br>" + "Hasta: " + depuradora(fechaFinTarde) + "<br>" + `Franco: ` + depuradora(francoTarde)),fechaInicioTardeSeg,francoTardeSeg]
       
   }
        /////////////////////////////////////////////////////////////////////////////////////

   const comienzoNoche = ()=>{

        let fechaInicioNoche = new Date(datoAño,(datoMes)-1,datoDia)
        let fechaInicioNocheSeg = fechaInicioNoche.getTime()
        let fechaFinNocheSeg = fechaInicioNocheSeg + (1000 * 60 * 60 * 24 * 5);
        let fechaFinNoche = new Date(fechaFinNocheSeg);
        let francoNocheSeg = fechaFinNocheSeg+ (1000 * 60 * 60 * 24);
        let francoNoche = new Date(francoNocheSeg);
        return [("Desde: " + depuradora(fechaInicioNoche) + "<br>" + "Hasta: " + depuradora(fechaFinNoche) + "<br>" + "Franco " + depuradora(francoNoche)),fechaInicioNocheSeg,fechaFinNoche,fechaFinNocheSeg]
        
   }

  


   const turnoMañana = (a,b)=>{
        
        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoSiesta = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoTarde = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let franco = new Date(seg3)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco))
   }

   const turnoNoche = (a,b)=>{

        let seg1 = a + (1000 * 60 * 60 * 24 * b )
        let fechaInicio = new Date(seg1)
        let seg2 = seg1 + (1000 * 60 * 60 * 24 * 5)
        let fechaFin = new Date(seg2)
        let seg3 = seg2 + (1000 * 60 * 60 * 24)
        let seg4 = seg2 + (1000 * 60 * 60 * 48)
        let seg5 = seg2 + (1000 * 60 * 60 * 72)
        let franco1 = new Date(seg3)
        let franco2 = new Date(seg4)
        let franco3 = new Date(seg5)
        return ("Desde: " + depuradora(fechaInicio) + "<br>" + "Hasta: " + depuradora(fechaFin) + "<br>" + "Franco: " + depuradora(franco1) + "<br>" + "Franco: " + depuradora(franco2) + "<br>" + "Franco: " + depuradora(franco3))
   }

 const depuradora = (obj)=>{
     let dia = obj.getDay();
     let numeroDia = obj.getDate();
     let mes = obj.getMonth();
     let año = obj.getYear();
           switch(mes){
           case 0:
               mes = "Enero"
               break;
           case 1:
               mes = "Febrero"
               break;
           case 2:
               mes = "Marzo"
               break;
           case 3:
               mes = "Abril"
               break;
           case 4:
               mes = "Mayo"
               break;
           case 5:
               mes = "Junio"
               break;
           case 6:
               mes = "Julio"
               break;
           case 7:
               mes = "Agosto"
               break;
           case 8:
               mes = "Septiembre"
               break;
           case 9:
               mes = "Octubre"
               break;
           case 10:
               mes = "Noviembre"
               break;
           case 11:
               mes = "Diciembre"
               break;
         }   
         switch(dia){
         case 0:
              dia = "Domingo"
              break;
              case 1:
              dia = "Lunes"
              break;
              case 2:
              dia = "Martes"
              break;
              case 3:
              dia = "Miercoles"
              break;
              case 4:
              dia = "Jueves"
              break;
              case 5:
              dia = "Viernes"
              break;
              case 6:
              dia = "Sabado"
              break;
         }

     return (dia + " " + numeroDia + " de " + mes + " del " + (año + 1900));
 }

 document.querySelector(".turnoMañana1").innerHTML = comienzoMañana()[0]
 document.querySelector(".turnoSiesta1").innerHTML = comienzoSiesta()[0]
 document.querySelector(".turnoTarde1").innerHTML = comienzoTarde()[0]
 document.querySelector(".turnoNoche1").innerHTML = comienzoNoche()[0]

  for(let i = 0; i < 12; i++){
     document.querySelector(`.turnoMañana${i + 1}`).innerHTML = turnoMañana(comienzoMañana()[1],(30 * i))
     document.querySelector(`.turnoSiesta${i + 1}`).innerHTML = turnoSiesta(comienzoSiesta()[1],(30 * i))
     document.querySelector(`.turnoTarde${i + 1}`).innerHTML = turnoTarde(comienzoTarde()[1],(30 * i))
     document.querySelector(`.turnoNoche${i + 1}`).innerHTML = turnoNoche(comienzoNoche()[1],(30 * i))
   }
})
})
 

