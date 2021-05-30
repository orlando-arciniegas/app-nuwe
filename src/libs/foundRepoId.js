const fetch = require("node-fetch");

let url = "https://api.github.com/users/gagocarrilloedgar/repos"

fetch(url)
    .then(res => res.json())
    .then(repos => {
        repos.forEach(repo => {
        if(repo.name == "HTSV2"){
            console.log(repo.id)
        }
    })
})

// Result: 352946651 //