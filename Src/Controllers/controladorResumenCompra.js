import {pintarResumenCompra}from './controladorPintarResumen.js'
document.getElementById('carrito1').innerHTML=localStorage.getItem('cantCarrito')
let carrito =JSON.parse(localStorage.getItem('carrito'))
let totalvlr=0
let moneda = document.getElementById("btnmoneda")
let monedatxt = document.getElementById("monedatxt")
if (carrito==null){
    pintarResumenCompra('../../assets/img/carritovacio.jpg','carrito vacio',true,false,null,false,null,null)
}else{
    carrito.forEach(function(producto){
        pintarResumenCompra(producto.foto,producto.nombre,false,true,producto.precio,true,producto.cantidad,true,true) 
        totalvlr=totalvlr+(Number(producto.precio)*Number(producto.cantidad))
        let total =document.getElementById('totalcompra')
        total.textContent='total: '+totalvlr
        let botonDolar=document.getElementById('btnDolar')
        botonDolar.addEventListener('click',function(evento){
            total.textContent='Total: '+ (totalvlr/4000)
        })
        let botonMoneda=document.getElementById('btnMoneda')
        botonMoneda.addEventListener('click',function(evento){
        total.textContent='Total: '+ (totalvlr)
        })
       
})

}


let botonLimpiar=document.getElementById('botonLimpiar')
botonLimpiar.addEventListener('click',function(evento){
    localStorage.removeItem('carrito')
    localStorage.removeItem('cantCarrito')
    localStorage.removeItem('totalcompra')
    

    let contenedor=document.getElementById('contenedor')
    contenedor.innerHTML=''
    let total =document.getElementById('totalcompra')
    total.innerHTML=''
    let cantcarrito =document.getElementById('carrito1')
    cantcarrito.textContent=0
    pintarResumenCompra('../../Assets/Img/carritovacio.jpg','carrito vacio',true,false,null,false,null)


})
