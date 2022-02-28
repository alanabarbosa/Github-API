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
                document.getElementById('profileImg').innerHTML = data.avatar_url ? `<img src="${data.avatar_url}" style="width:200px">` : document.getElementById('profileImg').innerHTML
                document.getElementById('bioGit').innerHTML = `<p>${data.bio ? data.bio : '<i>Biografia não informada</i>'}</p>`
                document.getElementById('nameGit').innerHTML = `<p>${data.name ? data.name : '<i>Nome não informado</i>'}</p>`
                document.getElementById('userGit').innerHTML = `<p>${data.login}</p>`
                document.getElementById('followersGit').innerHTML = `<i class="fas fa-user-friends"></i> <p>${data.followers} seguidores</p> &ensp; <i class="fas fa-user-friends"></i> <p>${data.following} seguindo</p>`
                document.getElementById('reposGit').innerHTML = `<i class="fas fa-laptop"></i><p>${data.public_repos} repositórios</p>`
                document.getElementById('locationGit').innerHTML = `<i class="fas fa-map-marker-alt"></i> <p>${data.location ? data.location : '<i>Localização não informada</i>'}</p>`
                document.getElementById('blogGit').innerHTML = `<i class="fas fa-link"></i> ${data.blog ? `<a href="${data.blog}" target="_blank">${data.blog}</a>` : '<i>Link não informado</i>' }`

            }
        }).catch(e => {
            console.log('not found')
        })
}