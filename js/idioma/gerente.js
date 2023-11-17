let es = document.getElementById("español")
let en = document.getElementById("ingles")

//navbar
let txtInicio = document.getElementById("inicio")
let txtSobreNosotros = document.getElementById("sobre-nosotros-txt")
let txtNosotros = document.getElementById("SobreNosotros")
let txtServicios = document.getElementById("servicios")
let txtContacto = document.getElementById("contacto")
let txtIngles = document.getElementById("ingles")
let txtEspañol = document.getElementById("español")
//homepage
let txtGerente = document.getElementById("gerente")

let txtPaquete = document.getElementById("paquete")
let txtBuscar = document.getElementById("buscar")
let txtListaPaquete = document.getElementById("lista-paquete")
let txtCrearPaquete = document.getElementById("crear-paquete")
let txtAsignarPaquete = document.getElementById("asignar-paquete")

let txtLote = document.getElementById("lote")
let txtListaLote = document.getElementById("lista-lote")
let txtCrearLote = document.getElementById("crear-lote")
let txtBuscarLote = document.getElementById("buscar-lote")
let txtAsignarLote = document.getElementById("asignar-lote")

let txtChofer = document.getElementById("chofer")
let txtListaChofer = document.getElementById("lista-chofer")
let txtDisponiblesChofer = document.getElementById("disponibles-chofer")
let txtListaChoferCamion = document.getElementById("lista-chofer-camion")

let txtCamion = document.getElementById("camion")
let txtListaCamion = document.getElementById("lista-camion")
let txtDisponiblesCamion = document.getElementById("disponibles-camion")
let txtSinChofer = document.getElementById("sin-chofer")
let txtTransito = document.getElementById("transito")
let txtAsignarCamion = document.getElementById("asignar-camion")
let txtMarcarCamion = document.getElementById("marcar-camion")
let txtVerCamion = document.getElementById("ver-camion")

//footer
let txtEmpresa = document.getElementById("empresa")
let txtDondeUbicarnos = document.getElementById("donde-ubicarnos")
let txtDireccion = document.getElementById("direccion")
let txtNosotrosFooter = document.getElementById("nosotros-footer")
let txtServiciosFooter = document.getElementById("servicios-footer")
let txtContactoFooter = document.getElementById("contacto-footer")

function traducirAIngles(){
    //navbar
    txtInicio.innerHTML = "Home"
    txtServicios.innerHTML = "Services"
    txtIngles.innerHTML = "English"
    txtEspañol.innerHTML = "Spanish"
    
    //homepage
    txtGerente.innerHTML = "Manager"
    txtPaquete.innerHTML = "Package"
    txtBuscar.innerHTML = "Search"
    txtListaPaquete.innerHTML = "Package list"
    txtCrearPaquete.innerHTML = "Create package"
    txtAsignarPaquete.innerHTML = "Assign package"

    txtLote.innerHTML = "Lot"
    txtListaLote.innerHTML = "Lot list"
    txtCrearLote.innerHTML = "Create lot"
    txtBuscarLote.innerHTML = "Search lot"
    txtAsignarLote.innerHTML = "Assign lot"
    txtChofer.innerHTML = "Driver"
    txtListaChofer.innerHTML = "Driver list"
    txtDisponiblesChofer.innerHTML = "Available drivers"
    txtListaChoferCamion.innerHTML = "Driver list"

    txtCamion.innerHTML = "Truck"
    txtListaCamion.innerHTML = "Truck list"
    txtDisponiblesCamion.innerHTML = "Available trucks"
    txtSinChofer.innerHTML = "Without driver"
    txtTransito.innerHTML = "In transit"
    txtAsignarCamion.innerHTML = "Assign truck"
    txtMarcarCamion.innerHTML = "Mark as Ready"
    txtVerCamion.innerHTML = "See on platform"

    //footer
    txtEmpresa.innerHTML = "Company"
    txtDondeUbicarnos.innerHTML = "Where to find us"
    txtDireccion.innerHTML = "We find ourselves 25 de agosto 1800"
    txtNosotrosFooter.innerHTML = "About us"
    txtServiciosFooter.innerHTML = "Services"
    txtContactoFooter.innerHTML = "Contact"
}

function traducirAEspanol(){
    //navbar
    txtInicio.innerHTML = "Inicio"
    txtServicios.innerHTML = "Servicios"
    txtContacto.innerHTML = "Contacto"
    txtIngles.innerHTML = "Ingles"
    txtEspañol.innerHTML = "Español"
    //homepage
    txtGerente.innerHTML = "Gerente"
    txtPaquete.innerHTML = "Paquete"
    txtBuscar.innerHTML = "Buscar"
    txtListaPaquete.innerHTML = "Lista de paquetes"
    txtCrearPaquete.innerHTML = "Crear paquete"
    txtAsignarPaquete.innerHTML = "Asignar paquete"
    txtLote.innerHTML = "Lote"
    txtListaLote.innerHTML = "Lista"
    txtCrearLote.innerHTML = "Crear"
    txtBuscarLote.innerHTML = "Buscar"
    txtAsignarLote.innerHTML = "Asignar a Camion"
    txtChofer.innerHTML = "Chofer"
    txtListaChofer.innerHTML = "Lista"
    txtDisponiblesChofer.innerHTML = "Disponibles"
    txtListaChoferCamion.innerHTML = "Ocupados"
    txtCamion.innerHTML = "Camion"
    txtListaCamion.innerHTML = "Lista"
    txtDisponiblesCamion.innerHTML = "Disponibles"
    txtSinChofer.innerHTML = "Sin chofer"
    txtTransito.innerHTML = "En transito"
    txtAsignarCamion.innerHTML = "Asignar un chofer"
    txtMarcarCamion.innerHTML = "Marcar como preparado"
    txtVerCamion.innerHTML = "Ver en plataforma"

    //footer
    txtEmpresa.innerHTML = "Empresa"
    txtDondeUbicarnos.innerHTML = "Donde ubicarnos"
    txtDireccion.innerHTML = "Nos encontramos en calle 25 de agosto 1800"
}

es.addEventListener("click", function(){
    localStorage.setItem("idioma", "es")
    traducirAEspanol()
})

en.addEventListener("click", function(){
    localStorage.setItem("idioma", "en")
    traducirAIngles()
})

idioma = localStorage.getItem("idioma")

if(idioma == "es"){
    traducirAEspanol()
}

if(idioma == "en"){
    traducirAIngles()
}