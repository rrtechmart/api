
function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data))

}

function displayUsers(users){
    const ulContainer = document.getElementById('ul-container')
    for(const user of users){
        // console.log(user.name);
        const li = document.createElement('li')
        li.innerText = user.name
        
        ulContainer.appendChild(li);
    }
}