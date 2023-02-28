// Devita Mateo 
// al presionar el botón repetir el pedido de número hasta que ingresemos el 9.
function mostrar()
{ 
	/* let i; 
	let pedidoNumero; 

	for(i = 0;i < 999999999999999;i++)
	{
		pedidoNumero = parseInt(prompt("Ingrese un Numero valido, si ingresa '9', dejara de preguntar")) 
		while(isNaN(pedidoNumero))
		{
			pedidoNumero = parseInt(prompt("Error, Ingrese un Numero valido")) 
		} 

		if(pedidoNumero == 9)
		{
			break; 
		}
	} // FIN FOR  */

	// Inicio Ejercicio 5 BIS 
	/* 
	For 5 bis, Realizar el programa que permita el ingreso de las notas (validar entre 0 y 10) , 
	el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
	a) El promedio de las notas totales. 
	b) La nota más baja y el sexo de esa persona. 
	c) La cantidad de varones que su nota haya sido mayor o igual a 6.
	d) La cantidad de alumnos desaprobados (nota < 4)
	*/ 

	let i;
	let notaIngresada; 
	let sexoIngresado; 
	let cantPromocionadosVarones; 
	let cantidadDesaprobados; 
	let promedioNotas; 
	let acumuladorNotas; 
	let banderaNotaBaja; 
	let sexoNotaBaja; 
	let notaMasBaja; 

	acumuladorNotas = 0; 
	banderaNotaBaja = true; 
	cantidadDesaprobados = 0; 
	cantPromocionadosVarones = 0;  
	notaMasBaja = 0; 


	for(i = 0; i < 7;i++)
	{
		notaIngresada = parseInt(prompt("Ingrese su Nota")); 
		while(isNaN(notaIngresada) || (notaIngresada < 0 || notaIngresada > 10))
		{
			notaIngresada = parseInt(prompt("Error, Ingrese su Nota"));
		} 

		sexoIngresado = prompt("Ingrese su Sexo (f/m/b)")
		while(!isNaN(sexoIngresado) && sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "b")
		{
			sexoIngresado = prompt("Error, Ingrese su Sexo (f/m/b)")
		} 

		if(notaIngresada > -1 && notaIngresada < 11)
		{
			acumuladorNotas = acumuladorNotas + notaIngresada; 
		}		

		if(notaIngresada >= 6 && sexoIngresado == "m")
		{
			cantPromocionadosVarones = cantPromocionadosVarones + 1; 
		} 

		if(banderaNotaBaja == true)
		{
			sexoNotaBaja = sexoIngresado; 
			notaMasBaja = notaIngresada;
			banderaNotaBaja = false; 
		}else if(notaIngresada < notaMasBaja && (sexoIngresado == "f" || sexoIngresado == "m" || sexoIngresado == "b"))
		{
			notaMasBaja = notaIngresada; 
			sexoNotaBaja = sexoIngresado; 
		} 

		if(notaIngresada < 4)
		{
			cantidadDesaprobados = cantidadDesaprobados + 1; 
		}
	} // Fin FOR 

	promedioNotas = acumuladorNotas/7; 

	document.write("El promedio de las notas Totales es: " + promedioNotas + "<br>");  
	document.write("La nota mas baja es " + notaMasBaja + " y el sexo es: " + sexoNotaBaja + "<br>");  
	document.write("La cantidad de varones aprobados es: " + cantPromocionadosVarones + "<br>"); 
	document.write("La cantidad alumnos desaprobados es: " + cantidadDesaprobados); 

	





	// for(i = 0; i < 7;i++){}
	// Pedir Nota y Validarla 

	// Pedir sexo y validarlo 
	// Acumulo las notas 
	// if Bandera guardo primero ingresen 
	// sino pregunto nota mas baja y guardo la nota 
	// if nota mayor a > 5 && (varones) 
	// if nota menor a 5 contar desaprobados 
	// contar 


}