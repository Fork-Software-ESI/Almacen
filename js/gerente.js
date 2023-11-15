const URL = "http://localhost:8001/api/gerente/"

function buscarPaquete(ID_Cliente){
    var ID_Cliente = document.getElementById("ID_Cliente").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/paquetes",
        type: "GET",
        data: {
            'ID_Cliente': ID_Cliente,
        },
        success:function(data){
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = '';
            data.Paquete.forEach(paquete => {
                var resultado = document.createElement('tr');
                resultado.innerHTML = `
                    <td data-cell="ID Paquete">${paquete.ID}</td>
                    <td data-cell="ID Cliente">${paquete.ID_Cliente}</td>
                    <td data-cell="Descripcion">${paquete.Descripcion}</td>
                    <td data-cell="Peso_Kg">${paquete.Peso_Kg}</td>
                    <td data-cell="ID Estado">${paquete.ID_Estado}</td>
                    <td data-cell="Destino">${paquete.Destino}</td>
                    <td data-cell="Editar"><button class="btn-modificar" onclick="datosPaquete('${paquete.ID}', '${paquete.ID_Cliente}', '${paquete.Descripcion}', '${paquete.Peso_Kg}', '${paquete.ID_Estado}', '${paquete.Destino}')" style="color: black;"><i class="fa fa-pencil"></i></button></td>
                    <td data-cell="Eliminar"><button class="btn-eliminar" onclick="eliminarPaquete(${paquete.ID})"><i class="fa fa-trash"></i></button></td>
                    `;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
            document.getElementById("footer").style.position = "relative";
        },
        error: function(){
            alert("No se pudo encontrar el paquete");
        }
    });
}

function listarPaquetesAlmacen(ID_Almacen) {
    var ID_Almacen = document.getElementById("ID_Almacen").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/paquetes/" + ID_Almacen,
        type: "GET",
        data: {
            'ID_Almacen': ID_Almacen,
        },
        success: function (data) {
            console.log(data);

            if (data.Paquetes && Array.isArray(data.Paquetes)) {
                document.getElementById('tablaResultados').innerHTML = '';

                if (data.Paquetes.length > 0) {
                    data.Paquetes.forEach(paquete => {
                        var resultado = document.createElement('tr');
                        resultado.innerHTML = `
                            <td data-cell="ID Paquete">${paquete.ID_Paquete}</td>
                            <td data-cell="ID Estante">${paquete.ID_Estante}</td>
                            <td data-cell="ID Almacen">${paquete.ID_Almacen}</td>
                            `;
                        document.getElementById('tablaResultados').appendChild(resultado);
                    });
                } else {
                    console.log('No hay paquetes en la respuesta.');
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

function crearPaquete(ID_Gerente, Descripcion, Peso_Kg, ID_Cliente, Calle, Numero_Puerta, Ciudad) {
    var ID_Gerente =  document.getElementById("ID_Gerente").value;
    var Descripcion = document.getElementById("Descripcion").value;
    var Peso_Kg = document.getElementById("Peso_Kg").value;
    var ID_Cliente = document.getElementById("ID_Cliente").value;
    var Calle = document.getElementById("Calle").value;
    var Numero_Puerta = document.getElementById("Numero_Puerta").value;
    var Ciudad = document.getElementById("Ciudad").value;

    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/paquetes",
        type: "POST",
        data: {
            'ID_Gerente': ID_Gerente,
            'Descripcion': Descripcion,
            'Peso_Kg': Peso_Kg,
            'ID_Cliente': ID_Cliente,
            'Calle': Calle,
            'Numero_Puerta': Numero_Puerta,
            'Ciudad': Ciudad,
        },
        success: function (data) {
            alert("Paquete creado con éxito");
            document.getElementById("ID_Gerente").value = "";
            document.getElementById("Descripcion").value = "";
            document.getElementById("Peso_Kg").value = "";
            document.getElementById("ID_Cliente").value = "";
            document.getElementById("Calle").value = "";
            document.getElementById("Numero_Puerta").value = "";
            document.getElementById("Ciudad").value = "";
        },
        error: function () {
            alert("No se pudo crear el paquete");
        }
    });
}

function datosPaquete(ID, ID_Cliente, Descripcion, Peso_Kg, ID_Estado, Destino) {
    var partesDestino = Destino.split(',');
    var Calle = partesDestino[0];
    var Numero_Puerta = partesDestino[1];
    var Ciudad = partesDestino[2];

    window.location.href = `../paquete/editar.html?ID=${ID}&ID_Cliente=${ID_Cliente}&Descripcion=${Descripcion}&Peso_Kg=${Peso_Kg}&ID_Estado=${ID_Estado}&Calle=${Calle}&Numero_Puerta=${Numero_Puerta}&Ciudad=${Ciudad}`;
}

function editarPaquete(ID, ID_Cliente, Descripcion, Peso_Kg, ID_Estado, Calle, Numero_Puerta, Ciudad){
    var ID = document.getElementById("ID").value;
    var ID_Cliente = document.getElementById("ID_Cliente").value;
    var Descripcion = document.getElementById("Descripcion").value;
    var Peso_Kg = document.getElementById("Peso_Kg").value;
    var ID_Estado = document.getElementById("ID_Estado").value;
    var Calle = document.getElementById("Calle").value;
    var Numero_Puerta = document.getElementById("Numero_Puerta").value;
    var Ciudad = document.getElementById("Ciudad").value;

    console.log(ID, ID_Cliente, Descripcion, Peso_Kg, ID_Estado, Calle, Numero_Puerta, Ciudad)

    if (!ID_Cliente || !Descripcion || !Peso_Kg || !ID_Estado || !Calle || !Numero_Puerta || !Ciudad) {
        alert("Completa todos los campos obligatorios en el formulario.");
        return;
    }

    if (ID_Cliente === undefined || Descripcion === undefined || Peso_Kg === undefined || ID_Estado === undefined || Calle === undefined || Numero_Puerta === undefined || Ciudad === undefined) {
        alert("Alguno de los valores es undefined. Verifica tu formulario.");
        return;
    }

    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/paquetes",
        type: "PATCH",
        data: {
            'ID': ID,
            'Descripcion': Descripcion,
            'ID_Cliente': ID_Cliente,
            'Peso_Kg': Peso_Kg,
            'ID_Estado': ID_Estado,
            'Calle': Calle,
            'Numero_Puerta': Numero_Puerta,
            'Ciudad': Ciudad,
        },
        success: function (data) {
            alert("Paquete actualizado con éxito");
            window.location.href = "../paquete/buscar.html";
        },
        error: function () {
            alert("No se pudo actualizar el paquete");
        }
    });
}

