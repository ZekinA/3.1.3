document.getElementById("deleteModal").addEventListener("submit",deletePost)

function deletePost(e) {
    e.preventDefault();

    let id = document.getElementById("idDelete").value;
    let name = document.getElementById("nameDelete").value;
    let surname = document.getElementById("surNameDelete").value;
    let department = document.getElementById("departmentDelete").value;
    let salary = document.getElementById("salaryDelete").value;
    let password = document.getElementById("passwordDelete").value;
    let elementUpdateUserRoles = document.getElementById('roleDelete');
    let roleSelectedValues = Array.from(elementUpdateUserRoles.selectedOptions).map(el => el.value);
    let rolesArr = convertToRoleSet(roleSelectedValues);

    fetch("http://localhost:8080/api/users/", {
        method:"DELETE",
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
        $('#delete').modal("hide")
        getUsers();
    })
}