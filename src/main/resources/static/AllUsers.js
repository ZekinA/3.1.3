function getUsers() {
    fetch("http://localhost:8080/api/users")
        .then((res) => res.json())
        .then((data) => {
            let output = "";
            data.forEach(function (user) {

                let userRoles = "";
                for (let i = 0; i < user.roles.length; i++){
                    userRoles+=`${user.roles[i].name} `
                }

                output += `
                <tr>
                <td id="name${user.id}">${user.name}</td> 
                <td id="surname${user.id}">${user.surname}</td>
                <td id="department${user.id}">${user.department}</td>
                <td id="salary${user.id}">${user.salary}</td>
                <td id="password${user.id}">${user.password}</td>
                <td id="roles${user.id}">${userRoles}</td>
                <td>
                <a class="btn btn-info" role="button"
                data-toggle="modal" data-target="#edit" id="callModalEdit"
                onclick="openModalWindow(${user.id})">Edit</a>
                </td>
                <td>
                <a class="btn btn-danger" role="button"
                data-toggle="modal" data-target="#delete" id="delete-post"
                onclick="openModalWindowDel(${user.id})">Delete</a>
                </td>     
              </tr>
          `;
            });
            document.getElementById("allUsers").innerHTML = output;
        })
}
getUsers()