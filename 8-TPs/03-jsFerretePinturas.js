/*    
Devita Mateo
3.Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let tempF; 
    let tempC; 
    let mensaje; 
    const VALOR = 1.8; 

    tempF=parseFloat(document.getElementById("txtIdTemperatura").value); 

    tempC=(tempF-32)/ VALOR; 
    mensaje=(tempF + "° Fahrenheit son " + tempC + "° grados centigrados."); 

    alert(mensaje);
}
function CentigradosFahrenheit () 
{ 
    let tempC; 
    let tempF; 
    const VALOR = 1.8; 
    let mensaje; 

    tempC=parseFloat(document.getElementById("txtIdTemperatura").value); 
    tempF=(tempC*VALOR)+32; 
    mensaje=(tempC + "° Centigrados son " + tempF + "° Fahrenheit"); 

    alert(mensaje); 
}
