
let p = document.querySelectorAll(".pic");

p.forEach( p =>{

    p.addEventListener('click',()=>{
        console.log(123)

        removeActiveClasses()

        p.classList.add('active')
       
    })

})

function removeActiveClasses(){ 

p . forEach ( p => {
p.classList.remove('active')
})

}