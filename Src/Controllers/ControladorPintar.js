export function pintarProductos1(productos){

    let fila1=document.getElementById('fila1')
    fila1.innerHTML=""

    productos.forEach(function(producto){
        let columna=document.createElement("div")
        columna.classList.add("col","my-3")    
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","text-center")
        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid","w-100","h-100")
        fotoProducto.src=producto.fotos[0]
        let nombreProducto=document.createElement("h3")
        nombreProducto.classList.add('fw-bold')
        nombreProducto.textContent=producto.nombre
        let precioProducto=document.createElement("h2")
        precioProducto.classList.add('fw-bold')
        precioProducto.textContent= '$ '+producto.precio+ ' COP'
        let descripcionproducto=document.createElement("p")
        descripcionproducto.classList.add('d-none')
        descripcionproducto.textContent=producto.descripcion
        columna.addEventListener("mouseover",function(){
            fotoProducto.src=producto.fotos[1]
        })
        columna.addEventListener("mouseleave",function(){
            fotoProducto.src=producto.fotos[0]
        })
        tarjeta.appendChild(nombreProducto)
        tarjeta.appendChild(fotoProducto)
        tarjeta.appendChild(precioProducto)
        tarjeta.appendChild(descripcionproducto)
        columna.appendChild(tarjeta)
        fila1.appendChild(columna)
    })
}
export function pintarProductos2(productos){
    let fila2 =document.getElementById('fila2')
    fila2.innerHTML=""
            productos.forEach(function(producto){
            let columna=document.createElement("div")
            columna.classList.add("col","my-3")
            let tarjeta=document.createElement("div")
            tarjeta.classList.add("card","h-100","text-center")
            let fotoProducto=document.createElement("img")
            fotoProducto.classList.add("img-fluid","w-100","h-100")
            fotoProducto.src=producto.fotos[0]
            let nombreProducto=document.createElement("h3")
            nombreProducto.classList.add('fw-bold')
            nombreProducto.textContent=producto.nombre
            let precioProducto=document.createElement("h2")
            precioProducto.classList.add('fw-bold')
            precioProducto.textContent= '$ '+producto.precio+ ' COP'
            let descripcionproducto=document.createElement("p")
            descripcionproducto.classList.add('d-none')
            descripcionproducto.textContent=producto.descripcion
            columna.addEventListener("mouseover",function(){
                fotoProducto.src=producto.fotos[1]
            })
            columna.addEventListener("mouseleave",function(){
                fotoProducto.src=producto.fotos[0]
            })
            tarjeta.appendChild(nombreProducto)
            tarjeta.appendChild(fotoProducto)
            tarjeta.appendChild(precioProducto)
            tarjeta.appendChild(descripcionproducto)
            columna.appendChild(tarjeta)
            fila2.appendChild(columna)
        })
}
export function pintarProductos3(productos){
            let fila3 =document.getElementById('fila3')
            fila3.innerHTML=""
    
            productos.forEach(function(producto){
            
                let columna=document.createElement("div")
                columna.classList.add("col","my-3")
            
                let tarjeta=document.createElement("div")
                tarjeta.classList.add("card","h-100","text-center")
            
                let fotoProducto=document.createElement("img")
                fotoProducto.classList.add("img-fluid","w-100","h-100")
                fotoProducto.src=producto.fotos[0]
    
                let nombreProducto=document.createElement("h3")
                nombreProducto.classList.add('fw-bold')
                nombreProducto.textContent=producto.nombre
            
                let precioProducto=document.createElement("h2")
                precioProducto.classList.add('fw-bold')
                precioProducto.textContent= '$ '+producto.precio+ ' COP'
    
                let descripcionproducto=document.createElement("p")
                descripcionproducto.classList.add('d-none')
                descripcionproducto.textContent=producto.descripcion
    
                columna.addEventListener("mouseover",function(){
                    fotoProducto.src=producto.fotos[1]
                })
                columna.addEventListener("mouseleave",function(){
                    fotoProducto.src=producto.fotos[0]
                })
                tarjeta.appendChild(nombreProducto)
                tarjeta.appendChild(fotoProducto)
                tarjeta.appendChild(precioProducto)
                tarjeta.appendChild(descripcionproducto)
                columna.appendChild(tarjeta)
                fila3.appendChild(columna)
            })
        
        }
    
    