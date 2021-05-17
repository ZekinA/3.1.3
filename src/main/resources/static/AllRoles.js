function getRoles() {
    fetch("http://localhost:8080/api/users/allRoles").then((res) => res.json())
        .then((data) => {
            let output = "";
            data.forEach(function (roles) {
                output += `<option>${roles.roles.name}</option>`;
            });

            document.getElementById("roleNew").innerHTML = output;
            document.getElementById("roleEdit").innerHTML = output;
            document.getElementById("roleDelete").innerHTML = output;
        })
}

getRoles()