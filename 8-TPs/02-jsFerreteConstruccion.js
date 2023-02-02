/*    
Devita Mateo 
2.Para el departamento de Construcción:
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let ancho; 
    let largo; 
    let perimetro; 
    let alambre; 

    ancho=parseInt(document.getElementById("txtIdAncho").value); 
    largo=parseInt(document.getElementById("txtIdLargo").value);  

    perimetro=(largo*2+ancho*2); 
    alambre="La cantidad de alambre que se necesita: " + (perimetro*3); 

    alert(alambre); 
}
function Circulo () 
{
	let perimetro; 
    let radio; 
    let alambre; 
    const PI = 3.14; 

    radio=parseInt(document.getElementById("txtIdRadio").value); 
    perimetro=(2*PI)*radio; 
    alambre=(perimetro*3); 
    
    alert("Se necesita " + alambre + "m de alambre"); 
}
function Materiales () 
{
	let ancho; 
    let largo; 
    let area; 
    let cemento;
    let cal; 
    const CEMENTO = 2; 
    const CAL = 3; 
    let mensaje; 

    ancho=parseInt(document.getElementById("txtIdAncho").value); 
    largo=parseInt(document.getElementById("txtIdLargo").value); 

    area=(largo*ancho); 
    cemento=(area*CEMENTO); 
    cal=(area*CAL); 

    mensaje="Se necesitan " + cemento + " bolsas de Cemento y " + cal + " bolsas de Cal.";

    alert(mensaje);
}