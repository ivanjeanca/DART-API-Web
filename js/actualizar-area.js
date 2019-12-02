var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    area = await apiGet('areas', id)
    if(area.length > 0)
        llenarFormulario(area[0])
});

function llenarFormulario(area) {
    document.getElementById("area").value = area.area
}

function actualizarArea() {
    let area = document.getElementById("area").value
    let error = ""

    if(area == "") 
        error += "<strong>[Nombre]</strong> "

    if(error.length == 0){
        data = {
            "area": area,
        }

        apiPut('areas', id, data)
        
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Cliente actualizado</strong></div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}