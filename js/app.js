let parent = document.querySelector('.nav__menu');
let button = document.querySelector('.nav__button');
let items = document.querySelectorAll('.nav-link');



if(window.screen.availWidth <= 768){
    button.addEventListener('click', ()=> {
        
        parent.classList.toggle('active');
        items.forEach(link =>{
            link.addEventListener('click', ()=> {
                if(parent.classList.contains('active')){
                    parent.classList.remove('active')
                }
            })
        })
    })
}
