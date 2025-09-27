console.log('bai3') ; 
const myBtnElement = document.getElementById('myBtn') ; 

const myText = document.getElementById('myTitle') ; 

myBtnElement.addEventListener('click' , ()=>{
    console.log('da kich hoat') ; 
    myText.innerText = "Move to page orther" ; 
    myText.style.color = "red" ; 
    myText.style.backgroundColor = 'green' ; 
    myText.classList.add("text", 'hane') ; 
})

const backBtn = document.getElementById('backbut') ; 
backBtn.addEventListener('click' , ()=>{
    myText.innerText = "Chào các bạn !" ; 
    myText.style.color = "black" ; 
    myText.style.backgroundColor = 'unset' ; 
    myText.classList.remove("text", 'hane')
})
//inner html : co the truyen ca doan code html vao gom các thẻ 
//inner text : chỉ thay đổi đoạn text đc gắn id 

//style.  = "" ; 
//classList.add("" , "") ; 
