let btn = document.getElementById('botonLogin')
let username = document.getElementById('username')
let password = document.getElementById('password')

btn.addEventListener('click', function (e) {

    e.preventDefault()

    jQuery.ajax({
        url: "http://localhost:8003/api/login",
        type: "POST",
        data: {
            username: username.value,
            password: password.value,
            rol: "GerenteAlmacen"
        },

        success: function (data) {
            window.location.href = "../gerente.html"
            localStorage.setItem("token", data.user.token)
        },

        error: function (error) {
            alert(error.responseJSON.message);
        }
    });

})