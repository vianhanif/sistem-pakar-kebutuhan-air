function initMap(){
  var geolocation = new google.maps.Geocoder;
  geolocation.geocode({'address': $('#map-alamat-id').text()},function(results, status){
    if (status == google.maps.GeocoderStatus.OK) {
      var location =  results[0].geometry.location;
      var myLatLng = {lat: location.lat(), lng: location.lng()};

      // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 16,
        mapTypeControl: false
      });
      // Create a marker and set its position.
      var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
      });

    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $('.carousel[data-type="multi-berita"] .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i=0;i<1;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
  });
  $('.carousel[data-type="multi-galeri"] .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));

      for (var i=0;i<1;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}

        next.children(':first-child').clone().appendTo($(this));
      }
  });
});
