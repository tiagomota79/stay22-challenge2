$(document).ready(() => {
  //   const data = $.getJSON('/data');
  //   console.log('data');
  //   console.log(data);
  const airbnb = $.when(
    $.getJSON('/data').then(json => console.log('json', json))
  );
  console.log(airbnb);
});
const mymap = L.map('mapid').setView([45.490998036, -73.56833106], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(mymap);
const centreBellMarker = L.icon({
  iconUrl: '/imgs/CentreBellLogo.png',

  iconSize: [48, 58],
  iconAnchor: [24, 58],
  popupAnchor: [0, -58],
});
const centreBell = L.marker([45.495995, -73.569353], {
  icon: centreBellMarker,
})
  .addTo(mymap)
  .bindPopup('Location of the Centre Bell')
  .openPopup();
