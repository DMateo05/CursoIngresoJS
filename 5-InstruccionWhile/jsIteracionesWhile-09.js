/* 
Devita Mateo
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	/* let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta; 

	//iniciar variables
	banderaDelPrimero = true;
	respuesta="si";
	while(respuesta == "si") 
	{ 
		numeroIngresado = parseInt(prompt("Ingrese un numero")); 
		//respuesta=prompt("desea continuar? Si/No"); 
		while(isNaN(numeroIngresado)) // Validacion
		{
			numeroIngresado = parseInt(prompt("Error, Ingrese un numero")); 
		} 
		
		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado; 
			numeroMinimo = numeroIngresado; 
			banderaDelPrimero = false; 
		}else if(numeroMaximo < numeroIngresado) // numeroIngresado > numeroMaximo
		{
			numeroMaximo = numeroIngresado; 
		}else if(numeroMinimo > numeroIngresado) // numeroIngresado < numeroMinimo
		{
			numeroMinimo = numeroIngresado; 
		}

		respuesta=prompt("desea continuar? si/no"); 
	} // Fin WHILE 

	document.getElementById("txtIdMaximo").value = numeroMaximo;
	document.getElementById("txtIdMinimo").value = numeroMinimo;  */

	// Ejercicio 9 BIS 
	/* While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
	mostrar el número máximo y el número mínimo ingresado.
	El menor de los pares y el mayor de los negativos ...(solo si hay) */ 

	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo; 
	let numeroMinimo; 
	let menorPares; 
	let mayorNegativos; 
	let respuesta; 
	let banderaSegundo; 
	let mensaje; 

	//iniciar variables
	banderaDelPrimero = true; 
	banderaSegundo = true; 
	respuesta="si";
	while(respuesta == "si") 
	{ 
		numeroIngresado = parseInt(prompt("Ingrese un Numero")); 
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, ingrese numero valido")); 
		} 

		if(banderaDelPrimero == true)
		{
			numeroMaximo = numeroIngresado; 
			numeroMinimo = numeroIngresado; 
			banderaDelPrimero = false; 
		}else if(numeroMaximo < numeroIngresado) 
		{
			numeroMaximo = numeroIngresado; 
		}else if(numeroMinimo > numeroIngresado) 
		{
			numeroMinimo = numeroIngresado; 
		}

		if(banderaSegundo == true)
		{
			menorPares = numeroIngresado;
			mayorNegativos = numeroIngresado; 
			banderaSegundo = false; 
		}else if(numeroIngresado%2 == 0)
		{
			menorPares = numeroIngresado; 
		}else if(numeroIngresado < 0)
		{
			mayorNegativos = numeroIngresado; 
		} 

		respuesta=prompt("desea continuar? si/no"); 	
	} // FIN WHILE 

	mensaje = "El numero mas grande es: " + numeroMaximo + "<br>" 
	mensaje += "El numero mas pequeño es: " + numeroMinimo + "<br>" 
	mensaje += "El menor de los pares es: " + menorPares + "<br>" 
	mensaje += "El mayor de los negativos es: " + mayorNegativos; 
	document.write(mensaje); 
	// Fin Ejercicio 9 BIS BIS  
}
