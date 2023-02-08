// Devita Mateo 
/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */ 
function mostrar()
{
	// Declaro Variables
	let notaNumerica = (Math.floor(Math.random() * (11-1) + 1)); // Del 1 al 10
	let mensaje; 

	// Asigno Condiciones
	if(notaNumerica >= 9)
	{
		mensaje = "EXCELENTE: " + notaNumerica;
	}else
		{
			if(notaNumerica >= 4)
			{
				mensaje = "APROBÓ: " + notaNumerica;
			}else
			{	
				mensaje = "Vamos, la proxima se Puede: " + notaNumerica;
			}
		} 
	// Muestro el Mensaje
	alert(mensaje); 
	
	// Fin Ejercicio
}	
