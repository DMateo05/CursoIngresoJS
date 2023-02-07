// Devita Mateo 
// Al ingresar una edad solo debemos informar si la persona NO es adolescente.
function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value); 
	let mensaje = "Usted no es Adolescente";
	
	if(edad < 13 || edad > 17)
	{
		alert(mensaje);
	} 

	// Fin Ejercicio 
}