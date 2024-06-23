const nombre=document.getElementById('nombre');
const password=document.getElementById('password');
const btn=document.getElementById('btn');

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    const data ={
        nombre: nombre.value,
        password: password.value 
    }
    console.log(data)
})