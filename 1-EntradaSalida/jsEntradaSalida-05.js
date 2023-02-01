/* 
Devita Mateo
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombrePersona; 
	let edadPersona; 
	nombrePersona = document.getElementById("txtIdNombre").value; 
	edadPersona = document.getElementById("txtIdEdad").value; 
	alert("Usted se llama: " +  nombrePersona + " y tiene " + edadPersona);  
}

