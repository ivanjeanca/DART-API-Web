var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    productoareacliente = await apiGet('productosareascliente', id);
    console.log(productoareacliente)
    if(productoareacliente.length > 0){
        document.getElementById("producto").innerHTML = productoareacliente[0].producto.producto
        document.getElementById("area").innerHTML = await obtenerArea(productoareacliente[0].areascliente.area.id_area)
        document.getElementById("cliente").innerHTML = productoareacliente[0].areascliente.cliente.nombre
    }
});

function eliminarProductoAreaCliente() {
    apiDelete('productosareascliente', id)
    
    document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Producto área cliente eliminado</strong></div>'
}

async function obtenerArea(id) {
    areas = await apiGet('areas', id);
    return areas[0].area
}