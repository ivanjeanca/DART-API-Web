document.addEventListener('DOMContentLoaded', async function() {
    clientes = await apiGetAll('clientes');
    areas = await apiGetAll('areas');
    if(clientes.length > 0)
        llenarClientes(clientes)
    if(areas.length > 0)
        llenarAreas(areas)
});

function llenarClientes(clientes) {
    let html = '<select id="clientes" class="form-control">'
    for (let i = 0; i < clientes.length; i++) 
        html += '<option value="' + clientes[i].id_cliente + '">' + clientes[i].nombre + '</option>'
    html += '</select>'
    document.getElementById("select-clientes").innerHTML = html
}

function llenarAreas(areas) {
    let html = '<select id="areas" class="form-control">'
    for (let i = 0; i < areas.length; i++) 
        html += '<option value="' + areas[i].id_area + '">' + areas[i].area + '</option>'
    html += '</select>'
    document.getElementById("select-areas").innerHTML = html
}

function insertarAreaCliente() {
    let numero_empleados = document.getElementById("numero-empleados").value
    let id_area = document.getElementById("areas").value
    let id_cliente = document.getElementById("clientes").value
    let error = ""

    if(numero_empleados == "") 
        error += "<strong>[No. empleados]</strong> "


    if(error.length == 0) {

        if(parseFloat(numero_empleados) < 1)
            error += "<strong>[No. empleados]</strong> "

        if(error.length == 0) {
            data = {
                "numero_empleados": parseInt(numero_empleados),
                "area": {
                    "id_area": parseInt(id_area)
                },
                "cliente": {
                    "id_cliente": parseInt(id_cliente)
                }
            }

            apiPost('areascliente', data)

            document.getElementById("numero-empleados").innerHTML = ""
            
            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Área cliente registrada</strong></div>'
        } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Error en<br>' + error + '</div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}