const panel= document.querySelectorAll('.panels')
panel.forEach(panels=>{
panels.addEventListener('click',()=>{
    removeactiveclasses()
    panels.classList.add('active')
})
 })

function removeactiveclasses(){
    panel.forEach(panels=>
            panels.classList.remove('active')
        )
         
}