const mymap = L.map('issMap').setView(geometry, 6);
console.log(geometry)
popupContent = "Hello Ji!"
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
L.marker(geometry).addTo(mymap)
// L.marker.bindPopup(popupContent).openPopup();
tiles.addTo(mymap)