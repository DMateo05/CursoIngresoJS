// Devita Mateo 
// al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"
function mostrar()
{
	let repeticiones; 
	
	repeticiones = parseInt(prompt("Ingrese cantidad")); 

	for(i = 0; i < repeticiones;i++)
	{
		alert("Hola UTN FRA"); 
	}
}