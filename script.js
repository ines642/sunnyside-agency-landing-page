const navbar=document.querySelector('.navbar')
const menu=document.querySelector('.menu')
const creative=document.querySelector('.creative')


menu.addEventListener('mouseover' ,()=>{
    navbar.style.display='flex'
    creative.style.display='none'
    menu.style.transition='0.5s'
    menu.style.opacity=0.6
})
//mouse out event is fired when mmouse leave the parent or one of it children
//mouseleave event is fired when mmouse leave the parent onely
navbar.addEventListener('mouseleave' ,()=>{
    navbar.style.display='none'
    creative.style.display='block'
    menu.style.transition='0.5s'

})
