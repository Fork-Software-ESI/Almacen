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

// Bienvenido a Fork Software
let txtBienvenido = document.getElementById("bienvenido")

// Gerente
let txtGerente = document.getElementById("gerente")

// Chofer
let txtChofer = document.getElementById("chofer")

// Funcionario
let txtFuncionario = document.getElementById("funcionario")

/* // Fork Software es una empresa de informática especializada en el
control y supervisión efectiva del transporte de paquetería.
Su enfoque principal es garantizar la seguridad y eficiencia
de cada envío, proporcionando a las empresas una visibilidad
completa y en tiempo real de sus paquetes. A través de su plataforma
tecnológica avanzada, Fork Software permite un seguimiento detallado
de los envíos, brindando a sus clientes la tranquilidad de saber
dónde se encuentran sus paquetes en todo momento. Aunque actualmente
operan exclusivamente en Uruguay, la empresa tiene planes de
expansión hacia otros países cercanos en el futuro. Con un enfoque
en la innovación y la colaboración con otras empresas, Fork Software
se esfuerza por adaptarse a las necesidades futuras de sus clientes
en el campo de la logística. */
let txtQuienesSomos = document.getElementById("data-sobre-nosotros")

// Empresa
let txtEmpresa = document.getElementById("empresa")

// Donde Ubicarnos
let txtDondeUbicarnos = document.getElementById("donde-ubicarnos")

// Direccion
let txtDireccion = document.getElementById("direccion")


//footer
let txtNosotrosFooter = document.getElementById("nosotros-footer")
let txtServiciosFooter = document.getElementById("servicios-footer")
let txtContactoFooter = document.getElementById("contacto-footer")

function traducirAIngles(){
    //navbar
    txtInicio.innerHTML = "Home"
    txtSobreNosotros.innerHTML = "About us"
    txtNosotros.innerHTML = "About us"
    txtServicios.innerHTML = "Shipments"
    txtContacto.innerHTML = "Contact"
    txtIngles.innerHTML = "English"
    txtEspañol.innerHTML = "Spanish"
    //homepage
    txtBienvenido.innerHTML = "Bridging paths, building trust."
    txtChofer.innerHTML = "Driver"
    txtGerente.innerHTML = "Manager"
    txtFuncionario.innerHTML = "Employee"
    txtQuienesSomos.innerHTML = "Fork Software is an IT company specialized in the effective control and supervision of freight transportation. Its primary focus is to ensure the safety and efficiency of each shipment by providing businesses with complete, real-time visibility of their packages. Through its advanced technological platform, Fork Software enables detailed tracking of shipments, offering clients the peace of mind of knowing the exact location of their packages at all times. While currently operating exclusively in Uruguay, the company has plans for expansion into other neighboring countries in the future. With a commitment to innovation and collaboration with other businesses, Fork Software strives to adapt to the future needs of its clients in the logistics field."
    txtEmpresa.innerHTML = "Company"
    txtDondeUbicarnos.innerHTML = "Where to find us"
    txtDireccion.innerHTML = "We find ourselves 25 de agosto 1800"
    //footer
    txtNosotrosFooter.innerHTML = "About us"
    txtServiciosFooter.innerHTML = "Shipments"
    txtContactoFooter.innerHTML = "Contact"
}

function traducirAEspanol(){

    //navbar
    txtInicio.innerHTML = "Inicio"
    txtSobreNosotros.innerHTML = "Sobre Nosotros"
    txtServicios.innerHTML = "Envios"
    txtContacto.innerHTML = "Contacto"
    txtIngles.innerHTML = "Ingles"
    txtEspañol.innerHTML = "Español"
    //homepage
    txtBienvenido.innerHTML = "Bienvenido a Fork Software"
    txtQuienesSomos.innerHTML = "Fork Software es una empresa de informática especializada en el control y supervisión efectiva del transporte de paquetería. Su enfoque principal es garantizar la seguridad y eficiencia completa y en tiempo real de sus paquetes. A través de su plataforma tecnológica avanzada, Fork Software permite un seguimiento detallado de los envíos, brindando a sus clientes la tranquilidad de saber dónde se encuentran sus paquetes en todo momento. Aunque actualmente operan exclusivamente en Uruguay, la empresa tiene planes de expansión hacia otros países cercanos en el futuro. Con un enfoque en la innovación y la colaboración con otras empresas, Fork Software se esfuerza por adaptarse a las necesidades futuras de sus clientes en el campo de la logística."
    txtEmpresa.innerHTML = "Empresa"
    txtDondeUbicarnos.innerHTML = "Donde ubicarnos"
    txtDireccion.innerHTML = "Direccion"
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