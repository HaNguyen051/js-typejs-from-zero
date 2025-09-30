


//callback => promise => async/await

//promise 
fetch("http://localhost:8000/users") 
.then(data =>data.json())
.then(d => {console.log("fetch promise",d)})

//async

const fetchData = async() =>{
    const res = await fetch("http://localhost:8000/users")  ; 
    const data = await res.json() ; //chuyen tu promise sang object
    console.log("fetch async/await" , data) ; 
}
fetchData() ; 