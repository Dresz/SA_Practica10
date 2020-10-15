
function entregado(cuerpo){
  console.log('estado de la orden: '+cuerpo)    
    estado = "entregada"
    console.log(estado)
    return estado
}
function orden(orden){
  console.log('Orden recibida: '+orden)
  return 'pedido recibido y en camino a entregar'
}
function estado2(orden){
    console.log('estado de la orden: '+orden)
    estado = 'en camino a entregar la orden'
    console.log(estado)
    return estado
}
module.exports.entregado = entregado;
module.exports.orden = orden;
module.exports.estado2 = estado2;
