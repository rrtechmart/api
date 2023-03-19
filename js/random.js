
function loadUsers(){
    const url = 'https://randomuser.me/api/?gender=female'
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data));
}

function displayUsers(users){
    document.getElementById('her-email').innerHTML = users.results[0].email
    document.getElementById('her-name').innerHTML = users.results[0].name.last
    
}
loadUsers();