function eliminarPaquete(ID) {
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/paquetes/" + ID,
        type: "DELETE",
        data: {
            'ID': ID,
        },
        success: function (data) {
            alert("Paquete eliminado con éxito");
            window.location.href = "../paquete/buscar.html";
        },
        error: function () {
            alert("No se pudo eliminar el paquete");
        }
    });
}

// Lote

function crearLote(ID_Gerente, Descripcion, Peso_Kg){
    var ID_Gerente = document.getElementById("ID_Gerente").value;
    var Descripcion = document.getElementById("Descripcion").value;
    var Peso_Kg = document.getElementById("Peso_Kg").value;
    console.log(ID_Gerente, Descripcion, Peso_Kg);
    if (!ID_Gerente || !Descripcion || !Peso_Kg) {
        alert("Completa todos los campos obligatorios en el formulario.");
        return;
    }

    if (ID_Gerente === undefined || Descripcion === undefined || Peso_Kg === undefined) {
        alert("Alguno de los valores es undefined. Verifica tu formulario.");
        return;
    }

    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/lotes",
        type: "POST",
        data: {
            'Peso_Kg': Peso_Kg,
            'Descripcion': Descripcion,
            'ID_Gerente': ID_Gerente,
        },
        success: function (data) {
            alert("Lote creado con éxito");
            document.getElementById("Descripcion").value = "";
            document.getElementById("Peso_Kg").value = "";
            document.getElementById("ID_Gerente").value = "";
        },
        error: function () {
            
            alert("No se pudo crear el lote");
        }
    });
}

function listarLote(ID_Gerente){
    var ID_Gerente = document.getElementById("ID_Gerente").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/lotes",
        type: "GET",
        data: {
            'ID_Gerente': ID_Gerente,
        },
        success: function (data) {
            console.log(data);
            if (data.data && Array.isArray(data.data)) {
                document.getElementById('tablaResultados').innerHTML = '';
                if (data.data.length > 0) {
                    data.data.forEach(lote => {
                        var resultado = document.createElement('tr');
                        resultado.innerHTML = `
                            <td data-cell="ID Lote">${lote.ID}</td>
                            <td data-cell="Descripcion">${lote.Descripcion}</td>
                            <td data-cell="Peso_Kg">${lote.Peso_Kg}</td>
                            <td data-cell="ID Estado">${lote.ID_Estado}</td>
                            `;
                        document.getElementById('tablaResultados').appendChild(resultado);
                    });
                } else {
                    console.log('No hay lotes en la respuesta.');
                }
            } else {
                console.log('La propiedad "Lotes" no está presente o no es un array en la respuesta.');
            }
        },
        error: function () {
            alert("No se pudo encontrar el gerente");
        }
    });
}

