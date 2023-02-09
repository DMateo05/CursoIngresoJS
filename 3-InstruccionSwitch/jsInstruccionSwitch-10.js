/* 
Devita Mateo
una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar
en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"
en Verano: Se viaja a Mar del plata y Cataratas solamente
en Otoño: Se viaja a todos los destinos.
primavera: solo no se viaja a Bariloche
*/ 
function mostrar()
{
	let destino; 
	let estacionAnio; 
	let mensaje; 

	destino = document.getElementById("txtIdDestino").value; 
	estacionAnio = document.getElementById("txtIdEstacion").value; 

	switch(estacionAnio)
	{
		case "Invierno": 
			if(destino == "Bariloche"){
				mensaje = "Se viaja"; 
			}else{
				mensaje = "No se viaja"; 
			} 
			break; 
		case "Verano": 
			if(destino == "Mar del plata" || destino == "Cataratas"){
				mensaje = "Se viaja"; 
			}else{
				mensaje = "No se viaja";
			} 
			break; 
		case "Otoño": 
			if(destino == "Mar del plata" || destino == "Cataratas" || destino == "Bariloche" || destino == "Cordoba"){
				mensaje = "Se viaja";
			} 
			break; 
		case "Primavera": 
			if(destino == "Mar del plata" || destino == "Cataratas" || destino == "Cordoba"){
				mensaje = "Se viaja"; 
			}else{
				mensaje = "No se viaja";
			}
			break;
	}   
	alert(mensaje);
}