function insertarArea() {
    let area = document.getElementById("area").value
    let error = ""

    if(area == "") 
        error += "<strong>[Área]</strong> "

    if(error.length == 0){
        data = {
            "area": area
        }

        apiPost('areas', data)

        document.getElementById("area").innerHTML = ""
        
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Área registrada</strong></div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}