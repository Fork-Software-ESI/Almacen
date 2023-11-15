const URL = "http://localhost:8001/api/funcionario/"

function registrarPaqueteEstante(){
    jQuery.ajax({
        url: URL + "estante",
        type: "POST",
    });
}

function trasladarPaqueteEstante(){
    jQuery.ajax({
        url: URL + "estante",
        type: "PATCH",
    });
}
function quitarPaqueteDeEstante(){
    jQuery.ajax({
        url: URL + "estante",
        type: "DELETE",
    });
}

function listarPaquetesAlmacen(){
    jQuery.ajax({
            url: URL + "paquetes",
            type: "GET",
        });
}

function listarLotes(){
    jQuery.ajax({
            url: URL + "lotes",
            type: "GET",
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




