/* 
Devita Mateo
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// Ejercicio 5
	let nombrePersona; 
	let edadPersona; 
	let mensaje; 
	nombrePersona = document.getElementById("txtIdNombre").value; 
	edadPersona = document.getElementById("txtIdEdad").value;  
	mensaje = "Usted se llama: " + nombrePersona + " y tiene " + edadPersona;
	alert(mensaje);  
	// Fin Ejercicio 5 

	// Inicio Ejercicio 5BIS 
	//let nombrePersona;  
	//let edadPersona; 
	//let apellidoPersona; 
	//let mensaje; 

	//nombrePersona = document.getElementById("txtIdNombre").value; 
	//edadPersona = document.getElementById("txtIdEdad").value; 
	//apellidoPersona=prompt("Ingrese su Apellido"); 
	//mensaje=apellidoPersona + ", usted se llama " + nombrePersona + " y tiene " + edadPersona + " años"; 
	//alert(mensaje); 
	// Fin Ejercicio 5BIS
}

