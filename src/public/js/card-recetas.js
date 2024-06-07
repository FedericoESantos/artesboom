document.addEventListener('DOMContentLoaded', function() {
    const toggleLinks = document.querySelectorAll('.toggle');
    toggleLinks.forEach(function(toggleLink) {
        toggleLink.addEventListener('click', function(event) {
            event.preventDefault();
            const postresCardInfo = toggleLink.closest('.postres-card-info');
            const extraContent = postresCardInfo.querySelector('.extra-content');

            if (extraContent.style.display === 'block') {
                extraContent.style.display = 'none';
                toggleLink.textContent = 'Leer más';
            } else {
                extraContent.style.display = 'block';
                toggleLink.textContent = 'Leer menos';
            }
        });
    });
});