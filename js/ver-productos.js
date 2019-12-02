document.addEventListener('DOMContentLoaded', async function() {
    productos = await apiGetAll('productos');
    if(productos.length > 0)
        llenarTabla(productos)
    $('#table').DataTable();
});

function llenarTabla(productos) {
    let html = ""
    for (let i = 0; i < productos.length; i++) 
        html+=  '<tr>' +
                    '<td>' + productos[i].producto + '</td>' +
                    '<td>$' + separadorCantidades(productos[i].costo.toFixed(2)) + '</td>' +
                    '<td>$' + separadorCantidades(productos[i].precio.toFixed(2)) + '</td>' +
                    '<td>' + productos[i].existencia + '</td>' +
                    '<td>' + productos[i].reorden + '</td>' +
                    '<td>' + productos[i].comprometidas + '</td>' +
                    '<td>' + (productos[i].vigente ? '<div class="btn btn-success boton-listado">Sí</div>' : '<div class="btn btn-danger boton-listado">No</div>') + '</td>' +
                    '<td class="text-center"><img src="' + productos[i].imagen + '" height=35px alt="Imagen ' + productos[i].producto + '"/></td>' +
                    '<td><a class="btn btn-info boton-accion" href="actualizar-producto.html?id=' + productos[i].id_producto + '"><img src="../img/edit.svg" height=18px></a></td>' +
                    '<td><a class="btn btn-dark boton-accion" href="eliminar-producto.html?id=' + productos[i].id_producto + '"><img src="../img/delete.svg" height=18px></a></td>' +
                '</tr>'
    document.getElementById('contenido-tabla').innerHTML = html;
}

function separadorCantidades(numero) {
    let num = numero.toString()
    return (numero >= 1000000) ? num.slice(0, num.length-6) + "," + num.slice(num.length-6, num.length-3) + "," + num.slice(num.length-3, num.length) : (numero >= 1000) ? num.slice(0, num.length-6) + "," + num.slice(num.length-6, num.length) : num
}