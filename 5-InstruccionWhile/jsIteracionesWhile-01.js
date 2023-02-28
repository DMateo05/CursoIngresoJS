/* 
Devita Mateo
al presionar el botón mostrar 20 repeticiones 
con números ASCENDENTE, desde el 1 al 10 y 
A ) Contar los numeros pares 
B ) Contar los numeros impares 
C ) El total de la suma de los numeros impares 
D ) El total de la suma de los numeros pares 
E ) El mayor de los numeros pares 
F ) El mayor de los numeros impares 
G ) El mayor de los numeros  */
function mostrar()
{
	/* // While genera la linea de codigo muchas veces / Bucle Infinito 
	// Que es un Bucle? Es una Iteración 
	// Iteracion = Que se puede generar esa linea de codigo muchas veces 
	// for = Bucle de Iteracion / Cantidad finita de veces 
	// do-while = genera automaticamente la primera vez 
	
	// Declaro Variable
	let i; 
	let contadorPares; 
	let contadorImpares; 
	let acumuladorImpares; 
	let acumuladorPares; 
	let mayorNumeroPar; 
	let mayorNumeroImpar; 
	let mayorNumero; 

	// Inicializo la variable
	i = 0; 
	contadorImpares = 0; 
	contadorPares = 0; 
	acumuladorImpares = 0; 
	acumuladorPares = 0; 
	mayorNumeroImpar = 0; 
	mayorNumeroPar = 0;  
	mayorNumero = 0; 
	
	//Inicio la Iteracion 
	while(i < 10) 
	{ 
		if(i%2 == 0) // Es un par. 
		{ 
			//    0              0 
			contadorPares = contadorPares + 1;  
			// Suma numero pares
			acumuladorPares = acumuladorPares + i; 

			if(i > mayorNumeroPar)
			{
				mayorNumeroPar = i; 
			}
		}else
		{
			contadorImpares = contadorImpares + 1; 
			// Suma numeros impares
			acumuladorImpares = acumuladorImpares + i; 

			if(i > mayorNumeroImpar)
			{
				mayorNumeroImpar = i; 
			}
		}
		// Modificar la condicion de uno en uno   
		i = i + 1;  
		
		// Mayor Numero 
		if(i > mayorNumero)
		{
			mayorNumero = i; 
		}
		// Mostrar Contador 
		console.log(i);  
	} // Fin While  

	alert("La cantidad de numeros impares es: " + contadorImpares); 
	alert("La cantidad de numeros pares es: " + contadorPares); 
	alert("El total de los numeros impares es: " + acumuladorImpares); 
	alert("El total de los numeros pares es: " + acumuladorPares); 
	alert("El mayor numero impar es: " + mayorNumeroImpar); 
	alert("El mayor de los numeros pares es:" + mayorNumeroPar); 
	alert("El numero mayor es: " + mayorNumero); */ 

	// WHILE 1 BIS EJERCICIO 
	// edad y nombre , informar el nombre de la persona mas vieja y la mas joven
	let edad; 
	let nombre; 
	let respuesta; 
	let bandera; 
	let edadMaximo; 
	let edadMinimo; 
	let nombreMaximo; 
	let nombreMenor; 
	let mensaje; 

	edad = 0;
	respuesta = "si"; 
	bandera = true; 

	while(respuesta == "si")
	{  
		nombre = prompt("Ingrese su Nombre"); 
		while(!isNaN(nombre))
		{
			nombre = prompt("Error, ingrese su nombre"); 
		}
		edad = parseInt(prompt("Ingrese su Edad")); 
		while(isNaN(edad) || edad < 0 || edad > 123)
		{
			edad = parseInt(prompt("Error, Ingrese su Edad")); 
		}
		
		if(bandera == true)
		{
			edadMaximo = edad; 
			edadMinimo = edad; 
			nombreMaximo = nombre 
			nombreMenor = nombre; 
			bandera = false; 
		}else if(edadMaximo < edad)
		{ 
			nombreMaximo = nombre;
			edadMaximo = edad; 
		}else if(edadMinimo > edadMaximo)
		{
			nombreMenor = nombre;
			edadMinimo = edad; 
		}
		
		respuesta = prompt("Quiere continuar? si/no?") 
	}  
	mensaje = "El nombre del mas joven es: " + nombreMenor 
	mensaje += " y la edad es: " + edadMinimo 
	mensaje += " y el nombre del mayor es: " + nombreMaximo 
	mensaje += " y su edad es: " + edadMaximo; 
	document.write(mensaje); 
	// FIN WHILE 1 BIS EJERCICIO 
}