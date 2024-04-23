function load_canope() {
    alert('La couche est ajoutée avec succès.')
    // Suppression de toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

    // Ajout d'une source de données à la carte avec clustering
    map.addSource('h5_source', {
        type: 'vector',
        tiles: ['https://fluffy-space-bassoon-6wwg7w7p9x73x46q-8801.app.github.dev/KA791969.canope2019/{z}/{x}/{y}.pbf']
    });

    // Ajout d'une couche pour afficher les clusters
    map.addLayer({
        'id': 'h5',
        'type': 'fill',           // Type de la couche : cercle
        'source': 'h5_source', // Source de données utilisée pour la couche
        'source-layer': 'KA791969.canope2019',
        'paint': {
            "fill-opacity": 0.3,
            "fill-color": "rgba(9, 177, 9, 1)",
            "fill-outline-color": "rgba(22, 100, 22, 1)"
        }
    });
}
// Écouteur d'événement pour le bouton de génération des clusters 
document
    .getElementById('load_canope') // id unique du bouton
    .addEventListener('click', load_canope); // ajoute un event de type click qui lance la fonction load_station()