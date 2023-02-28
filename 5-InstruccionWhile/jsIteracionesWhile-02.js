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
	/*let numeroUno; 
	let contador; 
	let segundoContador; 
	let acumulador; 
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

		if(numeroUno > 9 && numeroUno < 21)
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
	mensaje = "Cantidad numeros entre 10 y 20: " + segundoContador 
	mensaje += " y la Cantidad restante: " + contador; 
	alert(mensaje); */
	// Fin ejercicio 2 BIS 

	// Inicio Ejercicio 2 BISBIS 
	// Ingresar numeros hasta que el usuario quiera. Determinar la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos). 
	// También el promedio de los números que cumplen la condición anterior.
	// Declaro Variables 
	let numeroUno; 
	let contador; 
	let segundoContador; 
	let acumulador; 
	let promedio; 
	let respuesta; 
	let mensajePromedio; 
	let i; // Es una variable 

	// Inicializo Variables
	acumulador = 0; 
	contador = 0; 
	segundoContador = 0; 
	numeroUno = 0; 
	respuesta = "si"; 
	
	while(respuesta == "si") 
	{
		numeroUno = prompt("Ingrese un Numero"); 
		numeroUno = parseInt(numeroUno); 

		while(isNaN(numeroUno)) // Validacion 
		{
			numeroUno = prompt("Error,Ingrese un Numero"); 
			numeroUno = parseInt(numeroUno); 
		} 

		if(numeroUno > 9 && numeroUno < 21)
		{
			segundoContador = segundoContador + 1; 
			acumulador = acumulador + numeroUno; 
		}else 
		{
			contador = contador + 1; 	
		}	
		//acumulador = acumulador + numeroUno; 
		respuesta = prompt("Desea continuar? si/no");
	}

	calculoPromedio = contador + segundoContador 
	promedio = acumulador/calculoPromedio; 
	mensaje = "Cantidad numeros entre 10 y 20: " + segundoContador 
	mensaje += " y la Cantidad restante: " + contador; 
	mensajePromedio = "El promedio es: " + promedio; 
	alert(mensaje); 
	alert(mensajePromedio);   
	// FIN EJERCICIO 2 BIS BIS 
}