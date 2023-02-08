// Devita Mateo 
/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 
'Es muy pequeño para NO ser soltero.*/
function mostrar()
{	
	// Declaro Variables
	let edad; 
	let estadoCivil; 
	let mensaje; 

	// Tomo Datos
	edad = parseInt(document.getElementById("txtIdEdad").value); 
	estadoCivil = document.getElementById("estadoCivil").value; 

	// Añado una Condicion
	if(edad < 18 && estadoCivil != "Soltero")
	{ 
		// Muestro el Mensaje 
		mensaje = "Es muy pequeño para NO ser soltero"; 
		alert(mensaje);
	} 

	// Fin Ejercicio 
}