function asignarPaqueteLote(ID_Gerente, ID_Paquete, ID_Lote){
    var ID_Gerente = document.getElementById("ID_Gerente").value;
    var ID_Paquete = document.getElementById("ID_Paquete").value;
    var ID_Lote = document.getElementById("ID_Lote").value;
    
    console.log(ID_Gerente, ID_Paquete, ID_Lote);
    
    if (!ID_Gerente || !ID_Paquete || !ID_Lote) {
        alert("Completa todos los campos obligatorios en el formulario.");
        return;
    }

    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/lotes/asignar",
        type: "POST",
        data: {
            'ID_Gerente': ID_Gerente,
            'ID_Paquete': ID_Paquete,
            'ID_Lote': ID_Lote,
        },
        success: function (data) {
            alert("Paquete asignado con éxito");
            document.getElementById("ID_Gerente").value = "";
            document.getElementById("ID_Paquete").value = "";
            document.getElementById("ID_Lote").value = "";
        },
        error: function () {
            alert("No se pudo asignar el paquete");
        }
    });
}

function buscarLote(ID_Gerente, ID_Lote){
    var ID_Gerente = document.getElementById("ID_Gerente").value;
    var ID_Lote = document.getElementById("ID_Lote").value;

    console.log(ID_Gerente, ID_Lote);
    if (!ID_Gerente || !ID_Lote) {
        alert("Completa todos los campos obligatorios en el formulario.");
        return;
    }
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/lotes/buscar",
        type: "GET",
        data: {
            'ID_Gerente': ID_Gerente,
            'ID_Lote': ID_Lote,
        },
        success: function (data) {
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = '';
            var resultado = document.createElement('tr');
            resultado.innerHTML = `
                <td data-cell="ID Lote">${data.Lote.ID}</td>
                <td data-cell="Descripcion">${data.Lote.Descripcion}</td>
                <td data-cell="Peso_Kg">${data.Lote.Peso_Kg}</td>
                <td data-cell="ID Estado">${data.Lote.ID_Estado}</td>
                <td data-cell="Editar"><button class="btn-modificar" onclick="datosLote('${data.Lote.ID}', '${data.Lote.Descripcion}', '${data.Lote.Peso_Kg}', '${data.Lote.ID_Estado}')" style="color: black;"><i class="fa fa-pencil"></i></button></td>
                <td data-cell="Eliminar"><button class="btn-eliminar" onclick="eliminarLote(${data.Lote.ID})"><i class="fa fa-trash"></i></button></td>
            `;
            document.getElementById('tablaResultados').appendChild(resultado); 
        },
        error: function () {
            alert("No se pudo encontrar el lote");
        }
    });
}

function datosLote(ID, Descripcion, Peso_Kg, ID_Estado){
    window.location.href = `../lote/editar.html?ID=${ID}&Descripcion=${Descripcion}&Peso_Kg=${Peso_Kg}&ID_Estado=${ID_Estado}`;
}

function editarLote(ID, Descripcion, Peso_Kg, ID_Estado){
    var ID = document.getElementById("ID").value;
    var Descripcion = document.getElementById("Descripcion").value;
    var Peso_Kg = document.getElementById("Peso_Kg").value;
    var ID_Estado = document.getElementById("ID_Estado").value;

    if (!ID || !Descripcion || !Peso_Kg || !ID_Estado) {
        alert("Completa todos los campos obligatorios en el formulario.");
        return;
    }

    if (ID === undefined || Descripcion === undefined || Peso_Kg === undefined || ID_Estado === undefined) {
        alert("Alguno de los valores es undefined. Verifica tu formulario.");
        return;
    }

    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/lotes",
        type: "PATCH",
        data: {
            'ID': ID,
            'Descripcion': Descripcion,
            'Peso_Kg': Peso_Kg,
            'ID_Estado': ID_Estado,
        },
        success: function (data) {
            alert("Lote actualizado con éxito");
            window.location.href = "../lote/buscar.html";
        },
        error: function () {
            alert("No se pudo actualizar el lote");
        }
    });
}

