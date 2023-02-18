/* 
Devita Mateo 
Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas 
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12. Los datos requeridos son los siguientes:
A. Edad, entre 18 y 90 años inclusive.
B. Sexo, “M” para masculino y “F” para femenino
C. Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D. Sueldo bruto, no menor a 8000.
E. Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F. Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados. */
function ComenzarIngreso () 
{ 

	// txtIdEdad 
	// txtIdSexo 
	// txtIdEstadoCivil 
	// txtIdSueldo 
	// txtIdLegajo 
	// txtIdNacionalidad

 	//definicion de variables
 	let edadIngresada; 
	let sexoIngresado; 
	let estadoCivil; 
	let mensajeEstadoCivil; 
	let sueldoBruto; 
	let numeroLegajo; 
	let nacionalidadIngresada; 
	let mensajeNacionalidad; 

	// Ingreso los datos por PROMPT 
	edadIngresada = parseInt(prompt("Ingrese Edad Valida (Entre 18 a 90 años)"));
	while(isNaN(edadIngresada) || edadIngresada < 18 || edadIngresada > 90)
	{
		edadIngresada = parseInt(prompt("Error, Ingrese Edad Valida (Entre 18 a 90 años)")); 
	} 

	sexoIngresado = prompt("Ingrese su sexo (F/M)");
	while(!isNaN(sexoIngresado) || sexoIngresado != "F" && sexoIngresado != "M")
	{
		sexoIngresado = prompt("Error, Ingrese su sexo (F/M)");
	} 

	mensajeEstadoCivil = "Ingrese su estado Civil, ";  
	mensajeEstadoCivil += " 1 = Soltero "; 
	mensajeEstadoCivil += " 2 = Casado ";
	mensajeEstadoCivil += " 3 = Divorciados ";
	mensajeEstadoCivil += " 4 = Viudo "; 
	
	estadoCivil = prompt(mensajeEstadoCivil); 
	while(isNaN(estadoCivil) || (estadoCivil < 1 && estadoCivil > 4))
	{
		estadoCivil = prompt("Error, " + mensajeEstadoCivil);
	}

	sueldoBruto = parseInt(prompt("Ingrese su Sueldo bruto (No menor a 8000)")); 
	while(isNaN(sueldoBruto) || sueldoBruto < 8000)
	{
		sueldoBruto = parseInt(prompt("Error, Ingrese su Sueldo bruto (No menor a 8000)")); 
	} 

	numeroLegajo = parseInt(prompt("Ingrese su numero de legajo (4 Cifras) (Sin ceros a la izquierda)")); 
	while(isNaN(numeroLegajo) || numeroLegajo < 1000)
	{
		numeroLegajo = parseInt(prompt("Error, Ingrese su numero de legajo (Sin ceros a la izquierda)")); 
	}  

	mensajeNacionalidad = "Ingrese su nacionalidad, ";  
	mensajeNacionalidad += " A = Argentino "; 
	mensajeNacionalidad += " E = Extranjeros ";
	mensajeNacionalidad += " N = Nacionalizados "; 

	nacionalidadIngresada = prompt(mensajeNacionalidad) 
	while(!isNaN(nacionalidadIngresada) || nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N")
	{
		nacionalidadIngresada = prompt("Error, " + mensajeNacionalidad); 
	} 
	
	document.getElementById("txtIdEdad").value = edadIngresada; 
	document.getElementById("txtIdSexo").value = sexoIngresado; 
	document.getElementById("txtIdEstadoCivil").value = estadoCivil; 
	document.getElementById("txtIdSueldo").value = sueldoBruto; 
	document.getElementById("txtIdLegajo").value = numeroLegajo; 
	document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada; 
}
