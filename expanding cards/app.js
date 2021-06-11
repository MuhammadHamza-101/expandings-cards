
let p = document.querySelectorAll(".pic");

p.forEach( p =>{

    p.addEventListener('click',()=>{
      

        removeActiveClasses();

        p.classList.add('active');
       
    })

})

function removeActiveClasses(){ 

p . forEach ( p => {

p.classList.remove('active');

})

}