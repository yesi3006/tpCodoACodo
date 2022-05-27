//********************Header y Footer del aplicativo********************************/
var cabecera= `
<nav>
    <a class="nav" href="index.html">Home</a>
    <a class="nav" href="about.html">Acerca de</a>
    <a class="nav" href="contact.html">Contacto</a>
    <a class="nav" href="form.html">Registrese</a>
    <a class="nav" href="location.html">Sucursales</a>
    <a class="nav" href="ourClients.html">Nuestros Clientes</a>
    <a class="nav" href="products.html">Nuestros Productos</a>
</nav>
<h2>La cocina de Don Julian</h2> <!--Se usa una sola vez porque indica el título principal-->
`
document.getElementById("idHeader").innerHTML = cabecera;

var piePagina= `
<div>
    <a href="https://www.facebook.com" class="fa-brands fa-facebook" id="social" target="_blank"></a>
    <a href="https://www.youtube.com" class="fa-brands fa-youtube" id="social" target="_blank"></a>
    <a href="https://www.likedin.com" class="fa-brands fa-linkedin-in"id="social" target="_blank"></a>
    <a href="https://www.instagram.com" class="fa-brands fa-instagram" id="social" target="_blank"></a>
</div>
<p>Derechos reservados @2020</p>
`
document.getElementById("idFooter").innerHTML = piePagina;


if (document.getElementById("idTable")){
    //encabezado 
    cad = `
        <p> Esto es generado por JS </p>
        <table>
            <tr>
                <th> Nombre </th>
                <th> Descripcion </th>
                <th> Imagen </th>
            </tr>
    `   
    // y varia contenido
    for (var i = 0; i < data.length; i++){
        cad+= `
        <tr>
            <td>${data[i].nombre}</td>
            <td>${data[i].descripcion}</td>
            <td>
                <img src="${data[i].imagen}" >
            </td>
        </tr>
        `
    }
    cad += `
        </table>
    `
    console.log(cad);
    document.getElementById("idTable").innerHTML = cad;
}
