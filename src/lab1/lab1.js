const fullName = "Nguyen Van Ha" ; 
const birthYear = 2005 ; 
const isStudent = true ; 

const today = new Date() ; 
const currentYear = today.getFullYear() ; 

const age = currentYear - birthYear ; 
console.log(`Name:${fullName} , Age:${age} , Sinh vien:${isStudent}`) ; 
