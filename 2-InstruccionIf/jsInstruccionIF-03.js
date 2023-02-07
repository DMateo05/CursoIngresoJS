// Devita Mateo 
// Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad. 
function mostrar()
{
	// Declaro Variables
	let edad = parseInt(document.getElementById("txtIdEdad").value); 
	let mensaje; 
	let ageCondicional = 18; 

	// Asigno las Condicionales 
	if(edad >= ageCondicional)
	{
		mensaje = "Usted tiene más de 18 Años."
	}else
	{
		mensaje = "Usted tiene menos de 18 Años."
	}
	alert(mensaje); 

	// Fin Ejercicio 
}