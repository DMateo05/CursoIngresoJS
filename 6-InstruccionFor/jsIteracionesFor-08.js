// Devita Mateo 
/*al presionar el botón pedir un número. 
Informar si el numero es PRIMO o no. */
function mostrar()
{
	// Declarar Variables 
	let numero; 
	let contadorDivisores; 

	contadorDivisores = 0; 

	// Pedir un numero 
	numero = parseInt(prompt("Ingrese un numero")); 
	while(isNaN(numero))
	{
		numero = parseInt(prompt("Error, Ingrese un numero")); 
	}
	
	/*for(let i=1; i <= numero;i++)
	{
		if(numero%i == 0)
		{
			contadorDivisores = contadorDivisores + 1; 
		} 
	} // Fin FOR 

	if(contadorDivisores == 2)
	{
		console.log(numero + " es primo");
	}else
	{
		console.log(numero + " no es primo");
	} */ 

	for(let i=2; i < numero;i++)
	{
		if(numero%i == 0)
		{
			console.log(numero + " es primo") 
			break;
		} 

		
		
	} // A pensar 
}