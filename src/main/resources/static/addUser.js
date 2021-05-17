document.getElementById("addNewUser").addEventListener("submit", addNewUser);

let elementCreateUserRoles = document.getElementById('roleNew');
function addNewUser(e){
    e.preventDefault();
    let newName = document.getElementById("addName").value;
    let newSurname = document.getElementById("addSurname").value;
    let newDepartment = document.getElementById("addDepartment").value;
    let newSalary = document.getElementById("addSalary").value;
    let newPassword = document.getElementById("addPassword").value;
    let roleSelectedValues = Array.from(elementCreateUserRoles.selectedOptions).map(el => el.value);
    let roleArray = convertToRoleSet(roleSelectedValues);

    fetch("http://localhost:8080/api/users",{
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            name: newName,
            surname: newSurname,
            department: newDepartment,
            salary: newSalary,
            password: newPassword,
            roles: roleArray
        })
    })
        .finally(() => {
            document.getElementById("idUsersTable").click();
            getUsers();
            document.getElementById("addNewUser").reset();
        })
}

function convertToRoleSet(Array) {
    let roleArray = [];
    if (Array.indexOf("ROLE_USER") !== -1) {
        roleArray.unshift({id: 4, name: "ROLE_USER"});
    }
    if (Array.indexOf("ROLE_ADMIN") !== -1) {
        roleArray.unshift({id: 3, name: "ROLE_ADMIN"});
    }
    return roleArray;
}