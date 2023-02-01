/* 
Devita Mateo
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/ 
function mostrar()
{ 
	
	let nombrePersona; 
	let apellidoPersona;  
	nombrePersona = prompt("¿Cuál es tu nombre?"); 
	apellidoPersona = prompt("¿Cuál es tu apellido?");
    alert("Su nombre es " + nombrePersona + " y su apellido es " + apellidoPersona); 
}
