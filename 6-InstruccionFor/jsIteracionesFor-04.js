// Devita Mateo
// al presionar el botón repetir hasta que utilizamos 'BREAK'.
function mostrar()
{
	let romper; 
	let i; 

	for(i = 1;i < 999999999999999;i++)
	{
		console.log(i);
		romper = prompt("Desea frenar? si/no")
		if(romper == "si")
		{
			break;
		}
	}
}