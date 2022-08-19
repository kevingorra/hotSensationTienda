export function pintarResumenCompra(fotourl,nombreMensaje,banderaBoton,banderaPrecio,precioProducto,banderaCantidad,cantidadProducto,banderaSubtotal){

    let contenedor=document.getElementById('contenedor')


    let fila=document.createElement('div')
    fila.classList.add('row','shadow','bg-dark','p-4','text-light','w-100','h-75')

    let columna1=document.createElement('div')
    columna1.classList.add('col-12', 'col-md-6','border-end' , 'text-center')

    let columna2=document.createElement('div')
    columna2.classList.add('col-12', 'col-md-6', 'align-self-center')



    let foto=document.createElement('img')
    foto.classList.add('img-fluid','w-50','h-100')
    foto.src=fotourl
    
    let nombre=document.createElement('h3')
    nombre.classList.add('text-none')
    nombre.textContent=nombreMensaje

    let boton=document.createElement('a')
    boton.classList.add('btn', 'btn-primary', 'w-50')
    boton.textContent='Ir a La Tienda'
    boton.setAttribute('href','../../index.html')


    let precio=document.createElement('h4')
    precio.textContent='Precio : '+precioProducto

    let cantidad=document.createElement('h5')
    cantidad.textContent='Cantidad : '+cantidadProducto+' Und'

    let subtotal=document.createElement('h6')
    if(precioProducto!=null){
        subtotal.textContent= "Subtotal $ "+ cantidadProducto*Number(precioProducto)
    }
    

    

    columna1.appendChild(foto)
    columna2.appendChild(nombre)
    
    if(banderaBoton){
        columna2.appendChild(boton)
    }
    if(banderaPrecio){
        columna2.appendChild(precio)
    }
    if(banderaCantidad){
        columna2.appendChild(cantidad)
    }
    if(banderaSubtotal){
        columna2.appendChild(subtotal)
    }
   
    
    fila.appendChild(columna1)
    fila.appendChild(columna2)
    contenedor.appendChild(fila)


}