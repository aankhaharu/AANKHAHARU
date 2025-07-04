const map = L.map('insetMap', {
  center: [27.666150, 85.299654],
  zoom: 13,
  zoomControl: true
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([27.666150, 85.299654])
  .addTo(map)
  .bindPopup('Nayan Acharya Location')
  .openPopup();
