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
let txtServiciosTitulo = document.getElementById("servicios-titulo")
let txtBienvenido = document.getElementById("gestion-almacen")
let txtGerente = document.getElementById("gestion-transporte")
let txtFuncionario = document.getElementById("rastro-paquete")
let txtIngresar = document.getElementById("almacen")
let txtIngresar2 = document.getElementById("transporte")
let txtQuienesSomos = document.getElementById("paquete")
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
    txtContacto.innerHTML = "Contact"
    txtIngles.innerHTML = "English"
    txtEspañol.innerHTML = "Spanish"
    //homepage
    txtServiciosTitulo.innerHTML = "Services"
    txtBienvenido.innerHTML = "Warehouse Management"
    txtGerente.innerHTML = "Transport Management"
    txtFuncionario.innerHTML = "Package Tracking"
    txtIngresar.innerHTML = "WAREHOUSE <br><br> We offer a specialized Warehouse Management service, taking care of the internal logistics of packages, batches, trucks in the warehouse, platforms, and shelves. Our platform facilitates efficient control, optimizing product distribution and ensuring organized management. With us, customers can rely on complete inventory management, ensuring smooth and effective warehouse operation."
    txtIngresar2.innerHTML = "TRANSPORT <br><br> We offer a comprehensive Transport Management service, taking care of the administration of trucks and drivers. Our focus is on efficiency, generating optimal routes to ensure effective deliveries. With us, customers can trust complete logistics management, ensuring efficient transportation and professional management of every aspect of the delivery process."
    txtQuienesSomos = "PACKAGE <br><br> Our Package Tracking service allows customers to obtain information about the status of their shipments, as well as details about the driver responsible for the delivery. Through an easy-to-use platform, we provide updates on the package's progress and an estimate of the route from our warehouse to their doorstep. We simplify tracking to keep our customers informed and confident in managing their shipments."
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
    txtServiciosTitulo.innerHTML = "Servicios"
    txtBienvenido.innerHTML = "Gestion de Almacen"
    txtGerente.innerHTML = "Gestion de Transporte"
    txtFuncionario.innerHTML = "Rastro de Paquete"
    txtIngresar.innerHTML = "ALMACEN <br><br> Ofrecemos un servicio especializado de Gestion de Almacen, encargandonos de la logistica interna de paquetes, lotes, camiones en el almacen, plataformas y estanterias. Nuestra plataforma facilita un control eficiente, optimizando la distribucion de productos y asegurando una gestion organizada. Con nosotros, los clientes pueden confiar en una gestion de inventario completa, asegurando un funcionamiento fluido y efectivo del almacen."
    txtIngresar2.innerHTML = "TRANSPORTE <br><br> Ofrecemos un servicio integral de Gestion de Transporte, encargandonos de la administracion de camiones y conductores. Nuestro foco esta en la eficiencia, generando rutas optimas para asegurar entregas efectivas. Con nosotros, los clientes pueden confiar en una gestion logistica completa, asegurando un transporte eficiente y una gestion profesional de todos los aspectos del proceso de entrega."
    txtQuienesSomos.innerHTML = "PAQUETE <br><br> Nuestro servicio de Rastro de Paquete permite a los clientes obtener informacion sobre el estado de sus envios, asi como detalles sobre el conductor responsable de la entrega. A traves de una plataforma facil de usar, brindamos actualizaciones sobre el progreso del paquete y una estimacion de la ruta desde nuestro almacen hasta su puerta. Simplificamos el seguimiento para mantener a nuestros clientes informados y confiados en la gestion de sus envios."
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