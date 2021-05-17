$(document).ready(function () {
    getUser()
});

function getUser() {
    fetch('http://localhost:8080/api/user').
    then((res)=> res.json())
        .then((user)=> {
            let userRoles= "";
            for (let i = 0; i < user.roles.length; i++){
                userRoles+=`${user.roles[i].name} `
            }

            let output = "<tr>";
            output +=`
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.surname}</td>
                <td>${user.department}</td>
                <td>${user.salary}</td>
                <td type="hidden">${user.password}</td>
                <td>${userRoles}</td>
            `;
            output +="<tr>"
            document.getElementById("getUser").innerHTML = output;
        })
}

function getHeader() {
    fetch('http://localhost:8080/api/user').then((res) => res.json())
        .then((user) => {
            let userRoles = "";
            for (let i = 0; i < user.roles.length; i++) {
                userRoles += `${user.roles[i].name} `
            }
            let output = "";
            output += `${user.name} with roles: ${userRoles}`;
            document.getElementById("gHeader").innerHTML = output;
        })
}

getHeader()
getUser()