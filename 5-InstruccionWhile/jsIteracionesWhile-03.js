/* 
Devita Mateo
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	// Declaro Variables 
	let claveIngresada; 
	let mensaje; 

	// Pido el Dato 
	claveIngresada = prompt("Ingrese la clave"); 

	// Añado la iteración 
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error, ingrese la clave correcta"); 
	} 

	// Muestro Mensaje (Si el usuario coloco bien la clave) 
	mensaje = "Felicidades, ingreso bien la clave"; 
	alert(mensaje); 
}
