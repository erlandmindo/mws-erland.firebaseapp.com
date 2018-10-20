// SW Controller
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js', {scope: './'})
    .then(function(registration){
        // console.log('Service Worker Registered');
    })
    .catch(function(err){
        // console.log('Service worker faild to register', err);
    })
} else {
    // console.log('Service-Worker not supported in this Browser');
}


// MAPS Controller
if (window.location.pathname == '/maps.html') {
    let myMaps = L.map('map').setView([-7.799820, 110.394550], 15);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZXJsYW5kbmFmaWQiLCJhIjoiY2puZnlpNjRvMDJ0bDNrcWkzbWE5MGNhayJ9.mQEestA3FEze7Jq9BNGNMg', {
        maxZoom: 18,
        attribution: 'Mobile Web Specialist Yogyakarta 2018',
        id: 'mapbox.streets'
    }).addTo(myMaps);

    const places = [
    {
        place_id: 1,
        place_name: "Gebyok Coffee, Milk and Eatery",
        address: "Jl. Balirejo No.19, Muja Muju, Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55165",
        image: "img/r1.jpg",
        description: "Tempatnya pecinta kopi",
        lattitude: -7.797704,
        longitude: 110.393982
    },
    {
        place_id: 2,
        place_name: "Kebelet Belut - Jogjakarta",
        address: "Jl. Ipda Tut Harsono No.42, Muja Muju, Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55165",
        image: "img/r2.jpg",
        description: "Tempatnya pecinta belut",
        lattitude: -7.796437,
        longitude: 110.392924
    },
    {
        place_id: 3,
        place_name: "Waroeng Spesial Sambal SS",
        address: "Jl. Kusumanegara, Pakualaman, Muja Muju, Umbulharjo, Muja Muju, Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55151",
        image: "img/r3.jpg",
        description: "Tempatnya pecinta sambal",
        lattitude: -7.801850,
        longitude: 110.394067
    },
    {
        place_id: 4,
        place_name: "Kedai Narasa",
        address: "Jl. Arimbi No.399B, Sokowaten, Plumbon, Banguntapan, Bantul, Daerah Istimewa Yogyakarta 55198",
        image: "img/r4.jpg",
        description: "Tempatnya pecinta ayam aceh",
        lattitude: -7.795982,
        longitude: 110.401090
    },
    {
        place_id: 5,
        place_name: "Bakso Telkom Utomo",
        address: "Jl. Kenari No.61, Muja Muju, Umbulharjo, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55212",
        image: "img/r5.jpg",
        description: "Tempatnya pecinta bakso",
        lattitude: -7.799470,
        longitude: 110.392527
    }
    ];

    let markers = [];

    let blueMarker = L.icon({
        iconUrl: 'img/marker.png',
        iconSize:     [36, 37]
    });

    places.forEach(place => {
    let popupVal = `<div class="text-center">
        <img src="${place.image}" class="img-popup">
        <h3>${place.place_name}</h3>
        <p class="text-left"><strong>${place.description}</strong>, ${place.address}</p>
        </div>`;

        let marker = L.marker([place.lattitude, place.longitude], {icon: blueMarker}).addTo(myMaps).bindPopup(popupVal)
        markers.push({
            place_id : place.place_id,
            marker : marker
        });
    });
}


// CALCULATOR Controller
if (window.location.pathname == '/calculator.html') {
    function onlyNumber(e) {
        e.value = e.value.replace(/\D/g, "");
    }

    let tombol = document.querySelector('button');

    tombol.addEventListener('click', () => {
        let angka = document.querySelectorAll('input');
        let i1= angka[0].value ? angka[0].value : 0;
        let i2= angka[1].value ? angka[1].value : 0;
        angka[2].value = parseInt(i1) + parseInt(i2) ;
    });
}