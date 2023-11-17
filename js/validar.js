jQuery.ajax({
    url: 'http://localhost:8003/api/validarToken',
    type: 'GET',
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
    },

    success: function (data) {
    },

    error: function () {
        alert("No autorizado");
        window.location.href = "C:/Users/Administrator/Desktop/Instalacion/Aplicacion-Almacen/index.html"
    }

});

function cerrarSesion() {

    localStorage.removeItem("token")
    location.reload(true);

}