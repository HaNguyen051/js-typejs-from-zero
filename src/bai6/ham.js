console.log("video 30") ; 

function greeting(){
    console.log("say hi") ; 
}

//call
greeting() ; 

 
 function sum1(a , b){ //params
    console.log (a + b) ; 
    //return a + b ; 
 }
sum1(4,7) ;//argument(input)
sum1("ha" , " nguyen") ; 

//arrow function 
const sum = (a,b) => {
    return a + b ; 
}

console.log(sum(4,7)) ; 

// (function(){
//     console.log("say hi ") ; 
// })() ; 
let sum3 = (a , b , c) => {
    if(typeof a !== 'number')
    {
        return ;
    }
    return a  + b  + c; 
}
console.log(sum3(1,2,3)) ; 

//Scope 
/*

bien so trong ngoc nhon 
khac nhau giua var va let

*/ 
