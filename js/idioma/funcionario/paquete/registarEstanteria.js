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
let txtLista = document.getElementById("registar-paquete")
let txtFuncionario = document.getElementById("id-funcionario")
let txtIDPaquete = document.getElementById("id-paquete")
let txtIDEstante = document.getElementById("id-estante")
let txtIDAlmacen = document.getElementById("id-almacen")
let txtListarPaquete = document.getElementById("listar-paquete")
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
    txtLista.innerHTML = "Register Package on Shelf - Package"
    txtFuncionario.innerHTML = "Employee ID"
    txtIDPaquete.innerHTML = "Package ID"
    txtIDEstante.innerHTML = "Shelf ID"
    txtIDAlmacen.innerHTML = "Warehouse ID"
    txtListarPaquete.innerHTML = "List Package"
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
    txtIngles.innerHTML = "Ingles"
    txtEspañol.innerHTML = "Español"
    //homepage
    txtLista.innerHTML = "Registrar Paquete en Estante - Paquete"
    txtFuncionario.innerHTML = "ID Funcionario"
    txtIDPaquete.innerHTML = "ID Paquete"
    txtIDEstante.innerHTML = "ID Estante"
    txtIDAlmacen.innerHTML = "ID Almacen"
    txtListarPaquete.innerHTML = "Listar Paquete"
    //footer
    txtEmpresa.innerHTML = "Empresa"
    txtDondeUbicarnos.innerHTML = "Donde ubicarnos"
    txtDireccion.innerHTML = "Nos encontramos en calle 25 de agosto 1800"
    txtNosotrosFooter.innerHTML = "Sobre Nosotros"
    txtServiciosFooter.innerHTML = "Servicios"
    txtContactoFooter.innerHTML = "Contacto"
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