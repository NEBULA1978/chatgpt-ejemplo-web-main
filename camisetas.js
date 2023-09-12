const camisetasContenedor = document.getElementById("bicicletas-contenedor");

// Obtener los datos de las camisetas
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.camisetas = data.bicicletas;
        // Mostrar las camisetas en la página
        mostrarCamisetas();
    })
    .catch(error => console.error(error));

// Función para mostrar las camisetas en la página
function mostrarCamisetas() {
    const camisetasContenedor = document.getElementById("bicicletas-contenedor");
    camisetasContenedor.innerHTML = "";

    // Obtener los valores seleccionados en los filtros
    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);

    console.log(filtroPrecio);

    // Recorrer cada camiseta
    window.camisetas.forEach(function (camiseta) {
        // Comprobar si la camiseta cumple con los criterios de los filtros
        if ((filtroModelo === "" || camiseta.modelo === filtroModelo) && (filtroPrecio === 0 || camiseta.precio <= filtroPrecio)
        ) {
            // Crear un elemento div para la camiseta
            const camisetaDiv = document.createElement("div");
            camisetaDiv.classList.add("camiseta");
            // Crear una imagen para la camiseta
            const camisetaImg = document.createElement("img");
            camisetaImg.src = camiseta.img;
            camisetaImg.alt = camiseta.modelo;
            camisetaDiv.appendChild(camisetaImg);

            // Crear un h3 para el nombre de la camiseta
            const camisetaNombre = document.createElement("h3");
            camisetaNombre.innerHTML = camiseta.nombre;
            camisetaDiv.appendChild(camisetaNombre);

            // Crear un p para el modelo de la camiseta
            const camisetaModelo = document.createElement("p");
            camisetaModelo.innerHTML = camiseta.modelo;
            camisetaDiv.appendChild(camisetaModelo);

            const camisetaPrecio = document.createElement("p");
            camisetaPrecio.innerHTML = "$" + camiseta.precio;
            camisetaDiv.appendChild(camisetaPrecio);

            // Agregar el elemento div a la página
            camisetasContenedor.appendChild(camisetaDiv);
        }
    });
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar las camisetas
document.getElementById("filtro-modelo").addEventListener("change", mostrarCamisetas);
document.getElementById("filtro-precio").addEventListener("change", mostrarCamisetas);
