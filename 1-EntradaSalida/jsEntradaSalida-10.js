/* 
Devita Mateo
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	// Ejercicio 10
	//let txtSueldo; 
	//let numeroTexto; 
	//let descuento; 
	//let sueldoDescuento; 
	//let porcentaje = 25; 

	//txtSueldo=document.getElementById("txtIdImporte").value; 
	//numeroTexto=parseInt(txtSueldo); 
	//descuento=porcentaje/100*txtSueldo; 
	//sueldoDescuento=txtSueldo-descuento; 

	//document.getElementById("txtIdResultado").value = sueldoDescuento; 
	// Fin Ejercicio 10 

	// Inicio Ejercicio 10BIS
	let txtSueldo; // lowerCamelCase
	let descripcion;  
	let descuento; 
	let sueldoDescuento; 
	
	txtSueldo=parseInt(document.getElementById("txtIdImporte").value); 
	descripcion=prompt("Ingrese Numero de descuento (Solo el entero)"); 
	parseInt(descripcion);
	descuento=descripcion/100*txtSueldo; 
	sueldoDescuento=txtSueldo-descuento; 

	document.getElementById("txtIdResultado").value = sueldoDescuento; 
	// Fin Ejercicio 
}
