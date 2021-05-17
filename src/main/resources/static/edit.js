document.getElementById("editModal").addEventListener("submit",editPost)

function editPost(e) {
    e.preventDefault();

    let id = document.getElementById("idEdit").value;
    let name = document.getElementById("nameEdit").value;
    let surname = document.getElementById("surNameEdit").value;
    let department = document.getElementById("departmentEdit").value;
    let salary = document.getElementById("salaryEdit").value;
    let password = document.getElementById("passwordEdit").value;
    let elementUpdateUserRoles = document.getElementById('roleEdit');
    let roleSelectedValues = Array.from(elementUpdateUserRoles.selectedOptions).map(el => el.value);
    let rolesArr = convertToRoleSet(roleSelectedValues);

    fetch("http://localhost:8080/api/users", {
        method:"PUT",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            id:id,
            name:name,
            surname:surname,
            department:department,
            salary:salary,
            password:password,
            roles:rolesArr
        })
    }).finally(() => {
        $('#edit').modal("hide")
        getUsers();
    })
}