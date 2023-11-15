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
                    <td>${paquete.Destino}</td>`;
                document.getElementById('tablaResultados').appendChild(resultado);
            });
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


