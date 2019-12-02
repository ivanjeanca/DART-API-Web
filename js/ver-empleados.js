document.addEventListener('DOMContentLoaded', async function() {
    empleados = await apiGetAll('empleados');
    if(empleados.length > 0)
        llenarTabla(empleados)
    $('#table').DataTable();
});

function llenarTabla(empleados) {
    let html = ""
    console.log(empleados)
    for (let i = 0; i < empleados.length; i++) 
        html+=  '<tr>' +
                    '<td>' + empleados[i].id_empleado + '</td>' +
                    '<td>' + empleados[i].apaterno + '</td>' +
                    '<td>' + empleados[i].amaterno + '</td>' +
                    '<td>' + empleados[i].nombre + '</td>' +
                    '<td>' + empleados[i].fecha_nacimiento.slice(0,10) + '</td>' +
                    '<td>' + empleados[i].correo + '</td>' +
                    '<td><a class="btn btn-info boton-accion" href="actualizar-empleado.html?id=' + empleados[i].id_empleado + '"><img src="../img/edit.svg" height=18px></a></td>' +
                    '<td><a class="btn btn-dark boton-accion" href="eliminar-empleado.html?id=' + empleados[i].id_empleado + '"><img src="../img/delete.svg" height=18px></a></td>' +
                '</tr>'
    document.getElementById('contenido-tabla').innerHTML = html;
}