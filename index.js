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
window.addEventListener('DOMContentLoaded',setup2);
function setup2(){
    const animation_elements2 = document.querySelectorAll('.animation_on_scroll');

const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('animate');
            
     }
        else{
            entry.target.classList.remove('animate');
        }
    })
},{
    threshold:0.5
});
for(let j=0;j<animation_elements2.length;j++){
    const el1 = animation_elements2[j];
    observer1.observe(el1);
}
}


