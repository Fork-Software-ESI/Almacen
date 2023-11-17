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

function listarPaquetesAlmacen(ID_Funcionario) {
    var ID_Funcionario = document.getElementById("ID_Funcionario").value;
    var tablaResultados = document.getElementById('tablaResultados');

    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/paquetes",
        type: "GET",
        data: {
            'ID_Funcionario': ID_Funcionario,
        },
        success: function (data) {
            console.log(data);

            if (data.Paquetes && Array.isArray(data.Paquetes)) {
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
    var ID_Funcionario = document.getElementById("ID_Funcionario").value;
    var tablaResultados = document.getElementById('tablaResultados');
    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/lotes",
        type: "GET",
        data: {
            "ID_Funcionario": ID_Funcionario,
        },
        success:function(data){
            console.log(data);

            if (data.success && Array.isArray(data.success)) {
                if (tablaResultados) {
                    tablaResultados.innerHTML = '';

                    if (data.success.length > 0) {
                        data.success.forEach(paquete => {
                            var resultado = document.createElement('tr');
                            resultado.innerHTML = `
                                <td data-cell="ID">${paquete.ID}</td>
                                <td data-cell="Descripcion">${paquete.Descripcion}</td>
                                <td data-cell="ID Estado">${paquete.ID_Estado}</td>
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

function listarPaqueteLote(ID_Funcionario) {
    var ID_Funcionario = document.getElementById("ID_Funcionario").value;

    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/lotes/paquetes",
        type: "GET",
        data: {
            'ID_Funcionario': ID_Funcionario,
        },
        success: function (data) {
            console.log(data);

            if (data.success && typeof data.success === 'object') {
                var tablaResultados = document.getElementById('tablaResultados');
                tablaResultados.innerHTML = '';
                for (var key in data.success) {
                    if (data.success.hasOwnProperty(key)) {
                        var paqueteLote = data.success[key];
                        var resultado = document.createElement('tr');
                        resultado.innerHTML = `
                            <td data-cell="ID Lote">${paqueteLote.ID_Lote}</td>
                            <td data-cell="ID Paquete">${paqueteLote.ID_Paquete}</td>
                            <td data-cell="ID Estado">${paqueteLote.ID_Estado}</td>
                        `;
                        tablaResultados.appendChild(resultado);
                        if(paqueteLote.ID_Estado === 1){
                            var editar = document.createElement('td');
                            editar.setAttribute('data-cell', 'Editar');
                            editar.innerHTML = `
                                <button class="btn-modificar" onclick="editarLote(${ID_Funcionario}, ${paqueteLote.ID_Paquete})" style="color: black;"><i class="fa fa-pencil"></i></button>
                            `;
                            resultado.appendChild(editar);
                        }
                    }
                }
            } else {
                console.error('La propiedad "success" no está presente o no es un objeto en la respuesta.');
            }
        },
        error: function () {
            alert("No se pudo encontrar los paquetes");
        }
    });
}

function editarLote(ID_Funcionario, ID_Paquete){
    var ID_Funcionario = ID_Funcionario;
    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/lotes/paquetes",
        type: "PATCH",
        data: {
            "ID_Funcionario": ID_Funcionario,
            "ID_Paquete": ID_Paquete,
        },
        success:function(data){
            console.log(data);
            alert("Lote actualizado");
            document.getElementById("ID_Lote").value = "";
            document.getElementById("ID_Paquete").value = "";
            document.getElementById("ID_Estado").value = "";
        },
        error:function(error){
            console.log(error);
            alert("Error al actualizar lote");
        }
    });
}

function cargarLoteCamion(ID_Funcionario, ID_Lote){
    var ID_Funcionario = document.getElementById("ID_Funcionario").value;
    var ID_Lote = document.getElementById("ID_Lote").value;
    
    if(!ID_Funcionario || !ID_Lote){
        alert("Ingrese todos los campos");
        return;
    }

    if(ID_Funcionario == undefined || ID_Lote == undefined){
        alert("Ingrese todos los campos");
        return;
    }

    jQuery.ajax({
        url: "http://localhost:8001/api/funcionario/lotes",
        type: "POST",
        data: {
            "ID_Funcionario": ID_Funcionario,
            "ID_Lote": ID_Lote,
        },
        success:function(data){
            console.log(data);
            alert("Lote cargado en camion");
            document.getElementById("ID_Funcionario").value = "";
            document.getElementById("ID_Lote").value = "";
        },
        error:function(error){
            console.log(error);
            alert("Error al cargar lote en camion");
        }
    });
}




