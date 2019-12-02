var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    cliente = await apiGet('clientes', id)
    if(cliente.length > 0)
        llenarFormulario(cliente[0])
});

function llenarFormulario(cliente) {
    document.getElementById("nombre").value = cliente.nombre
    document.getElementById("direccion").value = cliente.direccion
    document.getElementById("correo").value = cliente.correo
    document.getElementById("telefono").value = cliente.telefono
}

function actualizarCliente() {
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

        apiPut('clientes', id, data)
        
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Cliente actualizado</strong></div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}