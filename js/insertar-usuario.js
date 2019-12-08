document.addEventListener('DOMContentLoaded', async function() {
    empleados = await apiGetAll('empleados');
    console.log(empleados)
    if(empleados.length > 0)
        llenarEmpleados(empleados)
});

function llenarEmpleados(empleados) {
    let html = '<select id="empleados" class="form-control">'
    for (let i = 0; i < empleados.length; i++) 
        html += '<option value="' + empleados[i].id_empleado + '">' + empleados[i].nombre + ' ' + empleados[i].apaterno + ' ' + empleados[i].amaterno + '</option>'
    html += '</select>'
    document.getElementById("select-empleados").innerHTML = html
}

async function insertarUsuario() {
    let usuario = document.getElementById("usuario").value
    let contrasena = document.getElementById("contrasena").value
    let confirmar_contrasena = document.getElementById("confirmar-contrasena").value
    let id_empleado = document.getElementById("empleados").value
    let error = ""

    if(usuario == "") 
        error += "<strong>[Usuario]</strong> "
    if(contrasena == "") 
        error += "<strong>[Contraseña]</strong> "
    if(confirmar_contrasena == "") 
        error += "<strong>[Confirmar contraseña]</strong> "
    if(error.length == 0){
        if(contrasena != confirmar_contrasena)
            error += "<strong>[Las contraseñas no coinciden]</strong> "
        if(error.length == 0){
            data = {
                "username": usuario,
                "password": contrasena,
                "empleado": {
                    "id_empleado": parseInt(id_empleado)
                }
            }

            let status = 200

            try {
                insert = await apiPost('usuarios', data)   
            } catch (error) {
                status = error.status
            }

            if(status == 200) {
                document.getElementById("usuario").innerHTML = ""
                document.getElementById("contrasena").innerHTML = ""
                document.getElementById("confirmar-contrasena").innerHTML = ""
                document.getElementById("select-empleados").value = 0
                document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Usuario registrado</strong></div>'
            } else if (status == 409) {
                document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center"><strong>El empleado ya cuenta con un usuario.</strong></div>'
            }
        } else
            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Error <br>' + error + '</div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}