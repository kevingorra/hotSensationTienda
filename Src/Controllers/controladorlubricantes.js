import { productosBD1 } from "../helpers/baseDatos1.js";
import{pintarProductos1}from "./ControladorPintar.js";
pintarProductos1(productosBD1)
import{buscarProductos1}from './controladorBuscar.js';
buscarProductos1()
import {crearProducto  } from "./crearProducto.js";

// document.getElementById('carrito1').innerHTML=localStorage.getItem('cantCarrito')

let contenedor=document.getElementById('fila1')
contenedor.addEventListener('click',function(evento){
  

   let producto =crearProducto(evento)
    


    localStorage.setItem("infoProducto",JSON.stringify(producto))
    console.log(localStorage.getItem('infoProducto'))

    window.location.href='/src/views/pintarResumen.html'
})
