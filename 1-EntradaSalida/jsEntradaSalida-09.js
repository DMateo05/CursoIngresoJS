/* 
Devita Mateo
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let txtSueldo; 
	let numeroTexto; 
	let aumento; 
	let sueldoAumento; 
	let porcentaje = 10; 
	
	txtSueldo=document.getElementById("txtIdSueldo").value; 
	numeroTexto=parseInt(txtSueldo); 
	aumento=(numeroTexto*porcentaje/100); 
	sueldoAumento=(numeroTexto+aumento);

	document.getElementById("txtIdResultado").value = sueldoAumento;
}
