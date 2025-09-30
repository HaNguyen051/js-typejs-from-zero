//try/catch 
const a = 10 , b = 10 ; 
const doSomething = ()=>{
    if(b === 0)
    {
        throw new Error("thuc hien chia cho 0") ; 
    }
    return console.log(a / b) ; 
} ; 


try {
    doSomething() ; 
} catch (error) {
    console.log("co loi xay ra" , error) ; 
} finally {
    console.log("run final") ; 
}
