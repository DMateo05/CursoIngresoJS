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
    let empresa; 
    let lamparitas; 
    let porcentaje; 
    let precioBase = 35;  
    let precioVer;
    let finalUno; 
    let precioFinal; 
    let impuesto; 
    let aumento = 10; 
    let precioImpuesto; 

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
        }else if(empresa = "FelipeLamparas"){
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
    }
    document.getElementById("txtIdprecioDescuento").value = precioFinal; 
}



