
const myUserElement =document.getElementById("username") ; 
const myPassElement =document.getElementById("pass") ; 
const myButtonElement = document.getElementById("btn") ; 

myButtonElement.addEventListener("click" , () =>{
    const userName = myUserElement.value ; 
    const passWord = myPassElement.value ; 
    if(userName === "hoidanit@gmail.com" && passWord ==="123456")
    {
        alert("Đăng nhập thành công!") ; 
        window.location.href = "success.html" ; 
    }
    else{
        alert("Username hoặc Password không chính xác!") ; 
      myUserElement.style.borderColor = "red" ; 
       myPassElement.style.borderColor = "red" ; 

    }
})
