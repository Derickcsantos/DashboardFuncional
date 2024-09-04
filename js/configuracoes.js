function showContent(sectionId) {
    // Primeiro, esconder todas as seções
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Remover a classe 'active' de todos os itens de menu
    const links = document.querySelectorAll('.sidebar a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Mostrar a seção clicada e marcar o item de menu como ativo
    document.getElementById(sectionId).style.display = 'block';
    const activeLink = document.querySelector(`.sidebar a[href*="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Inicialmente, exibir a seção 'geral'
document.addEventListener('DOMContentLoaded', () => {
    showContent('geral');
});