function eliminarLote(ID){
    console.log(ID);
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/lotes/" + ID,
        type: "DELETE",
        data: {
            'ID': ID,
        },
        success: function (data) {
            alert("Lote eliminado con éxito");
            window.location.href = "../lote/buscar.html";
        },
        error: function () {
            alert("No se pudo eliminar el lote");
        }
    });
}

// Chofer

function verChofer(ID){
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/choferes",
        type: "GET",
        data: {
            'ID': ID,
        },
        success: function (data) {
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = '';
            data.Choferes.forEach(chofer => {
                var resultado = document.createElement('tr');
                resultado.innerHTML = `
                    <td data-cell="ID Chofer">${chofer.ID}</td>
                    <td data-cell="Editar"><button class="btn-modificar" onclick="datosChofer('${chofer.ID}')" style="color: black;"><i class="fa fa-pencil"></i></button></td>
                    <td data-cell="Eliminar"><button class="btn-eliminar" onclick="eliminarChofer(${chofer.ID})"><i class="fa fa-trash"></i></button></td>
                `;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
        },
        error: function () {
            alert("No se pudo encontrar el chofer");
        }
    });
}

function verChoferesDisponibles(ID){
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/choferes/disponibles",
        type: "GET",
        data: {
            'ID': ID,
        },
        success: function (data) {
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = '';
            data.Choferes.forEach(chofer => {
                var resultado = document.createElement('tr');
                resultado.innerHTML = `
                    <td data-cell="ID Chofer">${chofer.ID}</td>
                    <td data-cell="Editar"><button class="btn-modificar" onclick="datosChofer('${chofer.ID}')" style="color: black;"><i class="fa fa-pencil"></i></button></td>
                    <td data-cell="Eliminar"><button class="btn-eliminar" onclick="eliminarChofer(${chofer.ID})"><i class="fa fa-trash"></i></button></td>
                `;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
        },
        error: function () {
            alert("No se pudo encontrar el chofer");
        }
    });
}

function listaChoferCamion(ID_Chofer, ID_Camion, Fecha_Hora_Inicio, ID_Estado){
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/choferes/ocupados",
        type: "GET",
        data: {
            'ID_Chofer': ID_Chofer,
            'ID_Camion': ID_Camion,
            'Fecha_Hora_Inicio': Fecha_Hora_Inicio,
            'ID_Estado': ID_Estado,
        },
        success: function (data) {
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = '';
            data.ChoferesCamiones.forEach(choferCamion => {
                var resultado = document.createElement('tr');
                resultado.innerHTML = `
                    <td data-cell="ID Chofer">${choferCamion.ID_Chofer}</td>
                    <td data-cell="ID Camion">${choferCamion.ID_Camion}</td>
                    <td data-cell="Fecha_Hora_Inicio">${choferCamion.Fecha_Hora_Inicio}</td>
                    <td data-cell="ID Estado">${choferCamion.ID_Estado}</td>
                    <td data-cell="Editar"><button class="btn-modificar" onclick="datosChoferCamion('${choferCamion.ID_Chofer}', '${choferCamion.ID_Camion}')" style="color: black;"><i class="fa fa-pencil"></i></button></td>
                    <td data-cell="Eliminar"><button class="btn-eliminar" onclick="eliminarChoferCamion(${choferCamion.ID_Chofer}, ${choferCamion.ID_Camion})"><i class="fa fa-trash"></i></button></td>
                `;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
        },
        error: function () {
            alert("No se pudo encontrar el chofer");
        }
    });
}

// Camion

function verCamiones(ID, Matricula, PesoMaximoKg){
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/camiones",
        type: "GET",
        data: {
            'ID': ID,
            'Matricula': Matricula,
            'PesoMaximoKg': PesoMaximoKg,
        },
        success: function (data) {
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = '';
            data.Camiones.forEach(camion => {
                var resultado = document.createElement('tr');
                resultado.innerHTML = `
                    <td data-cell="ID Camion">${camion.ID}</td>
                    <td data-cell="Matricula">${camion.Matricula}</td>
                    <td data-cell="PesoMaximoKg">${camion.PesoMaximoKg}</td>
                    <td data-cell="Editar"><button class="btn-modificar" onclick="datosCamion('${camion.ID}', '${camion.Matricula}', '${camion.PesoMaximoKg}')" style="color: black;"><i class="fa fa-pencil"></i></button></td>
                    <td data-cell="Eliminar"><button class="btn-eliminar" onclick="eliminarCamion(${camion.ID})"><i class="fa fa-trash"></i></button></td>
                `;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
        },
        error: function () {
            alert("No se pudo encontrar el chofer");
        }
    });
}

