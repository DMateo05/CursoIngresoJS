// Devita Mateo 
// Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). 
function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value); 
	let mensaje;
	
	if(edad >= 18)
	{
		mensaje = "Es mayor de Edad"; 
	}else{
		if(edad >= 13)
		{
			mensaje = "Es Adolescente";
		}else
		{
			mensaje = "Es un Niño";
		}
	}
	alert(mensaje); 

	// Fin Ejercicio 
}	
