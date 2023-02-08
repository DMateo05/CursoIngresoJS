// Devita Mateo 
/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/
function mostrar()
{
	// Declaro Variables
	let edad; 
	let estadoCivil; 
	let mensaje; 

	// Tomo los Datos 
	edad = parseInt(document.getElementById("txtIdEdad").value); 
	estadoCivil = document.getElementById("estadoCivil").value; 

	// Añado las condiciones 
	if(edad > 17 && estadoCivil == "Soltero")
	{
		// Muestro el Mensaje
		mensaje = "Es soltero y no es menor"; 
		alert(mensaje); 
	} 

	// Fin Ejercicio
}