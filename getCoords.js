ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [41.028387, 28.971985],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl', 'geolocationControl']
    },);

    myMap.geoObjects
        .add(new ymaps.Placemark([41.028387, 28.971985], {
            balloonContent: 'Test location',
            balloonContentHeader: "Test location header",
            balloonContentBody: "<div class='test'>Test <b>content</b><br />Yo can add card here</div>",
            balloonContentFooter: "Test location footer",
            hintContent: "Test location"
        }, {
            preset: 'islands#icon',
            iconColor: 'red'
        }))
        .add(new ymaps.Placemark([41.119735, 29.007364], {
            balloonContent: 'Some Place Title',
            balloonContentBody: [
                '<address>',
                '<strong>Some Place Title</strong>',
                '<br/>',
                'Address: Some adresses goes here sometimes',
                '<br/>',
                'More information: <a href="https://ahmetnebioglu.com.tr"><button>https://ahmetnebioglu.com.tr</button></a>',
                '</address>'
            ].join('')
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([41.232086, 29.113042], {
            balloonContent: 'Some Place Title'
        }, {
            preset: 'islands#icon',
            iconColor: 'green'
        }))
        .add(new ymaps.Placemark([41.259962, 28.742745], {
            balloonContentHeader: 'AIRPORT',
            balloonContent: 'Istanbul Airport',
            balloonContentFooter: 'ISTANBUL'
        }, {
            preset: 'islands#icon',
            iconColor: '#00aacc'
        }))
        .add(new ymaps.Placemark([41.030581, 28.974989], {
            balloonContent: 'Branch Road'
        }, {
            preset: 'islands#icon',
            iconColor: 'brown'
        }))
        .add(new ymaps.Placemark([40.990284, 29.023943], {
            balloonContent: 'KADIKÖY'
        }, {
            preset: 'islands#icon',
            iconColor: 'black'
        }))
}