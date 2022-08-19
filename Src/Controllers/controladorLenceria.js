import { productosBD2 } from "../helpers/baseDatos2.js";
import{pintarProductos2}from "./ControladorPintar.js";
pintarProductos2(productosBD2)
import{buscarProductos2}from './controladorBuscar.js';
buscarProductos2()

import { crearProducto } from "./crearProducto.js";

document.getElementById('carrito1').innerHTML=localStorage.getItem('cantCarrito')

let contenedor=document.getElementById('fila2')
contenedor.addEventListener('click',function(evento){
  

   let producto =crearProducto(evento)
    


    localStorage.setItem("infoProducto",JSON.stringify(producto))
    console.log(localStorage.getItem('infoProducto'))

    window.location.href='/src/views/pintarResumen.html'
})
