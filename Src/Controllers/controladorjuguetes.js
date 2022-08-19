import { productosBD3 } from "../helpers/baseDatos3.js";
import{pintarProductos3}from "./ControladorPintar.js";
pintarProductos3(productosBD3)
import{buscarProductos3}from './controladorBuscar.js';
buscarProductos3()
import {crearProducto  } from "./crearProducto.js";

document.getElementById('carrito1').innerHTML=localStorage.getItem('cantCarrito')

let contenedor=document.getElementById('fila3')
contenedor.addEventListener('click',function(evento){
  

   let producto =crearProducto(evento)
    


    localStorage.setItem("infoProducto",JSON.stringify(producto))
    console.log(localStorage.getItem('infoProducto'))

    window.location.href='/src/views/pintarResumen.html'
})
