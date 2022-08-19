document.getElementById('carrito1').innerHTML=localStorage.getItem('cantCarrito')

let registro1 =document.getElementById('registro2')
let registro2 =document.getElementById('registro3')
let registro =document.getElementById('registro1')
registro.addEventListener('click',function(){
    let alerta =document.getElementById('alerta1')
    alerta.classList.remove('invisible')
    setTimeout(function(){
        alerta.classList.add('invisible')
},3000)

registro1.value=""
registro2.value=""
   
    
    
  

    
})

let agregar =document.getElementById('agregar')
agregar.addEventListener('click',function(){
    let alerta =document.getElementById('alerta')
    alerta.classList.remove('invisible')
    setTimeout(function(){
        alerta.classList.add('invisible')
},3000)
    correo1.value=""
   
    
    
  

    
})