function load_carto() {
    alert('La couche est ajoutée avec succès.')
    // Suppression de toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

    // Ajout d'une source de données à la carte avec clustering
    map.addSource('h6_source', {
        type: 'vector',
        tiles: ['https://fluffy-space-bassoon-6wwg7w7p9x73x46q-8801.app.github.dev/KA791969.carto_bat_toit/{z}/{x}/{y}.pbf']
    });

    // Ajout d'une couche pour afficher les clusters
    map.addLayer({
        'id': 'h6',
        'type': 'fill',           // Type de la couche : cercle
        'source': 'h6_source', // Source de données utilisée pour la couche
        'source-layer': 'KA791969.carto_bat_toit',
        'paint': {
            'fill-outline-color': 'black',
            'fill-color': getRandomColor(), // Si la condition est vraie, utilisez une couleur aléatoire
            'fill-opacity': 0.2 // Opacité de remplissage (30%)
        }
    });
}
// Écouteur d'événement pour le bouton de génération des clusters 
document
    .getElementById('load_carto') // id unique du bouton
    .addEventListener('click', load_carto); // ajoute un event de type click qui lance la fonction load_station()