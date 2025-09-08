let productos = [
    {
        nombre: "Pastel Red Velvet",
        precio: 25000,
        imagen: "assets/img/haz un pastel de cumpleaños de red velvet.jpg"
    },
    {
        nombre: "Pastel de Fresa",
        precio: 20000,
        imagen: "assets/img/haz un pastel de fresas.jpg"
    },
    {
        nombre: "Pie de Limón",
        precio: 15000,
        imagen: "assets/img/haz un pie de limon.jpg"
    },
];

let contenedorproductos = document.getElementById("producto");

productos.forEach(prod => {
    contenedorproductos.innerHTML += `
    <div class="col-md-4 mb-3">
        <div class="card h-100">
            <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}">
            <div class="card-body">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="fw-bold">$${prod.precio}</p>
                <button class="btn button" type="button">Añadir</button>
            </div>
        </div>
    </div>
    `;
});