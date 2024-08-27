// Cargar y mostrar autoridades desde el CSV
const csvFilePath = './data/autoridades.csv';

fetch(csvFilePath)
    .then(response => response.text())
    .then(csvText => processAuthoritiesCSV(csvText))
    .catch(error => console.error('Error al cargar el archivo autoridades.csv:', error));

function processAuthoritiesCSV(csvText) {
    const rows = csvText.split('\n').slice(1); // Divide el texto en filas y omite el encabezado

    const alcaldeContainer = document.querySelector('#alcalde .d-flex');
    const gerenteContainer = document.querySelector('#gerente .d-flex');
    const regidoresContainer = document.querySelector('#regidores .d-flex');

    rows.forEach(row => {
        const cols = row.split(',');
        const rol = cols[0].trim();
        const nombre = cols[1].trim();
        const email = cols[2].trim();
        const link = cols[3].trim();
        const img = cols[4].trim();

        const cardHTML = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${img}" class="card-img-top" alt="${rol}">
                    <div class="card-body">
                        <a href="${link}" target="_blank"><h5 class="card-title">${nombre}</h5></a>
                        <p class="card-text">${email}</p>
                    </div>
                </div>
            </div>
        `;

        if (rol === 'Alcalde') {
            alcaldeContainer.innerHTML = cardHTML;
        } else if (rol === 'Gerente') {
            gerenteContainer.innerHTML = cardHTML;
        } else if (rol === 'Regidor') {
            regidoresContainer.innerHTML += cardHTML;
        }
    });
}




// Cargar y mostrar areas desde el CSV

function loadAreasServicios() {
    fetch('./data/areas.csv')
        .then(response => response.text())
        .then(csv => {
            const rows = csv.split('\n').slice(1); // Saltar la cabecera
            const container = document.querySelector('.servContent');

            rows.forEach(row => {
                const [nombre, imagen, correo] = row.split(',');

                // Crear la tarjeta
                const card = document.createElement('div');
                card.className = 'col-md-3 mb-4';
                card.innerHTML = `
                    <div>
                        <div class="service-card">
                            <img src="./images/servicios_areas/${imagen.trim()}" alt="${nombre.trim()}">
                            <h5>${nombre.trim()}</h5>
                            <p>${correo.trim()}</p>
                        </div>
                    </div>
                `;

                // Agregar la tarjeta al contenedor
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error al cargar el CSV areas:', error));
}

document.addEventListener('DOMContentLoaded', loadAreasServicios);
