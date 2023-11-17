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
let txtBienvenido = document.getElementById("bienvenido")
let txtIngresar = document.getElementById("ingresar")
let txtUsername = document.getElementById("username")
let txtPassword = document.getElementById("password")
let txtIngresar2 = document.getElementById("botonLogin")
let txtQuienesSomos = document.getElementById("data-sobre-nosotros")
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
    txtSobreNosotros.innerHTML = "About us"
    txtServicios.innerHTML = "Services"
    txtContacto.innerHTML = "Contact"
    txtIngles.innerHTML = "English"
    txtEspañol.innerHTML = "Spanish"
    //homepage
    txtBienvenido.innerHTML = "Welcome"
    txtIngresar.innerHTML = "Log in"
    txtUsername.placeholder = "Username"
    txtPassword.placeholder = "Password"
    txtIngresar2.innerHTML = "Log in"
    txtNosotros.innerHTML = "About us"
    txtQuienesSomos.innerHTML = "Fork Software is an IT company specialized in the effective control and supervision of freight transportation. Its primary focus is to ensure the safety and efficiency of each shipment by providing businesses with complete, real-time visibility of their packages. Through its advanced technological platform, Fork Software enables detailed tracking of shipments, offering clients the peace of mind of knowing the exact location of their packages at all times. While currently operating exclusively in Uruguay, the company has plans for expansion into other neighboring countries in the future. With a commitment to innovation and collaboration with other businesses, Fork Software strives to adapt to the future needs of its clients in the logistics field."
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
    txtSobreNosotros.innerHTML = "Sobre Nosotros"
    txtServicios.innerHTML = "Servicios"
    txtContacto.innerHTML = "Contacto"
    txtIngles.innerHTML = "Ingles"
    txtEspañol.innerHTML = "Español"
    //homepage
    txtBienvenido.innerHTML = "Bienvenido"
    txtIngresar.innerHTML = "Ingresar"
    txtUsername.placeholder = "Usuario"
    txtPassword.placeholder = "Contraseña"
    txtIngresar2.innerHTML = "Ingresar"
    txtNosotros.innerHTML = "Sobre Nosotros"
    txtQuienesSomos.innerHTML = "Fork Software es una empresa de tecnología especializada en el control y supervisión efectiva del transporte de mercaderías. Su foco principal es garantizar la seguridad y eficiencia de cada envío, brindando a las empresas una visibilidad completa y en tiempo real de sus paquetes. A través de su plataforma tecnológica avanzada, Fork Software permite un seguimiento detallado de los envíos, ofreciendo a los clientes la tranquilidad de conocer la ubicación exacta de sus paquetes en todo momento. Si bien actualmente opera exclusivamente en Uruguay, la empresa tiene planes de expansión a otros países vecinos en el futuro. Con un compromiso de innovación y colaboración con otras empresas, Fork Software se esfuerza por adaptarse a las necesidades futuras de sus clientes en el campo de la logística."
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