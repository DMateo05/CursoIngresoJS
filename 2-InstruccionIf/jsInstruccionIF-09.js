// Devita Mateo 
// Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
function mostrar()
{
	// Declaro Variables
	let numero = (Math.floor(Math.random() * (10) + 1)); 
	let mensaje = "Un número aleatorio: "; 

	// Muestro el Mensaje 
	alert(mensaje + numero); 

	// Fin Ejercicio 
}