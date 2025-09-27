const element = document.getElementById("do"); 
console.log(element) ; 
element.addEventListener("click", function(){ alert("Hello World!"); });

const item = document.querySelector(".ha") ; 
console.log(item) ;
const handelClick = () => {
    console.log("kimochi") ; 
}
item.addEventListener("click" ,handelClick)