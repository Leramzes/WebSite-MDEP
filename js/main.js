document.addEventListener('DOMContentLoaded', function() {
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');

    dropdownItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const dropdownMenu = this.querySelector('.dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.style.display = 'block';
                dropdownMenu.style.opacity = '1';
            }
        });

        item.addEventListener('mouseout', function() {
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
