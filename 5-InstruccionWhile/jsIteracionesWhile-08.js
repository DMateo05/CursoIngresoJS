/* 
Devita Mateo
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let contador;
	let respuesta; 
	let numeroIngresado; 
	let sumaPositivos;
	let multiplicacionNegativos; 
	 

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si'; 

	while(respuesta == 'si')
	{
		numeroIngresado = parseInt(prompt("Ingrese Numero")); 
		contador = contador + 1 
		while(isNaN(numeroIngresado))
		{
			numeroIngresado = parseInt(prompt("Error, Ingrese Numero"));
		} 

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado; 
		}else
		{
			multiplicacionNegativos = numeroIngresado*multiplicacionNegativos; 
		} 
		respuesta = prompt("desea continuar? si/no") 
	} // Fin While

	document.getElementById("txtIdSuma").value= sumaPositivos;
	document.getElementById("txtIdProducto").value= multiplicacionNegativos;
}