function insertarEmpleado() {
    let nombre = document.getElementById("nombre").value
    let apaterno = document.getElementById("apaterno").value
    let amaterno = document.getElementById("amaterno").value
    let correo = document.getElementById("correo").value
    let fechanacimiento = document.getElementById("fecha-nacimiento").value
    let error = ""

    if(nombre == "") 
        error += "<strong>[Nombre]</strong> "
    if(apaterno == "") 
        error += "<strong>[Apellido Paterno]</strong> "
    if(amaterno == "") 
        error += "<strong>[Apellido Materno]</strong> "
    if(correo == "") 
        error += "<strong>[Correo]</strong> "
    if(fechanacimiento == "") 
        error += "<strong>[Fecha de nacimiento]</strong> "

    if(error.length == 0){
        data = {
            "nombre": nombre,
            "apaterno": apaterno,
            "amaterno": amaterno,
            "correo": correo,
            "fecha_nacimiento": fechanacimiento
        }

        apiPost('empleados', data)

        document.getElementById("nombre").innerHTML = ""
        document.getElementById("apaterno").innerHTML = ""
        document.getElementById("amaterno").innerHTML = ""
        document.getElementById("correo").innerHTML = ""
        document.getElementById("fecha-nacimiento").value = "2001-01-01"
        
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Empleado registrado</strong></div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}