// Devita Mateo
/* 
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. 
*/ 
function mostrar()
{
	let nombreIngresado; 
	let edadIngresada; 
	let sexoIngresado; 
	let estadoCivil; 
	let temperaturaCorporal; 
	let banderaTemperatura; 
	let personaMasTemperatura; 
	let cantidadMayoresEdadViudos; 
	let cantidadHombresViudos; 
	let cantidadTerceraEdad; 
	let contadorHombresSolteros; 
	let acumuladorHombresSolteros; 
	let calculoPromedioEdad; 
	let totalPromedioEdad; 
	let respuesta; 

	banderaTemperatura = true; 
	cantidadHombresViudos = 0; 
	cantidadHombresViudos = 0; 
	cantidadMayoresEdadViudos = 0; 
	acumuladorHombresSolteros = 0; 
	contadorHombresSolteros = 0; 
	cantidadTerceraEdad = 0;  
	respuesta = "si"; 

	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese su nombre"); 
		while(!isNaN(nombreIngresado))
		{
			nombreIngresado = prompt("Error, Ingrese su nombre");
		} 

		edadIngresada = parseInt(prompt("Ingrese su edad")); 
		while(isNaN(edadIngresada))
		{
			edadIngresada = prompt("Error, Ingrese su edad");
		} 

		sexoIngresado = prompt("Ingrese su sexo (f/m)"); 
		while(!isNaN(sexoIngresado) || sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error, Ingrese su sexo (f/m)"); 
		} 

		estadoCivil = prompt("Ingrese su Estado Civil (soltero/casado/viudo)"); 
		while(!isNaN(nombreIngresado) || estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error, Ingrese su Estado Civil (soltero/casado/viudo)"); 
		} 

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal")); 
		while(isNaN(temperaturaCorporal))
		{
			temperaturaCorporal = parseFloat(prompt("Error, Ingrese su temperatura corporal")); 
		} 

		if(banderaTemperatura == true)
		{
			personaMasTemperatura = nombreIngresado; 
			banderaTemperatura = false; 
		}else if(temperaturaCorporal > temperaturaCorporal)
		{
			personaMasTemperatura = nombreIngresado; 
		} 

		if(edadIngresada > 17 && estadoCivil == "viudo")
		{
			cantidadMayoresEdadViudos++; 
		} 

		if(sexoIngresado == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo"))
		{
			cantidadHombresViudos++; 
		} 

		if(edadIngresada > 59 && temperaturaCorporal > 37)
		{
			cantidadTerceraEdad++; 
		} 

		if(estadoCivil == "soltero" && sexoIngresado == "m")
		{
			contadorHombresSolteros++; 
			acumuladorHombresSolteros = acumuladorHombresSolteros + edadIngresada; 
		} 

		respuesta = prompt("¿Desea seguir ingresando informacion? si/no"); 
	} // Fin While 

	calculoPromedioEdad = acumuladorHombresSolteros/contadorHombresSolteros; 

	document.write("El nombre de la persona con mas temperatura es: " + personaMasTemperatura + "<br>"); 
	document.write("Cantidad Mayores edad estan viudos: " + cantidadMayoresEdadViudos + "<br>"); 
	document.write("La cantidad de hombres que hay solteros o viudos es: " + cantidadHombresViudos + "<br>");
	document.write("La cantidad de gente de tercera edad que tiene mas de 38 temperatura corporal es: " + cantidadTerceraEdad + "<br>"); 
	document.write("El promedio de edad entre los hombres solteros es: " + calculoPromedioEdad);  
}
