const navbar=document.querySelector('.navbar')
const menu=document.querySelector('.menu')
const creative=document.querySelector('.creative')


menu.addEventListener('mouseover' ,()=>{
    navbar.style.display='flex'
    creative.style.display='none'
    menu.style.transition='2s'
    menu.style.opacity=0.6
})
menu.addEventListener('mouseout' ,()=>{
    navbar.style.display='none'
    creative.style.display='block'
    menu.style.transition='2s'

})
