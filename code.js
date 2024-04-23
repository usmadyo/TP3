// création du contrôle de navigation
var nav = new maplibregl.NavigationControl({
    showCompass: true, // affichage de la boussole
    showZoom: true, // affichage des boutons de zoom
    visualizePitch: true // affichage de l'angle d'inclinaison
    });
    // Finalement on ajoute le contrôleur à la carte
    map.addControl(nav, 'bottom-right'); // ajout du contrôle en haut à droite de la carte
    
// création du contrôle de géolocalisation
var geolocateControl = new maplibregl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true // activation de la géolocalisation précise
    },
    trackUserLocation: true // suivi automatique de la position de l'utilisateur
})
map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte

// création du contrôle d'échelle
var scale = new maplibregl.ScaleControl({
    unit: 'metric' // utilisation de l'unité métrique
});
map.addControl(scale); // ajout du contrôle en bas à gauche de la carte

// list des couches à supprimr avec le bouton Reset map
const myLayers = ['stationsRSQA','h2','h4', 'h5', 'h6','h7', 'h8', 'buffer'];

// Compteur de nombre des enregistrements RSQA
function featureCount() {
    var features = map.queryRenderedFeatures({ layers: ['stationsRSQA'] }); // UTILISER LA FONCTION MaplibreGL pour requeter les elements a l'ecran
    document.getElementById('featureCount').value = features.length;
}
// Appel de la fonction calculateDistance (turf.js) pour calculer la distance moyenne entre les stations RSQA
function calculateDistance(){
    featureCollection = ['stationsRSQA'];
    document.getElementById('distanceResult').value = Math.round(averageDistance(randomPoints), 2);
}

// Appel de la fonction createBuffer (turj.js) pour créer des buffer avec les stations RSQA
function createBuffertest() {
 
    // Récupérer les entités de votre source de données spécifique (stations RSQA)
    var features = map.querySourceFeatures('h3_source', {
        sourceLayer: 'KA791969.IQA_Station'
    });
 
    // Convertir les entités en GeoJSON FeatureCollection
    var geojsonFeatures = {
        type: 'FeatureCollection',
        features: features
    };
 
    // Appel de la fonction createBuffer avec les entités et une distance de 2500 mètres
    const myBufferLayer = createBuffer(geojsonFeatures, 2500);
 
    // Ajouter une source de données pour le buffer
    map.addSource('h3-source', {
        type: 'geojson',
        data: myBufferLayer
    });
 
    // Ajouter la couche représentant le buffer sur la carte Mapbox
    map.addLayer({
        'id': 'buffer',
        'type': 'fill',
        'source': 'h3-source',
        'paint': {
            // Définit la couleur de remplissage du buffer
            'fill-color': 'rgba(12,122,122,0.5)'
        }
    });
}
// Écouteur d'événement pour le bouton de génération des buffer
document
    .getElementById('createBuffertest')// id unique du bouton
    .addEventListener('click', createBuffertest); // ajoute un event de type click qui lance la fonction createbuffertest()


// Appeler la fonction pour créer une couche 2.5D
function generate3D(){
}