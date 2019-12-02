var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    empleado = await apiGet('empleados', id)
    if(empleado.length > 0)
        llenarFormulario(empleado[0])
});

function llenarFormulario(empleado) {
    document.getElementById("nombre").value = empleado.nombre
    document.getElementById("apaterno").value = empleado.apaterno
    document.getElementById("amaterno").value = empleado.amaterno
    document.getElementById("correo").value = empleado.correo
    document.getElementById("fecha-nacimiento").value = empleado.fecha_nacimiento.slice(0,10)
}

function actualizarEmpleado() {
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

        apiPut('empleados', id, data)
        
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Empleado actualizado</strong></div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}