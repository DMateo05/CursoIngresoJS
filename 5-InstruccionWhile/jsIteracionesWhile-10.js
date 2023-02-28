/* 
Devita Mateo
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let respuesta;
	let numeroIngresado;
	let sumaNegativos; 
	let sumaPositivo; 
	let contadorPositivos; 
	let contadorNegativos; 
	let contadorCeros; 
	let contadorPares; 
	let promedioPositivos;  
	let promedioNegativo; 
	let diferencia; 
	

	contadorPositivos = 0; 
	contadorNegativos = 0; 
	contadorCeros = 0; 
	contadorPares = 0; 
	sumaPositivo = 0; 
	sumaNegativos = 0; 

	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero")); 
		//respuesta=prompt("desea continuar? Si/No"); 
		while(isNaN(numeroIngresado)) // Validacion
		{
			numeroIngresado = parseInt(prompt("Error, Ingrese un numero")); 
		} 

		if(numeroIngresado < 0){ 
			// Punto 1 y 4
			sumaNegativos = sumaNegativos + numeroIngresado; 
			contadorNegativos = contadorNegativos + 1; 
		}else if(numeroIngresado > 0){ 
			// Punto 2 y 3
			sumaPositivo = sumaPositivo + numeroIngresado; 
			contadorPositivos = contadorPositivos + 1;
		}else{
			contadorCeros = contadorCeros + 1; 
		} 

		if(numeroIngresado%2 == 0)
		{
			contadorPares = contadorPares + 1;
		}

		respuesta=prompt("desea continuar? si/no");
	}//fin del while 

	promedioPositivos = sumaPositivo/contadorPositivos; 
	promedioNegativo = sumaNegativos/contadorNegativos; 
	if(contadorNegativos == 0)
	{
		promedioNegativo = "No se puede dividir entre 0"
	}
	diferencia = sumaPositivo - sumaNegativos;

	document.write("la suma de negativos es : "+ sumaNegativos + "<br>"); 
	document.write("la suma de positivos es :"+ sumaPositivo + "<br>"); 
	document.write("la cantidad de positivos es : "+ contadorPositivos + "<br>"); 
	document.write("la cantidad de negativos es : "+ contadorNegativos + "<br>");  
	document.write("la cantidad de ceros es : "+ contadorCeros + "<br>"); 
	document.write("la cantidad de pares es : " + contadorPares + "<br>"); 
	document.write("promedio de positivos es : "+ promedioPositivos + "<br>"); 
	document.write("promedio de negativos es : "+ promedioNegativo + "<br>"); 
	document.write("diferencia entre positivos y negativos es : "+ diferencia + "<br>"); 
}