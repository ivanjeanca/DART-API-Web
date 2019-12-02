var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    area = await apiGet('areas', id);
    if(area.length > 0)
        document.getElementById("area").innerHTML = area[0].area
});

function eliminarArea() {
    apiDelete('areas', id)
    
    document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Área eliminada</strong></div>'
}