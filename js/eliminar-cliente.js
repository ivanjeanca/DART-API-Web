var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    cliente = await apiGet('clientes', id);
    if(cliente.length > 0)
        document.getElementById("cliente").innerHTML = cliente[0].nombre
});

function eliminarCliente() {
    apiDelete('clientes', id)
    
    document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Cliente eliminado</strong></div>'
}