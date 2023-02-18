// Devita Mateo 
/* al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al 
número ingresado, y mostrar la cantidad de numeros divisores encontrados. */
function mostrar()
{
		// Declarar Variables 
		let numero; 
		let contadorDivisores = 0; 
	
		// Pedir un numero 
		numero = parseInt(prompt("Ingrese un numero")); 
		
		for(let i=1; i <= numero;i++)
		{
			if(numero%i == 0)
			{
				contadorDivisores++; 
				alert(i);
			} 
		} 
	
		alert("Cantidad Divisores: " + contadorDivisores);
}