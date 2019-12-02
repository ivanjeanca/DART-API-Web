var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    areacliente = await apiGet('areascliente', id)
    console.log(areacliente)

    clientes = await apiGet('clientes', areacliente[0].cliente.id_cliente);
    areas = await apiGet('areas', areacliente[0].area.id_area);
    
    if(areas.length > 0)
        document.getElementById("area").innerHTML = areas[0].area
    else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Ha ocurrido un error</strong></div>'

    if(clientes.length > 0)
        document.getElementById("cliente").innerHTML = clientes[0].nombre
    else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Ha ocurrido un error</strong></div>'
});

function eliminarAreaCliente() {
    apiDelete('areascliente', id)
    
    document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Área eliminada</strong></div>'
}