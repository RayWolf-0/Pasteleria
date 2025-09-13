document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
             <nav class="navbar navbar-expand-lg pastel-navbar">
            <div class="container-fluid">
                <img class="logo" src="assets/img/logopasteleria.png" alt="Logo Pastelería">
                <a class="navbar-brand ms-3" href="#">Pastelería Mil Sabores</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a id="txtinicio" class="nav-link active" href="indice.html">Inicio</a>
                        </li>
                        <li class="nav-item"><a id="txtlogin" class="nav-link" href="login.html">Login</a></li>
                        <li class="nav-item"><a id="txtregistro" class="nav-link" href="registro.html">Registrarse</a>
                        </li>
                        <li class="nav-item"><a id="txtnoticias" class="nav-link"
                                href="https://www.duoc.cl/noticias/">Blogs y Noticias</a></li>
                        <li class="nav-item"><a id="txtrecetas" class="nav-link" href="perfil-usuario.html">Perfil</a>
                        </li>
                        <li class="nav-item"><a id="txtconsejos" class="nav-link" href="#">Consejos</a></li>
                        <li class="nav-item dropdown">
                            <a id="txtmenu" class="nav-link dropdown-toggle" href="menu.html" role="button"
                                data-bs-toggle="dropdown">Menú</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="menu.html">Pasteles</a></li>
                                <li><a class="dropdown-item" href="menu.html">Galletas</a></li>
                                <li><a class="dropdown-item" href="menu.html">Dulces</a></li>
                                <li><a class="dropdown-item" href="administrador.html">Administrador</a></li>
                            </ul>
                        </li>
                    </ul>

                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Buscar">
                        <button class="btn btn-buscar" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
        `;

const logueado = localStorage.getItem("logueado");
document.getElementById("nav-login").classList.toggle("d-none", logueado === "true");
document.getElementById("nav-registro").classList.toggle("d-none", logueado === "true");
document.getElementById("nav-logout").classList.toggle("d-none", logueado !== "true");

if (logueado === "true") {
    const user = localStorage.getItem("usuario");
    document.querySelector("#nav-logout a").textContent = `Logout ${user}`
}