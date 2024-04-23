// Ajout d'une source de données WMTS à la carte
function addWMSSource() {
    map.addSource('wms-test-source', {
        'type': 'raster',
        'maxzoom': 24,
        'tiles': [
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
        ],
        'tileSize': 512
    });
}

// Ajout d'une couche WMTS à la carte
function addWMSLayer() {
    map.addLayer(
        {
            'id': 'h8',
            'type': 'raster',
            'source': 'wms-test-source',
            'paint': {}
        },
    );
}

// Fonction principale pour charger le WMTS
function loadWMS() {
    alert('Le raster WMS est ajouté avec succès.');

    // Suppression de toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

    // Ajout de la source de données WMTS
    addWMSSource();

    // Ajout de la couche WMTS
    addWMSLayer();
}

// Écouteur d'événement pour le bouton de chargement du WMTS
document
    .getElementById('load_WMS') // ID unique du bouton
    .addEventListener('click', loadWMS); // Ajoute un événement de type click qui lance la fonction loadWMTS()

