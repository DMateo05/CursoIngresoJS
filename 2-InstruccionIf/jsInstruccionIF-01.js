// Devita Mateo 
// Ejercicio Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
function mostrar()
{ 
	// Declaro Variables 
	let mensaje = "Niña Bonita"; 
	let ageCondicional = 15;
	let edad = parseInt(document.getElementById("txtIdEdad").value); 

	// Asigno Condicionales
	if(edad == ageCondicional)
	{
		alert(mensaje);
	}
	
	// Fin Ejercicio 

	/* 
	- Operadores Aritmeticos 
	+    -      *              /          % 
	Mas  Menos  Multiplicar    Dividir    Modulo o Resto
	> Relacionales Condicionales 
	<          >         <=               >=              ==      != 
	Menor de   Mayor de  Menor o Igual    Mayor o Igual   Igual 
	> Operadores Logicos 
	&&         ||          ! 
	y Logica   o Logica    Negacion
	*/
}