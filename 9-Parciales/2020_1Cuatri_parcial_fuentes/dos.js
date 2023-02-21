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
    let tipoBolsa; 
    let cantidadBolsas; 
    let precioIngresado; 
    let porcentaje; 
    let totalPagar; 
    let precioCal; 
    let cantidadCal; 
    let precioCemento; 
    let cantidadCemento; 
    let precioArena; 
    let cantidadArena; 
    let acumuladorCantidadBolsas; 
    let mayorCantidadBolsas; 
    let mayorPrecioBolsas;  
    let calculoDescuento; 
    let totalDescuento; 
    let acumuladorPrecio; 
    
    respuesta = "si"; 
    precioCal = 0; 
    cantidadCal = 0; 
    precioCemento = 0; 
    cantidadCemento = 0; 
    precioArena = 0; 
    cantidadArena = 0; 
    acumuladorCantidadBolsas = 0;  
    acumuladorPrecio = 0; 
    
    while(respuesta == "si")
    {
        tipoBolsa = prompt("Ingrese el tipo de Bolsa(arena/cal/cemento)"); 
        while(!isNaN(tipoBolsa) || tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento")
        {
            tipoBolsa = prompt("Error,Ingrese el tipo de Bolsa(arena/cal/cemento)");
        } 

        cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas")); 
        while(isNaN(cantidadBolsas) || cantidadBolsas < 0)
        {
            cantidadBolsas = parseInt(prompt("Error,Ingrese cantidad de bolsas"));
        } 

        precioIngresado = parseInt(prompt("Ingrese el precio")); 
        while(isNaN(precioIngresado) || precioIngresado < 1)
        {
            precioIngresado = parseInt(prompt("Error, Ingrese el precio"));
        } 

        if(tipoBolsa == "arena")
        {
            cantidadArena = cantidadArena + cantidadBolsas; 
            precioArena = precioArena + precioIngresado; 
        }else if(tipoBolsa == "cal")
        {
            cantidadCal = cantidadCal + cantidadBolsas;
            precioCal = precioCal + precioIngresado; 
        }else{
            cantidadCemento = cantidadCemento + cantidadBolsas;
            precioCemento = precioCemento + precioIngresado; 
        } 

        /*if(cantidadBolsas > 9 && cantidadBolsas < 30)
        {
            porcentaje = -15; 
        }else if(cantidadBolsas > 29)
        {
            porcentaje = -25; 
        }else{
            porcentaje = 0; 
        } */

        acumuladorCantidadBolsas = acumuladorCantidadBolsas + cantidadBolsas; 
        acumuladorPrecio = acumuladorPrecio + precioIngresado; 

        respuesta = prompt("¿Desea seguir ingresando productos? si/no"); 
    } // Fin While Main 

    
    if(acumuladorCantidadBolsas > 10 && acumuladorCantidadBolsas < 30)
    {
        porcentaje = -15; 
    }else if(acumuladorCantidadBolsas > 30)
    {
        porcentaje = -25; 
    }else{
        porcentaje = 0; 
    } 

    if(porcentaje = -15 || porcentaje == -25)
    {
        calculoDescuento = acumuladorPrecio*porcentaje/100; 
        totalDescuento = acumuladorPrecio + calculoDescuento; 
    }
   
    if(cantidadArena > cantidadCemento && cantidadArena > cantidadCal)
    {
        mayorCantidadBolsas = "Arena"
    }else if(cantidadCemento > cantidadCal && cantidadCemento >= cantidadArena)
    {
        mayorCantidadBolsas = "Cemento"
    }else{
        mayorCantidadBolsas = "Cal"
    } 

    if(precioArena > precioCemento && precioArena > precioCal)
    {
        mayorPrecioBolsas = "Arena"
    }else if(precioCemento > precioCal && precioCemento >= precioArena)
    {
        mayorPrecioBolsas = "Cemento"
    }else
    {
        mayorPrecioBolsas = "Cal"
    } 

    if(porcentaje == 0)
    {
        totalDescuento = "No hubo descuentos aplicados";
    }

    document.write("El total a pagar sin impuesto es: " + acumuladorPrecio + "<br>"); 
    document.write("El total a pagar con descuento aplicado es " + totalDescuento + "<br>");
    document.write("El tipo con mas cantidad de bolsas es: " + mayorCantidadBolsas + "<br>"); 
    document.write("El tipo mas caro es: " + mayorPrecioBolsas);  
}
