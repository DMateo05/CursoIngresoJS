// Devita Mateo 
// Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
function mostrar()
{
	let destino; 
    let mensaje; 

    destino = document.getElementById("txtIdDestino").value; 

	switch(destino)
	{
		case "Bariloche": 
		case "Ushuaia": 
			mensaje = "Hace frio"; 
			break; 
		case "Cataratas": 
		case "Mar del plata": 
			mensaje = "Hace calor"; 
			break; 
	} 
	alert(mensaje); 
}