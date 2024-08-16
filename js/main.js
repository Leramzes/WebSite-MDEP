document.addEventListener('DOMContentLoaded', function () {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
                dropdownMenu.style.opacity = '1';
            }
        });

        item.addEventListener('mouseout', function () {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.opacity = '0';
                setTimeout(() => {
                    if (!item.matches(':hover')) {
                        dropdownMenu.style.display = 'none';
                    }
                }, 300); // Tiempo de espera para coincidir con la transición
            }
        });
    });
});

// JavaScript para cargar contenido dinámico con AJAX
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');

    // Activar el enlace 'Historia' por defecto al cargar la página
    const defaultContent = 'historia';
    const defaultLink = Array.from(links).find(link => link.getAttribute('data-content') === defaultContent);
    if (defaultLink) {
        defaultLink.classList.add('active');
        loadContent(defaultContent);
    }

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Remover la clase 'active' de todos los enlaces
            links.forEach(l => l.classList.remove('active'));

            // Agregar la clase 'active' al enlace clickeado
            this.classList.add('active');

            // Cargar el contenido correspondiente
            const contentToLoad = this.getAttribute('data-content');
            loadContent(contentToLoad);
        });
    });

    function loadContent(content) {
        let url;
        switch (content) {
            case 'historia':
                url = 'content/distrito/historia.html';
                break;
            case 'himno':
                url = 'content/distrito/himno.html';
                break;
            case 'playas':
                url = 'content/distrito/playas.html';
                break;
            case 'lugares':
                url = 'content/distrito/lugares.html';
                break;
            default:
                url = '';
        }

        if (url) {
            fetch(url)
                .then(response => response.text())
                .then(data => {
                    document.querySelector('#main-content').innerHTML = data;
                });
        }
    }
});
