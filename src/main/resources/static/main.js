
$(document).ready(function () {
    $('.table .btn-primary').on('click', function(event){

        event.preventDefault();

        var href =$(this).attr('href');

        $.get(href, function (user, status) {
            $(' #idEdit').val(user.id);
            $(' #nameEdit').val(user.name);
            $(' #surnameEdit').val(user.surname);
            $(' #departmentEdit').val(user.department);
            $(' #salaryEdit').val(user.salary);
            $(' #passwordEdit').val(user.password);
        });
        $(' #editModal').modal();
    });
});