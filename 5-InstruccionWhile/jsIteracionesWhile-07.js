/* 
Devita Mateo
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
  	// Declaro Variables 
	let numeroUno; 
	let contador; 
	let acumulador; 
	let promedio; 
    let respuesta; 
	let i; // Es una variable

	// Inicializo Variables
	i = 0;  
	acumulador = 0; 
	contador = 0; 
    respuesta = "si";

	// i se usa para posiciones. Se usa FOR para cantidad fija/finitas. 
	// for (variable para iterar ; condicion ; aumento/decremento), en este caso no se inicializa la variable i. 
	// el bucle finito for no existe en Phyton!!. 

	while(respuesta == "si")
	{
		i = i + 1; 
		numeroUno = prompt("Ingrese un Numero"); 
		numeroUno = parseInt(numeroUno); 

		while(isNaN(numeroUno)) // Validacion 
		{
			numeroUno = prompt("Error,Ingrese un Numero"); 
			numeroUno = parseInt(numeroUno); 
		} 

		contador = contador + 1; 
		acumulador = acumulador + numeroUno; 

        respuesta = prompt("¿Desea Continuar? si/no"); 
	} // Fin While. Promedio dentro del while no se se hace. 
	
	// Calculo Promedio
	promedio = acumulador/contador; 

	document.getElementById("txtIdSuma").value = acumulador; 
	document.getElementById("txtIdPromedio").value = promedio;  
}