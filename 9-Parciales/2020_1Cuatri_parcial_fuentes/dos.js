// Devita Mateo 
/* 
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
    let respuesta; 
    let tipoProducto; 
    let cantidadBolsas; 
    let precioPorBolsa; 

    let porcentaje; 
    let acumuladorPrecio; 
    let acumuladorBolsas; 
    let contadorTotalArena; 
    let contadorTotalCal; 
    let contadorTotalCemento; 
    let precioBolsaMasCaro; 
    let tipoBolsaMasCaro; 
    let banderaBolsaMasCaro; 
    let mensaje; 
    let importeTotalDescuento; 
    let mayorCantidadBolsas; 

    acumuladorPrecio = 0; 
    acumuladorBolsas = 0; 
    contadorTotalArena = 0; 
    contadorTotalCal = 0; 
    contadorTotalCemento = 0; 
    banderaBolsaMasCaro = true;  
    respuesta = "si"; 

    while(respuesta == "si")
    {
        tipoProducto = prompt("Ingrese el tipo de producto (arena/cal/cemento)"); 
        while(tipoProducto != "arena" && tipoProducto != "cal" && tipoProducto != "cemento")
        {
            tipoProducto = prompt("Error, Ingrese el tipo de producto(arena/cal/cemento)");
        } 

        cantidadBolsas = parseInt(prompt("Ingrese Cantidad de Bolsas (Entre 1 a 1000)")); 
        while(isNaN(cantidadBolsas) || cantidadBolsas < 1 || cantidadBolsas > 1000)
        {
            cantidadBolsas = parseInt(prompt("Ingrese Cantidad de Bolsas (Entre 1 a 1000)")); 
        } 

        precioPorBolsa = parseFloat(prompt("Ingrese el precio de las Bolsas (Entre 1 a 10000)")); 
        while(isNaN(precioPorBolsa) || precioPorBolsa < 1 || precioPorBolsa > 10000)
        {
            precioPorBolsa = parseFloat(prompt("Ingrese el precio de las Bolsas (Entre 1 a 10000)"));
        } 

        // Punto A
        acumuladorPrecio = acumuladorPrecio + (precioPorBolsa*cantidadBolsas); 
        acumuladorBolsas = acumuladorBolsas + cantidadBolsas; 

        switch(tipoProducto)
        {
            case "arena": 
                contadorTotalArena = contadorTotalArena + cantidadBolsas;  
                break;  
            case "cal": 
                contadorTotalCal = contadorTotalCal + cantidadBolsas; 
                break;
            case "cemento": 
                contadorTotalCemento = contadorTotalCemento + cantidadBolsas; 
                break;  
        }

        // Punto D
        if(banderaBolsaMasCaro == true || precioBolsaMasCaro < precioPorBolsa)
        {
            precioBolsaMasCaro = precioPorBolsa; 
            tipoBolsaMasCaro = tipoProducto; 
            banderaBolsaMasCaro = false;
        } 

        respuesta = prompt("Desea seguir Ingresando Productos? si/no"); 
    } // FIN WHILE  

    //Punto C
    if(contadorTotalArena > contadorTotalCal && contadorTotalArena > contadorTotalCemento)
    {
        mayorCantidadBolsas = "Arena";
    }else if(contadorTotalCal > contadorTotalArena || contadorTotalCal >= contadorTotalCemento)
    {
        mayorCantidadBolsas = "Cal"; 
    }else
    {
        mayorCantidadBolsas = "Cemento"; 
    }

    // Definicion Porcentajes
    if(acumuladorBolsas > 29)
    {
        porcentaje = -25; 
    }else if (acumuladorBolsas > 9)
    {
        porcentaje = -15; 
    }else
    {
        porcentaje = 0; 
    } 

    if(porcentaje != 0)
    {
        // Punto B 
        importeTotalDescuento = acumuladorPrecio + (acumuladorPrecio*porcentaje/100); 
        mensaje = "El importe con Descuento es: $" + importeTotalDescuento + "<br>"; 
    }else
    {
        mensaje = "No se aplico Descuento" + "<br>"; 
    } 

    document.write("El importe total a pagar sin descuento es: $" + acumuladorPrecio + "<br>"); 
    document.write(mensaje); 
    document.write("El tipo con mas cantidad de bolsas es: " + mayorCantidadBolsas + "<br>"); 
    document.write("El tipo mas caro es: " + tipoBolsaMasCaro + " con $" + precioBolsaMasCaro); 
}
