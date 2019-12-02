function insertarCliente() {
    let nombre = document.getElementById("nombre").value
    let direccion = document.getElementById("direccion").value
    let correo = document.getElementById("correo").value
    let telefono = document.getElementById("telefono").value
    let error = ""

    if(nombre == "") 
        error += "<strong>[Nombre]</strong> "
    if(direccion == "") 
        error += "<strong>[Dirección]</strong> "
    if(correo == "") 
        error += "<strong>[Correo]</strong> "
    if(telefono == "") 
        error += "<strong>[Teléfono]</strong> "

    if(error.length == 0){
        data = {
            "nombre": nombre,
            "direccion": direccion,
            "correo": correo,
            "telefono": telefono
        }

        apiPost('clientes', data)

        document.getElementById("nombre").innerHTML = ""
        document.getElementById("direccion").innerHTML = ""
        document.getElementById("correo").innerHTML = ""
        document.getElementById("telefono").innerHTML = ""
        
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Cliente registrado</strong></div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}