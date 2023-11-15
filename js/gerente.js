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
                    <td>${paquete.ID}</td>
                    <td>${paquete.ID_Cliente}</td>
                    <td>${paquete.Descripcion}</td>
                    <td>${paquete.Peso_Kg}</td>
                    <td>${paquete.ID_Estado}</td>
                    <td>${paquete.Destino}</td>
                    <td><button class="btn-a" onclick="datosPaquete('${paquete.ID}', '${paquete.ID_Cliente}', '${paquete.Descripcion}', '${paquete.Peso_Kg}', '${paquete.ID_Estado}', '${paquete.Destino}')" style="color: black;">Editar</button></td>
                    <td><button class="btn-a" onclick="datosPaquete(${paquete.ID_Paquete})">Eliminar</button></td>
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
                            <td>${paquete.ID_Paquete}</td>
                            <td>${paquete.ID_Estante}</td>
                            <td>${paquete.ID_Almacen}</td>
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
