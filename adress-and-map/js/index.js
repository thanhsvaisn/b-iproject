
var map = L.map('map').setView([21.0005001,105.7977077], 200);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([21.0005001,105.7977077]).addTo(map)
    .bindPopup('Your Destination.')
    .openPopup(); 

