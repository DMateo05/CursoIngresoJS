/* 
Devita Mateo 
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y 
localidad para vacacionar para poder calcular el precio final
en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%
en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%
en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/ 
function mostrar()
{
	let precioBase = 15000; 
	let porcentaje; 
	let estacionAnio; 
	let destino; 
	let calculoPrecio; 
	let totalPagar; 
	let mensaje; 

	destino = document.getElementById("txtIdDestino").value; 
	estacionAnio = document.getElementById("txtIdEstacion").value; 

	switch(estacionAnio)
	{
		case "Invierno": 
			if(destino == "Bariloche"){
				porcentaje = 20; 
			}else if(destino == "Cataratas" || destino == "Cordoba"){
				porcentaje = -10; 
			}else{
				porcentaje = -20;
			} 
			break; 
		case "Verano": 
			if(destino == "Bariloche"){
				porcentaje = -20; 
			}else if(destino == "Cataratas" || destino == "Cordoba"){
				porcentaje = 10; 
			}else{
				porcentaje = 20; 
			} 
			break 
		case "Otoño": 
		case "Primavera": 
			if(destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata"){
				porcentaje = 10; 
			}else{
				porcentaje = 0; 
			} 
			break; 
	} 
	calculoPrecio = precioBase*(porcentaje/100); 
	totalPagar = precioBase + calculoPrecio; 
	mensaje = "Se tendra que pagar $" + totalPagar; 
	alert(mensaje); 
}