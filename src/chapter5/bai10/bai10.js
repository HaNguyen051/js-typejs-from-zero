//OBJECT

//key:value ,
const student1 = {
    name : "van" , 
    age : 19 , 
    address : {
        city : "Tu son" , 
        country : "viet nam" , 
    }
}
const student2 = {
    name : "ha" , 
    address : {
        city : "Tu son" , 
        country : "viet nam" , 
    }
}
const student =[student1 , student2] ; 
console.log(student) ; 

const person = {
    myName : "haNguyen" , 
    ages : 19  , 
}
//get data 

console.log(person.ages) ; 
//set data
person.address = "tu son" ; 
console.log(person) ; 
//delete data  

delete person.ages ; 
console.log(person) ; 

