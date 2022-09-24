const nav=document.querySelector('.nav')
const menu=document.querySelector('.menu')
const header=document.querySelector('.header')
const desription=document.querySelector('.desription')

console.log(header,desription);
menu.addEventListener('mouseover' ,()=>{
    nav.style.display='flex'
    menu.style.opacity=0.6
})
