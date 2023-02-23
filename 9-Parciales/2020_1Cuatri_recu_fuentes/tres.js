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
	let respuesta; 

	banderaTemperatura = true; 
	cantidadHombresViudos = 0; 
	cantidadHombresViudos = 0; 
	cantidadMayoresEdadViudos = 0; 
	acumuladorHombresSolteros = 0; 
	contadorHombresSolteros = 0; 
	cantidadTerceraEdad = 0;  
	respuesta = true; 

	while(respuesta == true)
	{
		nombreIngresado = prompt("Ingrese su nombre"); 
		
		edadIngresada = parseInt(prompt("Ingrese su edad")); 
		while(isNaN(edadIngresada) || edadIngresada < 0 || edadIngresada > 123)
		{
			edadIngresada = prompt("Error, Ingrese su edad");
		} 

		sexoIngresado = prompt("Ingrese su sexo (f/m)"); 
		while(sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Error, Ingrese su sexo (f/m)"); 
		} 

		estadoCivil = prompt("Ingrese su Estado Civil (soltero/casado/viudo)"); 
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error, Ingrese su Estado Civil (soltero/casado/viudo)"); 
		} 

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura corporal")); 
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 32 || temperaturaCorporal > 47)
		{
			temperaturaCorporal = parseFloat(prompt("Error, Ingrese su temperatura corporal")); 
		} 

		if(banderaTemperatura == true || personaMasTemperatura < temperaturaCorporal)
		{
			personaMasTemperatura = nombreIngresado; 
			banderaTemperatura = false; 
		}

		/*if(edadIngresada > 17 && estadoCivil == "viudo")
		{
			cantidadMayoresEdadViudos++; 
		} 

		if(sexoIngresado == "m" && (estadoCivil == "soltero" || estadoCivil == "viudo"))
		{
			cantidadHombresViudos++; 
		} 

		if(edadIngresada > 59 && temperaturaCorporal > 37)
		{
			cantidadTerceraEdad = cantidadTerceraEdad + 1;  
		} 

		if(estadoCivil == "soltero" && sexoIngresado == "m")
		{
			contadorHombresSolteros = contadorHombresSolteros + 1; 
			acumuladorHombresSolteros = acumuladorHombresSolteros + edadIngresada; 
		} */ 

		switch(estadoCivil)
		{
			case "viudo": 
				if(edadIngresada > 17)
				{
					cantidadMayoresEdadViudos = cantidadMayoresEdadViudos + 1; 
				} 

				if(sexoIngresado == "m")
				{
					cantidadHombresViudos = cantidadHombresViudos + 1; 
				}
				break; 
			case "casado": 
				if(sexoIngresado == "f")
				{
				contadorHombresSolteros = contadorHombresSolteros + 1;  
				cantidadHombresViudos = cantidadHombresViudos + 1;  
				acumuladorHombresSolteros = acumuladorHombresSolteros + edadIngresada; 
				}  
				break;
		} 

		if(edadIngresada > 59 && temperaturaCorporal > 37)
		{
			cantidadTerceraEdad = cantidadTerceraEdad + 1;  
		} 

		respuesta = confirm("¿Desea seguir ingresando informacion?"); 
	} // Fin While 

	calculoPromedioEdad = acumuladorHombresSolteros/contadorHombresSolteros; 
	if(contadorHombresSolteros == 0)
	{
		calculoPromedioEdad = "No hay solteros"; 
	}

	document.write("El nombre de la persona con mas temperatura es: " + personaMasTemperatura + "<br>"); // PUNTO A 
	document.write("Cantidad Mayores edad estan viudos: " + cantidadMayoresEdadViudos + "<br>"); // PUNTO B 
	document.write("La cantidad de hombres que hay solteros o viudos es: " + cantidadHombresViudos + "<br>"); // PUNTO C 
	document.write("La cantidad de gente de tercera edad que tiene mas de 38 temperatura corporal es: " + cantidadTerceraEdad + "<br>"); //PUNTO D 
	document.write("El promedio de edad entre los hombres solteros es: " + calculoPromedioEdad); // PUNTO E
}
