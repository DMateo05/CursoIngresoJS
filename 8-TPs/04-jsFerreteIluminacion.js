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
function CalcularPrecio () 
{
    // txtIdCantidad 
    // Marca 
    // txtIdprecioDescuento 

    // Variables Generales 
    let basePrecio = 35; 
    let cantidadLamparas; 
    let marcaEmpresa; 
    let resultado; 

    cantidadLamparas = document.getElementById("txtIdCantidad").value; 
    marcaEmpresa = document.getElementById("Marca").value; 

    if(cantidadLamparas > 5){ 
        // PUNTO A 
        aumentoUno = basePrecio*cantidadLamparas; 
        aumentoUnoBis = aumentoUno*descuentoUno/100; 
        aumentoTotalA = aumentoUno+aumentoUnoBis; 
        document.getElementById("txtIdprecioDescuento").value = aumentoTotalA;
    }else{
        if(cantidadLamparas == 5 && marcaEmpresa == "ArgentinaLuz"){ 
            // PUNTO B 
            aumentoDos = basePrecio*cantidadLamparas; 
            aumentoDosBis = aumentoDos*descuentoDos/100; 
            aumentoTotalB = aumentoDos+aumentoDosBis; 
            document.getElementById("txtIdprecioDescuento").value = aumentoTotalB;
        }else{
            if(marcaEmpresa != "ArgentinaLuz"){
                // PUNTO B 
                aumentoDos = basePrecio*cantidadLamparas; 
                aumentoDosBis = aumentoDos*descuentoTres/100; 
                aumentoTotalB = aumentoDos + aumentoDos; 
                document.getElementById("txtIdprecioDescuento").value = aumentoTotalB;
            }
        }
    } 
    if(cantidadLamparas == 4 && (marcaEmpresa == "ArgentinaLuz" || marcaEmpresa == "FelipeLamparas")){
        // PUNTO C 
        aumentoTres = basePrecio*cantidadLamparas; 
        aumentoTresBis = aumentoTres*descuentoCuatro/100; 
        aumentoTotalC = aumentoTres+aumentoTresBis; 
        document.getElementById("txtIdprecioDescuento").value = aumentoTotalC; 
    }else{
        if(marcaEmpresa != "ArgentinaLuz" || marcaEmpresa != "FelipeLamparas"){
            // PUNTO C 
            aumentoTres = basePrecio*cantidadLamparas; 
            aumentoTresBis = aumentoTres*descuentoCinco/100; 
            aumentoTotalC = aumentoTres+aumentoTresBis; 
            document.getElementById("txtIdprecioDescuento").value = aumentoTotalC; 
        }
    } 

    if(cantidadLamparas == 3 && marcaEmpresa == "ArgentinaLuz"){ 
        // PUNTO D
        aumentoCuatro = basePrecio*cantidadLamparas; 
        aumentoCuatroBis = aumentoCuatro*descuentoSeis/100; 
        aumentoTotalD = aumentoCuatro+aumentoCuatroBis; 
        document.getElementById("txtIdprecioDescuento").value = aumentoTotalD; 
    }else{
        if(marcaEmpresa != "ArgentinaLuz" && marcaEmpresa == "FelipeLamparas"){ 
            // PUNTO D 
            aumentoCuatro = basePrecio*cantidadLamparas; 
            aumentoCuatroBis = aumentoCuatro*descuentoSiete/100; 
            aumentoTotalD = aumentoCuatro+aumentoCuatroBis; 
            document.getElementById("txtIdprecioDescuento").value = aumentoTotalD; 
        }else{
            if(marcaEmpresa != "FelipeLamparas"){ 
                // PUNTO D 
                aumentoCuatro = basePrecio*cantidadLamparas; 
                aumentoCuatroBis = aumentoCuatro*descuentoOcho/100; 
                aumentoTotalD = aumentoCuatro+aumentoCuatroBis; 
                document.getElementById("txtIdprecioDescuento").value = aumentoTotalD; 

            }
        }
    } 




}
