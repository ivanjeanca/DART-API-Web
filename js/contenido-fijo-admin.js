document.addEventListener('DOMContentLoaded', async function () {
    document.getElementById("barra-navegacion").innerHTML = 
        '<nav class="navbar navbar-expand-lg navbar-dark bg-grey">' +
            '<a class="navbar-brand" href="#">Tienda Arbitraria</a>' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
                '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse" id="navbarSupportedContent">' +
                '<ul class="navbar-nav mr-auto">' +

                    '<li class="nav-item">' +
                        '<a class="nav-link" href="ver-areas.html">Áreas</a>' +
                    '</li>' +

                    '<li class="nav-item">' +
                        '<a class="nav-link" href="ver-areas-cliente.html">Áreas cliente</a>' +
                    '</li>' +

                    '<li class="nav-item">' +
                        '<a class="nav-link" href="ver-clientes.html">Clientes</a>' +
                    '</li>' +

                    '<li class="nav-item">' +
                        '<a class="nav-link" href="ver-empleados.html">Empleados</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a class="nav-link" href="ver-productos.html">Productos</a>' +
                    '</li>' +

                    '<li class="nav-item">' +
                        '<a class="nav-link" href="ver-producto-area-cliente.html">Producto área cliente</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a class="nav-link" href="ver-usuarios.html">Usuarios</a>' +
                    '</li>' +
                '</ul>' +
            '</div>' +
        '</nav>'

    document.getElementById("pie-pagina").innerHTML = 
        '<hr>' +
        '<div class="text-center contenido-footer">' +
            'Desarrollado por <a href="https://github.com/ivanjeanca" target="_blank"><img src="../img/github128px.png" alt="Github" height="18px">/ivanjeanca</a>' +
            '<br>' +
            '<br>' +
            '<a href="http://fb.com/club.programacion.itc" target="_blank"><img src="../img/club-logo.png" alt="Club de Programacion" height="45px"></a>'
        '</div>' +
        '<hr>' 
});