function verCamionesSinChofer(ID, Matricula, PesoMaximoKg){
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/camiones/libres",
        type: "GET",
        data: {
            'ID': ID,
            'Matricula': Matricula,
            'PesoMaximoKg': PesoMaximoKg,
        },
        success: function (data) {
            document.getElementById('tablaResultados');
            tablaResultados.innerHTML = '';
            data.Camiones.forEach(camion => {
                var resultado = document.createElement('tr');
                resultado.innerHTML = `
                    <td data-cell="ID Camion">${camion.ID}</td>
                    <td data-cell="Matricula">${camion.Matricula}</td>
                    <td data-cell="PesoMaximoKg">${camion.PesoMaximoKg}</td>
                    <td data-cell="Editar"><button class="btn-modificar" onclick="datosCamion('${camion.ID}', '${camion.Matricula}', '${camion.PesoMaximoKg}')" style="color: black;"><i class="fa fa-pencil"></i></button></td>
                    <td data-cell="Eliminar"><button class="btn-eliminar" onclick="eliminarCamion(${camion.ID})"><i class="fa fa-trash"></i></button></td>
                `;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
        },
        error: function () {
            alert("No se pudo encontrar el chofer");
        }
    });
}

function asignarChoferCamion(ID_Chofer, ID_Camion){
    var ID_Chofer = document.getElementById("ID_Chofer").value;
    var ID_Camion = document.getElementById("ID_Camion").value;
    console.log(ID_Chofer, ID_Camion);

    if (!ID_Chofer || !ID_Camion) {
        alert("Completa todos los campos obligatorios en el formulario.");
        return;
    }

    if(ID_Chofer === undefined || ID_Camion === undefined){
        alert("Alguno de los valores es undefined. Verifica tu formulario.");
        return;
    }

    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/camiones",
        type: "POST",
        data: {
            'ID_Chofer': ID_Chofer,
            'ID_Camion': ID_Camion,
        },
        success: function (data) {
            alert("Chofer asignado con éxito");
            document.getElementById("ID_Chofer").value = "";
            document.getElementById("ID_Camion").value = "";
        },
        error: function () {
            alert("No se pudo asignar el chofer");
        }
    });
}

function asignarLoteCamion(){

}

function verCamionesEnPlataformas(){

}

function verCamioneEnTransito(ID_Chofer, ID_Camion, Fecha_Hora_Inicio, ID_Estado){
    jQuery.ajax({
        url: "http://localhost:8001/api/gerente/camiones/transito",
        type: "GET",
        data: {
            'ID_Chofer': ID_Chofer,
            'ID_Camion': ID_Camion,
            'Fecha_Hora_Inicio': Fecha_Hora_Inicio,
            'ID_Estado': ID_Estado,
        },
        success: function (data) {
            document.getElementById('tablaResultados').innerHTML = '';
            document.getElementById('tablaResultadosSalida').innerHTML = '';

            // Manejar los camiones en tránsito
            if (data['Camiones en tránsito']) {
                data['Camiones en tránsito'].forEach(camion => {
                    var resultado = document.createElement('tr');
                    resultado.innerHTML = `
                        <td data-cell="ID Chofer">${camion.ID_Chofer}</td>
                        <td data-cell="ID Camion">${camion.ID_Camion}</td>
                        <td data-cell="Fecha_Hora_Inicio">${camion.Fecha_Hora_Inicio}</td>
                        <td data-cell="ID Estado">${camion.ID_Estado}</td>
                    `;
                    document.getElementById('tablaResultados').appendChild(resultado);
                });
            }

            // Manejar los horarios de salida
            if (data['Horarios de salida']) {
                for (const ID_Camion in data['Horarios de salida']) {
                    if (data['Horarios de salida'].hasOwnProperty(ID_Camion)) {
                        var horario = data['Horarios de salida'][ID_Camion];
                        var resultadoSalida = document.createElement('tr');
                        resultadoSalida.innerHTML = `
                            <td data-cell="ID Camion">${ID_Camion}</td>
                            <td data-cell="Fecha_Hora_Salida">${horario}</td>
                        `;
                        document.getElementById('tablaResultadosSalida').appendChild(resultadoSalida);
                    }
                }
            }
        },
        error: function () {
            alert("No se pudo encontrar el chofer");
        }
    });
}

function marcarCamionComoPreparado(){

}