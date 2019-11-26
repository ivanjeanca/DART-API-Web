var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    producto = await apiGet('productos', id);
    if(producto.length > 0)
        document.getElementById("producto").innerHTML = producto[0].nomProducto
});

function eliminarProducto() {
    apiDelete('productos', id)
    
    document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Producto eliminado</strong></div>'
}