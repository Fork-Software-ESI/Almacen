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