//cliente
const axios = require('axios')

const ip = process.env.IP || "127.0.0.1";
const port =  process.env.PORT || 80;

axios.post('http://'+ip+':8082/pedido', {
  combo: 'Combo de cuarto de libra normal con coca-cola'
})
.then((res) => {
  //console.log(`statusCode: ${res.statusCode}`)
  console.log("Estado:")
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})

function function2() {
    axios.post('http://'+ip+':8082/estado', {
  orden: '1154'
})
.then((res) => {
  //console.log(`statusCode: ${res.statusCode}`)
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})
}
setTimeout(function2, 3000);

function function3() {
    axios.post('http://'+ip+':8082/estado2', {
  orden: '1154'
})
.then((res) => {
  //console.log(`statusCode: ${res.statusCode}`)
  console.log("Estado:")
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})

}
function function4() {
    axios.post('http://'+ip+':8082/entregado', {
    orden: '1154'
  })
  .then((res) => {
    //console.log(`statusCode: ${res.statusCode}`)
    console.log(res.data)
  })
  .catch((error) => {
    console.error(error)
  })
}
setTimeout(function3, 7000);
setTimeout(function4, 9000);
