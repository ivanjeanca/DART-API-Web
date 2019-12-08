var id

document.addEventListener('DOMContentLoaded', async function() {
    areacliente = await apiGetAll('areascliente');
    productos = await apiGetAll('productos');
    if(productos.length > 0)
        llenarProductos(productos)
    if(areacliente.length > 0)
        llenarProductoArea(areacliente)

    id = location.href.split("=")[1]
    areacliente = await apiGet('productosareascliente', id)
    
    if(areacliente.length > 0)
        llenarFormulario(areacliente[0])
});

function llenarProductos(productos) {
    let html = '<select id="productos" class="form-control">'
    for (let i = 0; i < productos.length; i++) 
        html += '<option value="' + productos[i].id_producto + '">' + productos[i].producto + '</option>'
    html += '</select>'
    document.getElementById("select-productos").innerHTML = html
}

function llenarProductoArea(areacliente) {
    let html = '<select id="areacliente" class="form-control">'
    for (let i = 0; i < areacliente.length; i++) 
        html += '<option value="' + areacliente[i].id_area_cliente + '">' + areacliente[i].area.area + " - "  + areacliente[i].cliente.nombre + '</option>'
    html += '</select>'
    document.getElementById("select-areacliente").innerHTML = html
}

function llenarFormulario(areacliente) {
    document.getElementById("areacliente").value = areacliente.areascliente.id_area_cliente
    document.getElementById("productos").value = areacliente.producto.id_producto
    document.getElementById("consumo").value = areacliente.consumo
}

function actualizarProductoAreaCliente() {
    let id_producto = document.getElementById("productos").value
    let id_area_cliente = document.getElementById("areacliente").value
    let consumo = document.getElementById("consumo").value
    let error = ""

    if(consumo == "") 
        error += "<strong>[Consumo]</strong> "

    if(error.length == 0) {
        if(parseFloat(consumo) < 1)
            error += "<strong>[Consumo]</strong> "

        if(error.length == 0) {
            data = {
                "areascliente": {
                    "id_area_cliente": parseInt(id_area_cliente)
                },
                "producto": {
                    "id_producto": parseInt(id_producto)
                },
                "consumo": parseInt(consumo)
            }

            apiPut('productosareascliente', id, data)

            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Producto área cliente actualizado</strong></div>'
        } else
            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Error en<br>' + error + '</div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}