var map;

        function initMap(){
            var tirana = {lat: 41.327680, lng: 19.818705};

            // opens the map
            var map = new google.maps.Map(document.getElementById('map'),{
                center: tirana, 
                zoom: 15,
                mapTypeId: 'roadmap'
            });

            // created the marker
            var marker =  new google.maps.Marker({
                position: tirana, 
                map: map, 
                title: "Tirana"
            });

            google.maps.event.addListener(map, 'click', function(vendodhje) {

                // the koordinates that we will get when we click on the map
                var lat = vendodhje.latLng.lat();
                var lng = vendodhje.latLng.lng();

                // created the new marker with the arrow symbol
                var arrowMarker = new google.maps.Marker({
                    map: map,
                    position: vendodhje.latLng,
                    title: "Koordinates",
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                        scale: 5,
                        strokeWeight: 2,
                        strokeColor: "red"
                    }
                })

                // created infoWindow
                var infoWindow = new google.maps.InfoWindow({
                    content: `Gjeresi: ${lat} </br> Gjatesi: ${lng}`
                })
                
                // function that opens the infoWindow anytime the symbol is clicked
                arrowMarker.addListener('click', function() {
                    infoWindow.open(map,arrowMarker)
                })

                // infoWindow.open(map,arrowMarker) --> open without the need of a click
            })
        }