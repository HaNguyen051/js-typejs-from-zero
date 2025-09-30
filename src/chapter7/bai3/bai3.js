

//fetch = > raw data (Respone) => object(json) :  lay du lieu tu api
const tmp = fetch("http://localhost:8000/users") 

tmp
    .then(data => data.json()) //promise 
    .then(d =>{console.log(d)}) ; 




