// Devita Mateo 
// Ejercicio Al ingresar una edad que sea igual a 15, mostrar el mensaje "niña bonita".
function mostrar()
{ 
	// Declaro Variables 
	//let mensaje = "Niña Bonita"; 
	//let ageCondicional = 15;
	//let edad = parseInt(document.getElementById("txtIdEdad").value); 

	// Asigno Condicionales
	//if(edad == ageCondicional)
	//{
		//alert(mensaje);
	//}
	
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

	/* 
	Ejercicio 1bis: 
	/con if
	pedir a una persona que fue de vaciones , 
	la distancia que viajo y el tiempo que tardo, para calcular la velocidad
	e informar:
	60 km/hr = muy lento 
	hata 80km/h= lento 
	hasta 100= buen ritmo
	hasta 120= ahi de la ley 
	mas = eso no se hace/ */ 
	
	/* Ejercicio 1 bis bis:
	con if
	ingresar el nombre y los datos requeridos para calcular el IMC , 
	e informar a la persona si es:
	Bajo peso <18.5
	Peso normal 18,5-24.9
	Preobesidad 25-26.9
	Obesidad I 27-29.9
	Obesidad II 30-34.9
	Obesidad III >40 */ 

	// Inicio Ejercicio 1 BIS 
	//let distancia; // Le pido distancia por ID y el tiempo que Tardo por Prompt
	//let tiempo; 
	//let velocidad;   
	//let mensaje; 

	//distancia = parseFloat(document.getElementById("txtIdEdad").value); 
	//tiempo = prompt("Ingrese el tiempo que tardo"); 
	//parseFloat(tiempo); 

	//velocidad = distancia/tiempo; 

	//if(velocidad <= 60){
		//mensaje = "Muy Lento";
	//}else if(velocidad > 60 && velocidad <= 80){
		//mensaje = "Lento";
	//}else if(velocidad > 80 && velocidad <= 100){
		//mensaje = "Buen Ritmo"; 
	//}else if(velocidad > 100 && velocidad <= 120){
		//mensaje = "Ahi de la Ley"; 
	//}else{
		//mensaje = "Eso no se hace";
	//}
	//alert(mensaje); 
	// Fin Ejercicio 1 BIS 

	// Inicio Ejercicio 1 BIS BIS 
	let peso; // Ingresa por ID
	let altura; // Por Prompt 
	let nombre; 
	let pesoCorporal;
	let mensaje; 
	
	peso = parseFloat(document.getElementById("txtIdEdad").value); 
	altura = prompt("Ingrese su Altura"); 
	parseFloat(altura); 
	nombre = prompt("Ingrese su Nombre"); 
	
	pesoCorporal = peso/(altura*altura); 

	if(pesoCorporal < 18.5){
		mensaje = nombre + ", usted tiene: " + pesoCorporal + " de peso corporal, esta BAJO PESO"; 
	}else if(pesoCorporal >= 18.5 && pesoCorporal <= 24.9){
		mensaje = nombre + ", usted tiene: " + pesoCorporal + " de peso corporal, tiene PESO NORMAL"; 
	}else if(pesoCorporal == 25 && pesoCorporal <= 26.9){
		mensaje = nombre + ", usted tiene: " + pesoCorporal + " de peso corporal, tiene PREOBESIDAD"; 
	}else if(pesoCorporal == 27 && pesoCorporal <= 29.9){
		mensaje = nombre + ", usted tiene: " + pesoCorporal + " de peso corporal, tiene OBESIDAD I";
	}else if(pesoCorporal == 30 && pesoCorporal <= 34.9){
		mensaje = nombre + ", usted tiene: " + pesoCorporal + " de peso corporal, tiene OBESIDAD II";
	}else{
		mensaje = nombre + ", usted tiene: " + pesoCorporal + " de peso corporal, tiene OBESIDAD III"
	} 
	alert(mensaje); 
}