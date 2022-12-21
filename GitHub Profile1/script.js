import axios from "axios";

const APIURL = `https://api.github.com/users/`;

function infoGithub(response) {
    let user = document.getElementById('user');
    let bio = document.getElementById('bio');
    let avatar = document.getElementById("avatar").src = "hackanm.gif";
    let followers = document.getElementById('followers');
    let following = document.getElementById('following');
    let Repo = document.getElementById('Repo');
    

    user.innerHTML = response.data.login;
    bio.innerHTML = response.data.bio;
    avatar.innerHTML = response.data.avatar_url;
    followers.innerHTML = response.data.followers;
    following.innerHTML = response.data.following;
    Repo.innerHTML = response.data.public_repos;

}
function searchGithubUsers(user){
    let apiUrl = `https://api.github.com/users/${user}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(infoGithub);
}
function submit(event) {
    event.preventDefault();
    let formsearch = document.querySelector("#search-text");
    searchGithubUsers(formsearch.value);
    formsearch.value = '';
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", submit);

searchGithubUsers("");


   



/*
search.addEventListener("submit", userName);

const userName = async() =>{
    const res = await fetch("https://github.com/123meena-git")
    const data = await res.json();
    console.log(data);
    userName.innerHTML = data.main;
}
userName();*/





/*const extra ={
    name:search,
}
axios({
    method: 'post',
    url: APIURL,
    data: {
        extra
    }
})
fetch('https://api.github.com/users/')
.then(data=>console.log(data))
.catch(err=>console.log(err))*/

/*var form = document.getElementById("form")

form.addEventListener('submit' , function(e){
    e.preventDefault()
    var search = document.getElementById("search").value

   var originalName = search.split(' ').join('')
   

   document.getElementById("result").innerHTML = ""

   fetch("https://api.hithub.com/users/"+originalName)
   .then((result) => result.json())
   .then((data) => {
    console.log(data)

    document.getElementById("result").innerHTML = `
    <a target="_blank" href="https://www.hithub.com/${originalName}"><img src="${data.avatar_url}'/></a>
    `
   
   })
})
*/