
//API key from google
var gMapAPIKey = 'AIzaSyDlxTX2i5ttuWo5b1MoLEhQxPh39SRejo8';

 var map;
      function initMap() {
      	// use a geocoder
      	var myLocation = {lat: 41.7118513, lng: -87.6653363};
      	var searsTower = {lat: 41.8788862, lng:-87.635881};
      	// connect to id in html
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.76, lng: -87.649},
          zoom: 10,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          draggable: false,
          scrollwheel: false
        });
        
        //  content for infowindows
        var popupContent = 'House<br> W 100th St <br> Chicago, IL, U-S-A';
		var popupSears = 'Sears Tower<br> Wacker Dr <br> Chicago, IL, U-S-A <br> It will always be the Sears Tower!';        

       
       //use API to access infowindows
        var infowindowHouse = new google.maps.InfoWindow({
          content: popupContent
        }),
        infowindowSears = new google.maps.InfoWindow({
          content: popupSears
        });
        
       
        //red marker things
        var markerHouse = new google.maps.Marker({
        	'position': myLocation,
        	'map': map,
        	'title': 'House'
        }),
         markerSears = new google.maps.Marker({
        	'position': searsTower,
        	'map': map,
        	'title': 'The Sears Tower'
        });
        
        // onclick open the infowindow
        markerHouse.addListener('click', function() {
          infowindowHouse.open(map, markerHouse);
        }),
        markerSears.addListener('click', function() {
        	infowindowSears.open(map,markerSears);
        });
      
      }