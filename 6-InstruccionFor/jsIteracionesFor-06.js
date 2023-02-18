// Devita Mateo 
// al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
function mostrar()
{
	// Declarar Variables 
	let numero; 
	let contadorPares = 0; 

	// Pedir un numero 
	numero = parseInt(prompt("Ingrese un numero")); 
	
	/* Tengo que hacer que una variable 
	tome los valores desde el 1 hasta el numero ingresado */ 
	for(let i=1; i <= numero;i++)
	{
		// Para cada uno de los valores, analizo la paridad 
		// si encuentro un par, lo muestro y lo cuento 
		if(i%2 == 0)
		{
			contadorPares++; 
			alert(i);
		} 
	} 

	alert("Cantidad pares: " + contadorPares); 
}