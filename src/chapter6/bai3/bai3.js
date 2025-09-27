console.log('bai3') ; 
const myBtnElement = document.getElementById('myBtn') ; 

const myText = document.getElementById('myTitle') ; 

myBtnElement.addEventListener('click' , ()=>{
    console.log('da kich hoat') ; 
    myText.innerText = "Move to page orther" ; 
})

const backBtn = document.getElementById('backbut') ; 
backBtn.addEventListener('click' , ()=>{
    myText.innerText = "Chào các bạn !" ; 
})
//inner html : co the truyen ca doan code html vao gom các thẻ 
//inner text : chỉ thay đổi đoạn text đc gắn id 