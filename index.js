function showSynopsis(element) {
    const synopsis = element.previousElementSibling;
    synopsis.style.display = 'block'; // Exibe a sinopse
}

function hideSynopsis(element) {
    const synopsis = element.previousElementSibling;
    synopsis.style.display = 'none'; // Oculta a sinopse
}
