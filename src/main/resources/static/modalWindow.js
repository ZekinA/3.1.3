function openModalWindow(id) {
    document.getElementById("idEdit").value = id;
    document.getElementById("nameEdit").value = $("#name" + id).text(); //userFirstNameGod
    document.getElementById('surNameEdit').value = $("#surname" + id).text();
    document.getElementById("departmentEdit").value = $("#department" + id).text();
    document.getElementById("salaryEdit").value = $("#salary" + id).text();
    document.getElementById("passwordEdit").value = "";
}

function openModalWindowDel(id) {
    document.getElementById("idDelete").value = id;
    document.getElementById("nameDelete").value = $("#name" + id).text();
    document.getElementById("surNameDelete").value = $("#surname" + id).text();
    document.getElementById("departmentDelete").value = $("#department" + id).text();
    document.getElementById("salaryDelete").value = $("#salary" + id).text();
    document.getElementById("passwordDelete").value = "";

}