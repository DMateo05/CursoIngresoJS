// Devita Mateo 
// Ejercicio : Al ingresar una edad debemos informar solo si la persona es mayor de edad
function mostrar()
{ 
	// Declaro Variables
	let edad = parseInt(document.getElementById("txtIdEdad").value); 
	let mensaje = "Usted Es Mayor de Edad"; 
	let ageCondicional = 18; 

	// Asigno las Condicionales 
	if(edad >= ageCondicional)
	{
		alert(mensaje)
	}

	// Fin Ejercicio 
} 