
function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
}
function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        console.log(post);
        const div = document.createElement('div');
        div.innerHTML = `
        <h2>Title: ${post.title}</h2>
        <h4> ID: ${post.id}</h4>
        <p> Description: ${post.body}</p>
        
        `

        postContainer.appendChild(div);

    }

}

loadPosts();