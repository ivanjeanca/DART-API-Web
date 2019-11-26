var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    producto = await apiGet('productos', id);
    if(producto.length > 0)
        llenarFormulario(producto[0])
});

function llenarFormulario(producto) {
    document.getElementById("producto").value = producto.producto
    document.getElementById("costo").value = producto.costo
    document.getElementById("precio").value = producto.precio
    document.getElementById("existencia").value = producto.existencia
    document.getElementById("reorden").value = producto.reorden
    document.getElementById("comprometidas").value = producto.comprometidas
    document.getElementById("vigente").value = producto.vigente
    document.getElementById("imagen").value = producto.imagen
}

function actualizarProducto() {
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

            apiPut('productos', id, data)
            
            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Producto actualizado</strong></div>'
        } else
            document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Información incorrecta en<br>' + error + '</div>'
    } else
        document.getElementById("area-info").innerHTML = '<br><div class="alert alert-danger text-center">Falta llenar<br>' + error + '</div>'
}