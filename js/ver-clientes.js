document.addEventListener('DOMContentLoaded', async function() {
    clientes = await apiGetAll('clientes');
    if(clientes.length > 0)
        llenarTabla(clientes)
    $('#table').DataTable();
});

function llenarTabla(clientes) {
    let html = ""
    for (let i = 0; i < clientes.length; i++) 
        html+=  '<tr>' +
                    '<td>' + clientes[i].id_cliente + '</td>' +
                    '<td>' + clientes[i].nombre + '</td>' +
                    '<td>' + clientes[i].direccion + '</td>' +
                    '<td>' + clientes[i].correo + '</td>' +
                    '<td>' + clientes[i].telefono + '</td>' +
                    '<td><a class="btn btn-info boton-accion" href="actualizar-cliente.html?id=' + clientes[i].id_cliente + '"><img src="../img/edit.svg" height=18px></a></td>' +
                    '<td><a class="btn btn-dark boton-accion" href="eliminar-cliente.html?id=' + clientes[i].id_cliente + '"><img src="../img/delete.svg" height=18px></a></td>' +
                '</tr>'
    document.getElementById('contenido-tabla').innerHTML = html;
}