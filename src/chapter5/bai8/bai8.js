//array
const names = ["hoidanit" ,"eric" , "bla bla"] ; 
const others = ["hoidanit" ,25 , "bla bla"] ; 
console.log(names) ; 
console.log(others) ; 

//arr[index] 
names[2] = "update name" ; 

console.log(names[2]) ; 

//Thêm phần tử
/**
 * cuối mảng : push()
 * đầu mảng : unshift()
 */

//Xoá phần tử 
/**
 * cuối mảng :pop()
 * đầu mảng :shift()
 */

names.pop() ;  
console.log(names) ; 
names.push(1 , "oke>") ; 
console.log(names) ; 

const myClass = ["ha nguyen" , "hane" , "thao van" , "thu trang"] ; 
//duyet mang bth
for(let i = 0 ; i < myClass.length ; i++){
    console.log("i = " ,i ,"with value =" ,myClass[i]) ; 
}
//foreach

myClass.forEach(function(value , index){
    console.log(value, index) ; 
})
//for each theo arrow function 

myClass.forEach((value,key)=>{
    console.log(value , key) ; 
})
