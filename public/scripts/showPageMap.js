mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: coordsArr, // starting position [lng, lat]
    zoom: 10, // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(coordsArr)
    .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(
            `<h3>${campTitle}</h3><p>${campLoc}</p>`
        )
    )
    .addTo(map)
