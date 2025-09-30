
//
const fetchData  = async() => {
    const tmp  = await fetch ("http://localhost:8000/users") ; 
    const data = await tmp.json() ; 
    //insert data to html 
    const tbody = document.querySelector("#users tbody") ; 

    if(data && data.length)
    {   
        let html = '' ; 
        data.forEach((user , index) => {
            html += `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            </tr>
        `;
        });
        tbody.innerHTML = html ; 
    }
    
    
}
fetchData() ; 







