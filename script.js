document.getElementById('btnGit').addEventListener('click', showGithubUsers)

function showGithubUsers() {
    let username = document.getElementById('git').value;
    let url = 'https://api.github.com/users/' + username
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                document.getElementById('errorGit').innerHTML = `<h3>Profile Not Found</h3>`
            } else {
                console.log(data)
                document.getElementById('profileImg').innerHTML = `<img src="${data.avatar_url}" style="width:200px">`
                document.getElementById('bioGit').innerHTML = `<p>${data.bio}</p>`
                document.getElementById('nameGit').innerHTML = `<p>${data.name}</p>`
                document.getElementById('userGit').innerHTML = `<p>${data.login}</p>`
                document.getElementById('followersGit').innerHTML = `<i class="fas fa-user-friends"></i> <p>${data.followers} followers</p> <i class="fas fa-user-friends"></i> <p>${data.following} following</p>`
                document.getElementById('reposGit').innerHTML = `<i class="fas fa-laptop"></i><p>${data.public_repos} Repositorios</p>`
                document.getElementById('locationGit').innerHTML = `<i class="fas fa-map-marker-alt"></i> <p>${data.location}</p>`
                document.getElementById('blogGit').innerHTML = `<i class="fas fa-link"></i>  <a href="${data.blog}" target="_blank">${data.blog}</a>`

            }
        }).catch(e => {
            console.log('not found')
        })
}