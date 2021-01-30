var map = L.map('map').setView([45.528, 45.528], 2);
L.tileLayer('https://c.tile.openstreetmap.de/{z}/{x}/{y}.png', {
	attribution: 'Map',
	maxZoom: 18,
	id: 'your.project.id',
}).addTo(map);