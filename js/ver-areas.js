document.addEventListener('DOMContentLoaded', async function() {
    areas = await apiGetAll('areas');
    if(areas.length > 0)
        llenarTabla(areas)
    $('#table').DataTable();
});

function llenarTabla(areas) {
    let html = ""
    for (let i = 0; i < areas.length; i++) 
        html+=  '<tr>' +
                    '<td>' + areas[i].area + '</td>' +
                    '<td><a class="btn btn-info boton-accion" href="actualizar-area.html?id=' + areas[i].id_area + '"><img src="../img/edit.svg" height=18px></a></td>' +
                    '<td><a class="btn btn-dark boton-accion" href="eliminar-area.html?id=' + areas[i].id_area + '"><img src="../img/delete.svg" height=18px></a></td>' +
                '</tr>'
    document.getElementById('contenido-tabla').innerHTML = html;
}