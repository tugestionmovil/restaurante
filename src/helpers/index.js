const formatearDinero= (valor)=>{
  //El objeto de ámbito global Intl es el espacio de nombres para el API de Internacionalización de ECMAScript, éste provee comparación de cadenas y formato de números, fechas y tiempos con sensibilidad al lenguaje
  const formatter=new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  });
return formatter.format(valor);
}
const generarId=()=>{

  /*poner un número random igual a Math.random().

Recuerda, esto nos genera un número, pero no muy random, siempre va del 0 a 1 y después la colocamos

aquí toString().

Y este toString() solamente aplica en números y después viene aquí lo que es el radix pone a treinta

y seis y  subString() para que nos elimine los caracteres del inicio, si recuerdas son unos caracteres un poco extraños*/
  
  const random=Math.random().toString(36).substring()
  const fecha=Date.now().toString(36)
  return random+fecha
}
export{
formatearDinero,
generarId
}