document.addEventListener('DOMContentLoaded', async function() {
    areascliente = await apiGetAll('areascliente');
    if(areascliente.length > 0)
        llenarTabla(areascliente)
    $('#table').DataTable();
});

async function llenarTabla(areascliente) {
    let html = ""
    for (let i = 0; i < areascliente.length; i++) 
        html+=  '<tr>' +
                    '<td>' + areascliente[i].numero_empleados + '</td>' +
                    '<td>' + areascliente[i].area.area + '</td>' +
                    '<td>' + areascliente[i].cliente.nombre + '</td>' +
                    '<td><a class="btn btn-info boton-accion" href="actualizar-area-cliente.html?id=' + areascliente[i].id_area_cliente + '"><img src="../img/edit.svg" height=18px></a></td>' +
                    '<td><a class="btn btn-dark boton-accion" href="eliminar-area-cliente.html?id=' + areascliente[i].id_area_cliente + '"><img src="../img/delete.svg" height=18px></a></td>' +
                '</tr>'
    document.getElementById('contenido-tabla').innerHTML = html;
}