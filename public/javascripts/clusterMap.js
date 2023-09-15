const map = L.map('map').setView([39.0997265, -94.5785667], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const markers = [];

geometries.forEach(location => {
    const marker = L.marker(location);
    markers.push(marker);
});
// Sample data for clustering
// const markers = [
//     L.marker([51.5, -0.09]),
//     L.marker([51.49, -0.1]),

// ];

const clusterGroup = L.markerClusterGroup();
clusterGroup.addLayers(markers);
map.addLayer(clusterGroup);