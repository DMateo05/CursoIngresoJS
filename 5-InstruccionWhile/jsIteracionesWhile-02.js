/* 
Devita Mateo 
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
	/* let i; 

	i = 10; 

	while(i > 0)
	{ 
		alert(i); 
		i = i - 1; 
	} */ 
	
	// Inicio Ejercicio 2 BIS 
	/* while 2 bis: Ingresar 5 números, y determinar la cantidad de 
	números que son mayores que 10 y menores 20 (inclusive en ambos casos) */  

	// Declaro Variables 
	let numeroUno; 
	let contador; 
	let segundoContador; 
	let acumulador; 
	let promedio; 
	let i; // Es una variable 

	// Inicializo Variables
	i = 0;  
	acumulador = 0; 
	contador = 0; 
	segundoContador = 0; 

	// i se usa para posiciones. Se usa FOR para cantidad fija/finitas. 
	// for (variable para iterar ; condicion ; aumento/decremento), en este caso no se inicializa la variable i. 
	// el bucle finito for no existe en Phyton!!. 

	while(i < 5)
	{
		i = i + 1; 
		numeroUno = prompt("Ingrese un Numero"); 
		numeroUno = parseInt(numeroUno); 

		while(isNaN(numeroUno)) // Validacion 
		{
			numeroUno = prompt("Error,Ingrese un Numero"); 
			numeroUno = parseInt(numeroUno); 
		} 

		if(numeroUno > 10 && numeroUno < 20)
		{
			segundoContador = segundoContador + 1; 
		}else 
		{
			contador = contador + 1; 
			acumulador = acumulador + numeroUno;	
		}

		//contador = contador + 1; 
		//acumulador = acumulador + numeroUno;
	} // Fin While. Promedio dentro del while no se se hace. 
	mensaje = "Cantidad numeros entre 11 y 19: " + segundoContador 
	mensaje += " y la Cantidad restante: " + contador; 
	alert(mensaje); 
	// Fin ejercicio 2 BIS 
}