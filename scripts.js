document.addEventListener("DOMContentLoaded", function() {
    const assets = document.querySelectorAll('.asset');

    assets.forEach(asset => {
        asset.addEventListener('click', function() {
            const assetId = this.id;
            window.location.href = `${assetId}.html`; // Redireciona para a página correspondente
        });
    });
});
