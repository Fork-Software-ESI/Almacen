jQuery.ajax({
    url: 'http://localhost:8003/api/validarToken', 
    type: 'GET',
    headers:{
        Authorization: "Bearer " + localStorage.getItem("token"),
    },

    success: function(data) {
    },

    error: function(){
        alert("No autorizado");
        window.location.href = "C:/Users/Administrator/Desktop/Aplicacion-Almacen/index.html"
    } 

});

function cerrarSesion(){

    jQuery.ajax({  
        url: 'http://127.0.0.1:8003/api/logout', 
        type: 'POST',
        headers:{
            Authorization: "Bearer " + localStorage.getItem("token"),
        },
        
        success: function() {  
            localStorage.removeItem("token")
            window.location.href = "C:/Users/Administrator/Desktop/Aplicacion-Almacen/index.html"
        },
    
    });

}