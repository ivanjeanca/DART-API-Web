document.addEventListener('DOMContentLoaded', async function() {
    productosareascliente = await apiGetAll('productosareascliente');
    if(productosareascliente.length > 0)
        llenarTabla(productosareascliente)
        $('#table').DataTable();
});

async function llenarTabla(productosareascliente) {
    let html = ""
    for (let i = 0; i < productosareascliente.length; i++) 
        html+=  '<tr>' +
                    '<td>' + productosareascliente[i].producto.producto + '</td>' +
                    '<td>' + await obtenerArea(productosareascliente[i].areascliente.area.id_area) + '</td>' +
                    '<td>' + productosareascliente[i].areascliente.cliente.nombre + '</td>' +
                    '<td>' + productosareascliente[i].consumo + '</td>' +
                    '<td><a class="btn btn-info boton-accion" href="actualizar-producto-area-cliente.html?id=' + productosareascliente[i].id_producto_area_cliente + '"><img src="../img/edit.svg" height=18px></a></td>' +
                    '<td><a class="btn btn-dark boton-accion" href="eliminar-producto-area-cliente.html?id=' + productosareascliente[i].id_producto_area_cliente + '"><img src="../img/delete.svg" height=18px></a></td>' +
                '</tr>'
    document.getElementById('contenido-tabla').innerHTML = html;
}

async function obtenerArea(id) {
    areas = await apiGet('areas', id);
    return areas[0].area
}