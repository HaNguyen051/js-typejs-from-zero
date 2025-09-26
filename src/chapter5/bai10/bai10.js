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

//object su dung for..in , for..off
//forEach
student.forEach((value , key)=>{
    console.log("key :" , key , "address : " , value.address) ; 
})

//for..in : duyet qua tat ca cac thuoc tinh 
const person1 = {
    myName : "haNguyen" , 
    ages : 19  , 
    address  : "ha noi"
}
for(let key in person1)
{
        console.log(key , person1[key]) ; 
}
//for..of : lay gia tri 

// for(let value of Object.values(person1))
// {
//     console.log(value) ; 
// }

for(let value of Object.entries(person1))
{
    console.log(value) ; 
}