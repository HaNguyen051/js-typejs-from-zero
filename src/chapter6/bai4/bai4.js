/**
 * localStorage
 * json(stringify/parse)
 */ 
const myInput = document.getElementById("myin") ; 
const myButtonElement = document.getElementById("myBtn") ; 
const prevName = localStorage.getItem("hanguyen",myInput.value) ; 
if(prevName)
{
    document.getElementById("pre").innerHTML = `<b>${prevName}</b>`;
}
myButtonElement.addEventListener("click" , () =>{
    // console.log(myButtonElement) ; 
    // alert("warning!") ;
    localStorage.setItem("hanguyen" , myInput.value) ; 
    console.log(myInput.value)   ; 
    document.getElementById("name").innerHTML =`<b>${myInput.value}</b>`;
}
)
//localStorage
