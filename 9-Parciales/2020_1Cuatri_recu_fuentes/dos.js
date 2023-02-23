/* 
Devita Mateo
Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro 
*/
function mostrar()
{
  let tipoBolsa; 
  let cantidadBolsa; 
  let precioBolsa; 
  let descuentoAplicado; 
  
  let contadorArena; 
  let contadorCemento; 
  let contadorCal; 

  let banderaMasCaro; 
  let tipoMasCaro; 
  let precioMasCaro;
  let importeTotal; 
  let importeTotalDescuento; 
  let respuesta; 

  let acumuladorBolsas; 
  let acumuladorPrecio; 

  acumuladorBolsas = 0; 
  acumuladorPrecio = 0; 
  contadorArena = 0; 
  contadorCal = 0; 
  contadorCemento = 0; 
  banderaMasCaro  = true; 
  respuesta = "si"; 

  while(respuesta == "si") 
  { 
      // Tomo el Dato y Valido el Tipo de Bolsa
      tipoBolsa = prompt("Ingrese el tipo de bolsa (arena/cal/cemento)"); 
      while(!isNaN(tipoBolsa) || tipoBolsa != "arena" && tipoBolsa != "cal" && tipoBolsa != "cemento")
      {
          tipoBolsa = prompt("Error, Ingrese el tipo de bolsa (arena/cal/cemento)");
      } 

      // Tomo el Dato y Valido la cantidad de bolsas
      cantidadBolsa = prompt("Ingrese la cantidad de Bolsas (Minimo 1 Maximo 100)"); 
      cantidadBolsa = parseInt(cantidadBolsa);
      while(isNaN(cantidadBolsa) || cantidadBolsa < 1 || cantidadBolsa > 100)
      {
          cantidadBolsa = prompt("Error, Ingrese la cantidad de Bolsas (Minimo 1 Maximo 100)"); 
          cantidadBolsa = parseInt(cantidadBolsa);
      } 

      // Tomo el Dato y Valido el precio de las bolsas
      precioBolsa = prompt("Ingrese el precio de las bolsas (Minimo 1, Hasta 10000)"); 
      precioBolsa = parseInt(precioBolsa);
      while(isNaN(precioBolsa) || precioBolsa < 1 || precioBolsa > 10000)
      {
          precioBolsa = prompt(" Error, Ingrese el precio de las bolsas (Hasta 10000)"); 
          precioBolsa = parseInt(precioBolsa);
      } 

      acumuladorPrecio = acumuladorPrecio + (precioBolsa * cantidadBolsa); 
      acumuladorBolsas = acumuladorBolsas + cantidadBolsa; 
      
      // Contador Cada tipo Bolsas 
      switch(tipoBolsa)
      {
          case "arena": 
              contadorArena = contadorArena + cantidadBolsa;
              break; 
          case "cal": 
              contadorCal = contadorCal + cantidadBolsa;
              break; 
          case "cemento": 
              contadorCemento = contadorCemento + cantidadBolsa;
              break;
      }  

      if(banderaMasCaro == true || precioMasCaro < precioBolsa)
      {
          tipoMasCaro = tipoBolsa; 
          precioMasCaro = precioBolsa; 
          banderaMasCaro = false;
      }

      // Pregunta Respuesta 
      respuesta = prompt("Desea seguir ingresando productos? si/no");
  } // FIN WHILE 


  // Calculo la cantidad de bolsas introducidas para aplicar el descuento 
  if(cantidadBolsa > 29)
  {
      descuentoAplicado = -25;  
  }else if(cantidadBolsa > 9)
  {
      descuentoAplicado = -15; 
  }else
  {
      descuentoAplicado = 0; 
  } 

}
