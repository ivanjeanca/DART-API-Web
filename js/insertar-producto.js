function insertarProducto() {
    let producto = document.getElementById("producto").value
    let costo = document.getElementById("costo").value
    let precio = document.getElementById("precio").value
    let existencia = document.getElementById("existencia").value
    let reorden = document.getElementById("reorden").value
    let comprometidas = document.getElementById("comprometidas").value
    let vigente = document.getElementById("vigente").value
    let imagen = document.getElementById("imagen").value
    let error = ""
    let vigenteAux

    if(producto == "") 
        error += "<strong>[Producto]</strong> "
    if(costo == "") 
        error += "<strong>[Costo]</strong> "
    if(precio == "") 
        error += "<strong>[Precio]</strong> "
    if(existencia == "") 
        error += "<strong>[Existencia]</strong> "
    if(reorden == "") 
        error += "<strong>[Reorden]</strong> "
    if(comprometidas == "") 
        error += "<strong>[Comprometidas]</strong> "
    if(vigente == "null") 
        error += "<strong>[Vigente]</strong> "
    if(imagen == "") 
        error += "<strong>[Imagen]</strong> "

    if(error.length == 0){
        if(parseFloat(costo) < 0)
            error += "<strong>[Costo]</strong> "
        if(parseFloat(precio) < 0)
            error += "<strong>[Precio]</strong> "
        if(parseInt(existencia) < 0)
            error += "<strong>[Existencia]</strong> "
        if(parseInt(reorden) < 0)
            error += "<strong>[Reorden]</strong> "
        if(parseInt(comprometidas) < 0)
            error += "<strong>[Comprometidas]</strong> "

        if(error.length == 0){
            if(vigente == "true") vigenteAux = true
            if(vigente == "false") vigenteAux = false
            data = {
                "producto": producto,
                "costo": parseFloat(costo),
                "precio": parseFloat(precio),
                "existencia": parseInt(existencia),
                "reorden": parseInt(reorden),
                "comprometidas": parseInt(comprometidas),
                "vigente": vigenteAux,
                "imagen": imagen
            }

            apiPost('productos', data)

            document.getElementById("producto").innerHTML = ""
            document.getElementById("costo").innerHTML = ""
            document.getElementById("precio").innerHTML = ""
            document.getElementById("existencia").innerHTML = ""
            document.getElementById("reorden").innerHTML = ""
            document.getElementById("comprometidas").innerHTML = ""
            document.getElementById("vigente").innerHTML = "null"
            document.getElementById("imagen").innerHTML = ""
            
            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Producto registrado</strong></div>'
        } else
            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Información incorrecta en<br>' + error + '</div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}

function cargarVistaPrevia() {
    let imgurl = document.getElementById("imagen").value
    document.getElementById("vista-previa-imagen").innerHTML = '<img src="' + imgurl + '" alt="El url no es una imagen" height=150px/>'
}