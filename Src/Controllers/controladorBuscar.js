import { productosBD1 } from '../helpers/baseDatos1.js';
import { productosBD2 } from '../helpers/baseDatos2.js';
import { productosBD3 } from '../helpers/baseDatos3.js';
import { pintarProductos1, pintarProductos2, pintarProductos3} from './controladorPintar.js'

export function buscarProductos1(){
    let buscador=document.getElementById("busqueda")
    buscador.addEventListener('keyup',function(evento){
        let productobuscado=evento.target.value
        
        let filtro=productosBD1.filter(function(producto){
            
            return (producto.nombre.toLowerCase().includes(productobuscado.toLowerCase()))
        })
        console.log(filtro)
        pintarProductos1(filtro)
    })

}
export function buscarProductos2(){
    let buscador=document.getElementById("busqueda")
    buscador.addEventListener('keyup',function(evento){
        let productobuscado=evento.target.value
        
        let filtro=productosBD2.filter(function(producto){
            
            return (producto.nombre.toLowerCase().includes(productobuscado.toLowerCase()))
        })
        console.log(filtro)
        pintarProductos2(filtro)
    })

}
export function buscarProductos3(){
    let buscador=document.getElementById("busqueda")
    buscador.addEventListener('keyup',function(evento){
        let productobuscado=evento.target.value
        
        let filtro=productosBD3.filter(function(producto){
            
            return (producto.nombre.toLowerCase().includes(productobuscado.toLowerCase()))
        })
        console.log(filtro)
        pintarProductos3(filtro)
    })

}


