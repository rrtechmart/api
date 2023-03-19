
function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUsers(data))
}


function displayUsers(users){  //here must have to give parameter, it may be data/users
    for(const user of users){
        console.log(user)      // if we want to see name,cLog(user.name) etc..

    }
   
}