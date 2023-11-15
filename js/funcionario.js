const URL = "http://localhost:8001/api/funcionario/"

function registrarPaqueteEstante(ID_Funcionario, ID_Paquete, ID_Estante, ID_Almacen){
    var ID_Funcionario = document.getElementById("ID_Funcionario").value;
    var ID_Paquete = document.getElementById("ID_Paquete").value;
    var ID_Estante = document.getElementById("ID_Estante").value;
    var ID_Almacen = document.getElementById("ID_Almacen").value;

    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/estante",
        type: "POST",
        data: {
            "ID_Funcionario": ID_Funcionario,
            "ID_Paquete": ID_Paquete,
            "ID_Estante": ID_Estante,
            "ID_Almacen": ID_Almacen
        },
        success:function(data){
            console.log(data);
            alert("Paquete registrado en estante");
            document.getElementById("ID_Funcionario").value = "";
            document.getElementById("ID_Paquete").value = "";
            document.getElementById("ID_Estante").value = "";
            document.getElementById("ID_Almacen").value = "";
        },
        error:function(error){
            console.log(error);
            alert("Error al registrar paquete en estante");
        }
    });
}

function trasladarPaqueteEstante(ID_Estante, ID_Almacen, ID_Paquete){
    var ID_Estante = document.getElementById("ID_Estante").value;
    var ID_Almacen = document.getElementById("ID_Almacen").value;
    var ID_Paquete = document.getElementById("ID_Paquete").value;

    console.log(ID_Estante, ID_Almacen, ID_Paquete);

    if(!ID_Estante || !ID_Almacen || !ID_Paquete){
        alert("Ingrese todos los campos");
        return;
    }

    if(ID_Estante == undefined || ID_Almacen == undefined || ID_Paquete == undefined){
        alert("Ingrese todos los campos");
        return;
    }

    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/estante",
        type: "PATCH",
        data: {
            "ID_Estante": ID_Estante,
            "ID_Almacen": ID_Almacen,
            "ID_Paquete": ID_Paquete
        },
        success:function(data){
            console.log(data);
            alert("Paquete trasladado");
            document.getElementById("ID_Estante").value = "";
            document.getElementById("ID_Almacen").value = "";
            document.getElementById("ID_Paquete").value = "";
        },
        error:function(error){
            console.log(error);
            alert("Error al trasladar paquete");
        }
    });
}

function quitarPaqueteDeEstante(ID_Paquete){
    var ID_Paquete = document.getElementById("ID_Paquete").value;
    console.log(ID_Paquete);
    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/estante",
        type: "DELETE",
        data: {
            "ID_Paquete": ID_Paquete
        },
        success:function(data){
            console.log(data);
            alert("Paquete retirado de estante");
            document.getElementById("ID_Paquete").value = "";
        },
        error:function(error){
            console.log(error);
            alert("Error al retirar paquete de estante");
        }
    });
}

/* function listarPaquetesAlmacen(ID_Funcionario){
    var ID_Funcionario = document.getElementById("ID_Funcionario").value;
    console.log(ID_Funcionario);
    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/paquetes",
        type: "GET",
        data: {
            "ID_Funcionario": ID_Funcionario
        },
        success:function(data){
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = "";
            data.Paquetes.forEach(paquete => {
                var resultado = document.createElement('tr');
                resultado.innerHTML = `
                    <td>${paquete.ID_Paquete}</td>
                    <td>${paquete.ID_Estante}</td>
                    <td>${paquete.ID_Almacen}</td>
                `;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
        },
        error:function(error){
            console.log(error);
            alert("Error al listar paquetes");
        }
    });
} */


function listarPaquetesAlmacen(ID_Funcionario) {
    var ID_Funcionario = document.getElementById("ID_Funcionario").value;
    var tablaResultados = document.getElementById('tablaResultados');

    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/paquetes/" + ID_Funcionario,
        type: "GET",
        data: {
            'ID_Funcionario': ID_Funcionario,
        },
        success: function (data) {
            console.log(data);

            if (data.Paquetes && Array.isArray(data.Paquetes)) {
                // Verificar si el elemento existe
                if (tablaResultados) {
                    tablaResultados.innerHTML = '';

                    if (data.Paquetes.length > 0) {
                        data.Paquetes.forEach(paquete => {
                            var resultado = document.createElement('tr');
                            resultado.innerHTML = `
                                <td data-cell="ID Paquete">${paquete.ID_Paquete}</td>
                                <td data-cell="ID Estante">${paquete.ID_Estante}</td>
                                <td data-cell="ID Almacen">${paquete.ID_Almacen}</td>
                            `;
                            tablaResultados.appendChild(resultado);
                        });
                    } else {
                        console.log('No hay paquetes en la respuesta.');
                    }
                } else {
                    console.error("El elemento con ID 'tablaResultados' no existe.");
                }
            } else {
                console.log('La propiedad "Paquetes" no está presente o no es un array en la respuesta.');
            }
        },
        error: function () {
            alert("No se pudo encontrar los paquetes");
        }
    });
}


function listarLotes(ID_Funcionario){
    var IDfUNID_Funcionarion = document.getElementById("ID_Funcionario").value;
    console.log(IDfUNID_Funcionarion);
    jQuery.ajax({
            url: "http://localhost:8001/api/funcionario/paquetes/lotes",
            type: "GET",
            data: {
                "ID_Almacen": ID_Funcionario
            },

        });
}

function listarPaqueteLote(){
    jQuery.ajax({
            url: URL + "lotes/paquetes",
            type: "GET",
        });
}

function actualizarPaqueteLote(){
    jQuery.ajax({
            url: URL + "lotes/paquetes",
            type: "PATCH",
        });
}

function cargarLoteCamion(){
    jQuery.ajax({
            url: URL + "estante",
            type: "POST",
        });
}




