document.addEventListener('DOMContentLoaded', async function() {
    usuarios = await apiGetAll('usuarios');
    if(usuarios.length > 0)
        llenarTabla(usuarios)
    $('#table').DataTable();
});

function llenarTabla(usuarios) {
    let html = ""
    for (let i = 0; i < usuarios.length; i++) 
        html+=  '<tr>' +
                    '<td>' + usuarios[i].id + '</td>' +
                    '<td>' + usuarios[i].username + '</td>' +
                    '<td>' + ((usuarios[i].empleado != null) ? usuarios[i].empleado.id_empleado : "Sin asignar") + '</td>' +
                '</tr>'
    document.getElementById('contenido-tabla').innerHTML = html;
}