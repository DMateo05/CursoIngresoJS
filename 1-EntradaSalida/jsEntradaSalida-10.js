/* 
Devita Mateo
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let txtSueldo; 
	let numeroTexto; 
	let descuento; 
	let sueldoDescuento; 
	let porcentaje = 25; 

	txtSueldo=document.getElementById("txtIdImporte").value; 
	numeroTexto=parseInt(txtSueldo); 
	descuento=((porcentaje/100)*txtSueldo); 
	sueldoDescuento=(txtSueldo-descuento); 

	document.getElementById("txtIdResultado").value = sueldoDescuento; 
}
