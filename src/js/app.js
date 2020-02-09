


// ===== Importamos el archivo main de estilos ===== //
import '../sass/main.scss';

// ===== Importamos los archivos estaticos ===== //
import '../static/forest.jpg';
import '../static/technology.jpg';
import '../static/tulum.jpg';
import '../static/npm.jpg';





/**=========================================
 *            librerias
 ==========================================*/
import 'popper.js';
import 'bootstrap';


/**=========================================
 *              Plugins
 ==========================================*/
import './plugins/jqueryCookie';
import './plugins/cookieCuttr';
import 'animate.css';
import  'jquery-aniview';



 /**=========================================
 *             Variables Globales
 ==========================================*/



 

 /**=========================================
 *              Funciones
 ==========================================*/
import alertaCookies from './functions/alertaCookies';



 



 /**=========================================
 *          Eventos de carga o estado
 ==========================================*/



/* ==== Cuando todos los elementos del dom
 incluyento archivos han cargado ========*/
 window.onload = function() {
   


};


/* ==== Cuando el documento se ha cargado (html)
es decir cuando esta listo para usarse ========*/
document.addEventListener("DOMContentLoaded", function() {

     
  // mandamos a llamar a la funcion que se encarga de las alertas
  alertaCookies();
  
  // inicializamos las animaciones de los elementos que contienen la clase anyview
  $('.aniview').AniView({
        animateThreshold: 100, // retraso de la secuencia de animacion hasta que se ve el elemento
        scrollPollInterval: 20 // tiempo en milisegundos para que se lance la animacion en cuanto aparece el elemento
  });


});