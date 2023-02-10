/*
Devita Mateo
4.Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. */
function CalcularPrecio() 
{
    // txtIdCantidad 
    // Marca 
    // txtIdprecioDescuento 

    // Variables 
   /* let empresa; 
    let lamparitas; 
    let porcentaje; 
    let precioBase = 35;  
    let precioVer;
    let finalUno; 
    let precioFinal; 
    let impuesto; 
    let aumento = 10; 
    let precioImpuesto; 
    let mensaje; 

    lamparitas = parseInt(document.getElementById("txtIdCantidad").value); 
    empresa = document.getElementById("Marca").value; 

    // Precio Inicial 
    precioVer = precioBase*lamparitas 

    // CONDICIONES 
    if(lamparitas > 5){
        porcentaje = 50; 
    }else if(lamparitas == 5){ 
        if(empresa == "ArgentinaLuz"){
            porcentaje = 40; 
        }else{
            porcentaje= 30; 
        }
    }else if(lamparitas == 4){
        if (empresa == "ArgentinaLuz" || empresa == "FelipeLamparas"){
            porcentaje = 25; 
        }else{
            porcentaje = 20; 
        }
    }else if(lamparitas == 3){
        if(empresa == "ArgentinaLuz"){
            porcentaje = 15;
        }else if(empresa == "FelipeLamparas"){
            porcentaje = 10; 
        }else{ 
            porcentaje = 5; 
        }
    }else{
        porcentaje = 0;
    }

    // Calculos 
    finalUno = precioVer*porcentaje/100; 
    precioFinal = precioVer - finalUno; 
    document.getElementById("txtIdprecioDescuento").value = precioFinal; 

    // PUNTO E 
    if(precioFinal >= 120){
        impuesto = precioFinal*aumento/100; 
        precioImpuesto = precioFinal + aumento; 
        mensaje = "Usted pago $" + impuesto + " de IIBB, siendo $" + precioImpuesto + " el impuesto que se pago.";
        alert(mensaje); 
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal; */ 

    // Ejercicio "Switch Marcas" "IF Cantidad"; 
    /* let porcentaje; 
    let precioBase = 35; 
    let aumento = 10; 
    let lamparitas; 
    let empresa; 
    let mensaje; 
    let precioVer; 
    let calculoDescuento; 
    let calculoFinal; 
    let ingresoBruto; 
    let ingresoFinal; 

    lamparitas = parseInt(document.getElementById("txtIdCantidad").value); 
    empresa = document.getElementById("Marca").value; 

    precioVer = precioBase*lamparitas; 

    switch(empresa)
    {
        case "ArgentinaLuz": 
            if(lamparitas >= 6){
                porcentaje = -50;
            }else if(lamparitas == 5){
                porcentaje = -40;
            }else if(lamparitas == 4){
                porcentaje = -25;
            }else if(lamparitas == 3){
                porcentaje = -15;
            }else{
                porcentaje = 0;
            }
            calculoDescuento = precioVer*porcentaje/100; 
            calculoFinal = precioVer + calculoDescuento; 
            break;
        case "FelipeLamparas": 
            if(lamparitas >= 6){
                porcentaje = -50; 
            }else if(lamparitas == 5){
                porcentaje = -30;
            }else if(lamparitas == 4){
                porcentaje = -25;
            }else if(lamparitas == 3){
                porcentaje = -10;
            }else{
                porcentaje = 0;
            }
            calculoDescuento = precioVer*porcentaje/100; 
            calculoFinal = precioVer + calculoDescuento;  
            break; 
        case "JeLuz": 
            if(lamparitas > 5){
                porcentaje = -50; 
            }else if(lamparitas == 5){
                porcentaje = -30;
            }else if(lamparitas == 4){
                porcentaje = -20;
            }else if(lamparitas == 3){
                porcentaje = -5;
            }else{
                porcentaje = 0;
            } 
            calculoDescuento = precioVer*porcentaje/100; 
            calculoFinal = precioVer + calculoDescuento; 
            break; 
        case "HazIluminacion": 
            if(lamparitas > 5){
                porcentaje = -50; 
            }else if(lamparitas == 5){
                porcentaje = -30;
            }else if(lamparitas == 4){
                porcentaje = -20;
            }else if(lamparitas == 3){
                porcentaje = -5;
            }else{
                porcentaje = 0;
            }
            calculoDescuento = precioVer*porcentaje/100; 
            calculoFinal = precioVer + calculoDescuento;  
            break;
        case "Osram": 
            if(lamparitas > 5){
                porcentaje = -50; 
            }else if(lamparitas == 5){
                porcentaje = -30;
            }else if(lamparitas == 4){
                porcentaje = -20;
            }else if(lamparitas == 3){
                porcentaje = -5;
            }else{
                porcentaje = 0;
            }
            calculoDescuento = precioVer*porcentaje/100; 
            calculoFinal = precioVer + calculoDescuento;  
            break;   
    }                
    
    if(calculoFinal >= 120){
        ingresoBruto = calculoFinal*aumento/100; 
        ingresoFinal = calculoFinal + ingresoBruto; 
        mensaje = "Usted pago $" + ingresoBruto + " de IIBB, siendo $" + ingresoFinal + " el impuesto que se pago."; 
        alert(mensaje);
    } 
    document.getElementById("txtIdprecioDescuento").value = calculoFinal; */
    // FIN EJERCICIO "Switch Marcas" "IF Cantidad" 

    // Inicio Ejercicio "Switch Cantidad" "IF Marcas"  
    /* let porcentaje; 
    let precioBase = 35; 
    let aumento = 10; 
    let lamparitas; 
    let empresa; 
    let mensaje; 
    let precioVer; 
    let calculoDescuento; 
    let calculoFinal; 
    let ingresoBruto; 
    let ingresoFinal; 

    lamparitas = parseInt(document.getElementById("txtIdCantidad").value); 
    empresa = document.getElementById("Marca").value; 

    precioVer = precioBase*lamparitas; 

    switch(lamparitas)
    {
        case 5:  
            if(empresa == "ArgentinaLuz"){
                porcentaje = -40;
            }else{
                porcentaje = -30;
            }
            break; 
        case 4: 
            if(empresa == "ArgentinaLuz" || empresa == "FelipeLamparas"){
                porcentaje = -25; 
            }else{
                porcentaje = -20;
            }
            break; 
        case 3: 
            if(empresa == "ArgentinaLuz"){
                porcentaje = -15; 
            }else if(empresa == "FelipeLamparas"){
                porcentaje = -10;
            }else{
                porcentaje = -5;
            }
            break; 
        default: 
            if(lamparitas >= 6){
                porcentaje = -50;
            }
    } 

    calculoDescuento = precioVer*porcentaje/100; 
    calculoFinal = precioVer + calculoDescuento;

    if(calculoFinal >= 120){
        ingresoBruto = calculoFinal*aumento/100; 
        ingresoFinal = calculoFinal + ingresoBruto; 
        mensaje = "Usted pago $" + ingresoBruto + " de IIBB, siendo $" + ingresoFinal + " el impuesto que se pago."; 
        alert(mensaje);
    } 
    document.getElementById("txtIdprecioDescuento").value = calculoFinal; */ 
    // Fin EJERCICIO "Switch Cantidad" "IF Marcas" 

    // Inicio Ejercicio "TODO SWITCH" 
    let porcentaje; 
    let precioBase = 35; 
    let aumento = 10; 
    let lamparitas; 
    let empresa; 
    let mensaje; 
    let precioVer; 
    let calculoDescuento; 
    let calculoFinal; 
    let ingresoBruto; 
    let ingresoFinal; 

    lamparitas = parseInt(document.getElementById("txtIdCantidad").value); 
    empresa = document.getElementById("Marca").value; 

    precioVer = precioBase*lamparitas; 

    switch(lamparitas)
    {
        case 5: 
            switch(empresa)
            {
                case "ArgentinaLuz": 
                    porcentaje = -40; 
                    break; 
                default:
                    porcentaje = -30;
            }
            break;
        case 4: 
            switch(empresa)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas": 
                    porcentaje = -25;
                    break; 
                default:
                    porcentaje = -20;
            } 
            break; 
        case 3: 
            switch(empresa)
            {
                case "ArgentinaLuz": 
                    porcentaje = -15; 
                    break; 
                case "FelipeLamparas": 
                    porcentaje = -10; 
                    break; 
                default: 
                    porcentaje = -5;
            } 
            break; 
        default: 
            switch(empresa)
            {
                default: 
                porcentaje = -50;
            }
    }  
    
    calculoDescuento = precioVer*porcentaje/100; 
    calculoFinal = precioVer + calculoDescuento;

    if(calculoFinal >= 120){
        ingresoBruto = calculoFinal*aumento/100; 
        ingresoFinal = calculoFinal + ingresoBruto; 
        mensaje = "Usted pago $" + ingresoBruto + " de IIBB, siendo $" + ingresoFinal + " el impuesto que se pago."; 
        alert(mensaje);
    } 
    document.getElementById("txtIdprecioDescuento").value = calculoFinal; 
    // FIN EJERCICIO TODO SWITCH 
}



