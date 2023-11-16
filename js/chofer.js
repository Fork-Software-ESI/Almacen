const URL = "http://localhost:8001/api/chofer/"

function verContenidoCamoin(ID){
    var ID = document.getElementById("ID").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/chofer/camion/" + ID,
        type: "GET",
        data: {
            ID: ID
        },
        success: function (data) {
            document.getElementById("tablaResultados");
            tablaResultados.innerHTML = "";
            data.datosLote.forEach(element => {
                var resultado = document.createElement("tr");
                resultado.innerHTML = `
                    <td data-cell="ID Paquete">${element.lote}</td>
                    <td data-cell="Descripcion Lote">${element.descripcionLote}</td>
                    <td data-cell="Peso Lote">${element.pesoLote}</td>
                `;
                document.getElementById("tablaResultados").appendChild(resultado);
            });
            data.datosPaquete.forEach(element => {
                var resultado = document.createElement("tr");
                resultado.innerHTML = `
                    <td data-cell="ID Paquete">${element.paquete}</td>
                    <td data-cell="Descripcion Paquete">${element.descripcionPaquete}</td>
                    <td data-cell="Peso Paquete">${element.pesoPaquete}</td>
                `;
                document.getElementById("tablaResultados").appendChild(resultado);
            });
        },
        error: function (error) {
            console.log(error);
            alert("Ha ocurrido un error");
        }
    });
}

function marcarHora(Matricula, Hora){
    var Matricula = document.getElementById("Matricula").value;
    var Hora = document.getElementById("Hora").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/chofer/camion/marcarHora",
        type: "POST",
        data: {
            Matricula: Matricula,
            Hora: Hora
        },
        success: function () {
            alert("Hora marcada");
        },
        error: function (error) {
            console.log(error);
            alert("Ha ocurrido un error");
        }
    });
}

function liberarCamion(ID_Chofer){
    var ID_Chofer = document.getElementById("ID_Chofer").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/chofer/camion/liberar",
        type: "POST",
        data: {
            ID_Chofer: ID_Chofer
        },
        success: function () {
            alert("Camion liberado");
        },
        error: function (error) {
            console.log(error);
            alert("Ha ocurrido un error");
        }
    });
}

function estadoCamion(matricula){
    var matricula = document.getElementById("matricula").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/chofer/camion/estado",
        type: "POST",
        data: {
            matricula: matricula
        },
        success: function () {
            alert("Camion liberado");
        },
        error: function (error) {
            console.log(error);
            alert("Ha ocurrido un error");
        }
    });
}

function paqueteEntregado(ID_Paquete){
    var ID_Paquete = document.getElementById("ID_Paquete").value;
    jQuery.ajax({
        url: "http://localhost:8001/api/chofer/camion/entregar",
        type: "POST",
        data: {
            ID_Paquete: ID_Paquete
        },
        success: function () {
            alert("Paquete entregado");
        },
        error: function (error) {
            console.log(error);
            alert("Ha ocurrido un error");
        }
    });
}





