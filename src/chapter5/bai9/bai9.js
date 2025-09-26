console.log("video 40") ;

//method map
/**
 * for each : read data
 * map : modify data (ko lm thay doi array ban dau)
 */

const scores = [10,2,5,7,4] ; 

//for each 

scores.forEach((x,key) =>{
    console.log(key , x) ; 
})

//map :modify array

const scores2 = scores.map((x,key)=>{
    return x * 2 ; 
})
console.log("orignal" ,scores) ; 
console.log("scoresX2" ,scores2) ;  
//filter : lọc phần tử (return true || false )
const scoresThanFive = scores.filter((item,key)=>{
    return  item > 5; 
}) ; 
console.log("scoresFive : " , scoresThanFive) ; 


