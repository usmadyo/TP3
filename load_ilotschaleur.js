function load_ilotschaleur() {
    alert('La couche est ajoutée avec succès.')
    // Suppression de toutes les couches et sources existantes de la carte
    removeAllLayersAndSources();

    // Ajout d'une source de données à la carte avec clustering
    map.addSource('h7_source', {
        type: 'vector',
        tiles: ['https://fluffy-space-bassoon-6wwg7w7p9x73x46q-8801.app.github.dev/KA791969.ilots_chaleur_points/{z}/{x}/{y}.pbf']
    });

    // Ajout d'une couche pour afficher les clusters
    map.addLayer({
        'id': 'h7',
        'type': 'circle',           // Type de la couche : cercle
        'source': 'h7_source', // Source de données utilisée pour la couche
        'source-layer': 'KA791969.ilots_chaleur_points',
        'paint': {
            'circle-color': '#FF0000', // Couleur de remplissage (rouge)
            'circle-opacity': 0.5 // Opacité du remplissage (50%)
            }
    });
}
// Écouteur d'événement pour le bouton de génération des clusters 
document
    .getElementById('load_ilotschaleur') // id unique du bouton
    .addEventListener('click', load_ilotschaleur); // ajoute un event de type click qui lance la fonction load_station()
    