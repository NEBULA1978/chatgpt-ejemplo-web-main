const bicicletasContenedor = document.getElementById("bicicletas-contenedor");

// Obtener los datos de las bicicletas
fetch("data.json")
    .then(response => response.json())
    .then(data => {
        // Almacenar los datos en una variable global
        window.bicicletas = data.bicicletas;
        // Mostrar las bicicletas en la página
        mostrarBicicletas();
    })
    .catch(error => console.error(error));

// Función para mostrar las bicicletas en la página
function mostrarBicicletas() {
    const filtroModelo = document.getElementById("filtro-modelo").value;
    const filtroPrecio = parseFloat(document.getElementById("filtro-precio").value);

    // Filtrar bicicletas que cumplen con los criterios
    const bicicletasFiltradas = window.bicicletas.filter(bicicleta => {
        return (filtroModelo === "" || bicicleta.modelo === filtroModelo) &&
               (filtroPrecio === 0 || bicicleta.precio <= filtroPrecio);
    });

    // Limpiar el contenedor
    bicicletasContenedor.innerHTML = "";

    // Crear elementos HTML para cada bicicleta y agregarlos al contenedor
    bicicletasFiltradas.forEach(bicicleta => {
        const bicicletaDiv = document.createElement("div");
        bicicletaDiv.classList.add("bicicleta");

        bicicletaDiv.innerHTML = `
            <img src="${bicicleta.img}" alt="${bicicleta.modelo}">
            <h3>${bicicleta.nombre}</h3>
            <p>${bicicleta.modelo}</p>
            <p>$${bicicleta.precio}</p>
        `;

        bicicletasContenedor.appendChild(bicicletaDiv);
    });
}

// Agregar eventos a los filtros para que al cambiar su valor, se vuelva a mostrar las bicicletas
document.getElementById("filtro-modelo").addEventListener("change", mostrarBicicletas);
document.getElementById("filtro-precio").addEventListener("change", mostrarBicicletas);
