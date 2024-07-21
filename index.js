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

// const points = 10

function ten(){
    const points = 10
    let fuck = points * 10             ------> variable shadowing
    console.log(fuck)
}
console.log(points)
ten();

function TDZ(){
    console.log(age)
    let age;                         --------> Temporal Dead Zone
    console.log(age)
    age = 20;
}
TDZ();

let obj = {
    name:'ajay',
    display:function(){
        console.log(this.name)
    }
}                                        ------------> Implicit and Explicit Binding
let obj2 = {
    name:'akash'
}
obj.display.call(obj2)

function memoize(n){
    let prevValue = []
    if( prevValue[n] ){
        return prevValue[n]
    }
    let sqrt = n * n                 ----------------> caching and dmemoization
    prevValue[n] = sqrt
    return prevValue[n]
}
const result = memoize(9234948)
console.time('first')
console.log(result)
console.timeEnd('first')

function add(a){
    return function (b){
        if(b) return add(a+b)
            return a                                 -------> function currying 
    }
}
console.log(add(10)(20)(30)(40)())

function rotate(matrix){
    //transpose
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix.length;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    //reverse elements

    for(let i=0 ; i<matrix.length;i++){
        for(let j=0; j<matrix.length/2;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][matrix.length -1 -j];
            matrix[i][matrix.length -1 -j] = temp;
        }
    }
    return matrix
}
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]))

function rotate(matrix) {
    // Transpose the matrix
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i; j < matrix[i].length; j++) { // start j from i
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    // Reverse each row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }

    return matrix;
}

console.log(rotate([[1, 2, 3, 10], [4, 5, 6 , 11], [7, 8, 9 , 12] , [12 ,14 , 15 , 16]]));

const rotate = function(matrix){
    //transpose 
    for(let i = 0 ; i < matrix.length ; i++){
        for(let j = i ; j < matrix[0].length ; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    //revrese
    for(let i = 0 ; i < matrix.length ; i ++){
        matrix[i].reverse();
    }

    return matrix;
}


