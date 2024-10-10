// transicao.js

// Função para fazer a transição entre páginas
function fadeOutAndRedirect(targetUrl) {
    const loading = document.getElementById('loading');
    
    loading.style.display = 'block'; // Mostra o loader
    document.body.classList.add('fade-out'); // Para animação de desvanecimento

    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Aguarda 1 segundo para a animação completa
}

// Adiciona event listeners aos links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#' && !href.startsWith('http')) {
                e.preventDefault(); // Impede o comportamento padrão do link
                fadeOutAndRedirect(href);
            }
        });
    });
});
