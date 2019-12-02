var id

document.addEventListener('DOMContentLoaded', async function() {
    id = location.href.split("=")[1]
    empleado = await apiGet('empleados', id);
    if(empleado.length > 0)
        document.getElementById("empleado").innerHTML = empleado[0].nombre + ' ' + empleado[0].apaterno + ' ' + empleado[0].amaterno
});

function eliminarEmpleado() {
    apiDelete('empleados', id)
    
    document.getElementById("area-info").innerHTML = '<br><div class="alert alert-info text-center"><strong>Empleado eliminado</strong></div>'
}