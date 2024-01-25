window.addEventListener('DOMContentLoaded',setup)

function setup(){
    const animation_elements = document.querySelectorAll('.animation_scroll');

    const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animation');
            
     }
        else{
            entry.target.classList.remove('animation');
        }
    })
},{
    threshold:0.5
});
for(let i=0;i<animation_elements.length;i++){
    const el = animation_elements[i];
    observer.observe(el);
}
};

const scrollUp = () =>{
    window.scrollTo(0,0);
}
const pScroll = () =>{
    window.scrollTo(0,1200)
   
}
const tScroll = () =>{
    window.scrollTo(0,700)
    
}

