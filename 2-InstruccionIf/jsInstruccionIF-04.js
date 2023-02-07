// Devita Mateo 
// Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) . 
function mostrar()
{	
	// Declaro Variables
	let edad = parseInt(document.getElementById("txtIdEdad").value); 
	let mensaje; 

	// Declaro Condicionales 
	if(edad >= 13 && edad <= 17)
	{
		mensaje = "Usted tiene entre 13 y 17 Años";
	}else
	{
		mensaje = "Usted no tiene entre 13 y 17 años"; 
	} 
	alert(mensaje); 

	// Fin Ejercicio
}