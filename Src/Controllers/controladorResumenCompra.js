import {pintarResumenCompra}from './controladorPintarResumen.js'
document.getElementById('carrito1').innerHTML=localStorage.getItem('cantCarrito')
let carrito =JSON.parse(localStorage.getItem('carrito'))
let totalvlr=0
if (carrito==null){
    pintarResumenCompra('../../assets/img/carritovacio.jpg','carrito vacio',true,false,null,false,null,null)
}else{
    carrito.forEach(function(producto){
        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,true,true) 
        totalvlr=totalvlr+(Number(producto.precio)*Number(producto.cantidad))
        let total =document.getElementById('totalcompra')
        total.textContent='total: '+totalvlr
})

}


let botonLimpiar=document.getElementById('botonLimpiar')
botonLimpiar.addEventListener('click',function(evento){
    localStorage.removeItem('carrito')
    localStorage.removeItem('cantCarrito')

    let contenedor=document.getElementById('contenedor')
    contenedor.innerHTML=''
    pintarResumenCompra('../../Assets/Img/carritovacio.jpg','carrito vacio',true,false,null,false,null)


})