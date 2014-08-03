---
---

# jQuery to collapse the navbar on scroll
$(window).scroll ->
  if $(".navbar").offset().top > 50
    $(".navbar-fixed-top").addClass("top-nav-collapse")
  else
    $(".navbar-fixed-top").removeClass("top-nav-collapse")


# jQuery for page scrolling feature - requires jQuery Easing plugin
$ ->
  $('a.page-scroll').bind 'click', (evt) ->
    $anchor = $(@)
    $('html, body').stop().animate
      scrollTop: $($anchor.attr('href')).offset().top
    , 1500, 'easeInOutExpo'
    evt.preventDefault()

# Get the HTML DOM element that will contain your map
# We are using a div with id="map" seen below in the <body>
mapElement = document.getElementById('map')

if mapElement
  # Google Maps Scripts
  # When the window has finished loading create our google map below
  google.maps.event.addDomListener window, 'load', ->

    # Basic options for a simple Google Map
    # For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    mapOptions =
      # How zoomed in you want the map to start at (always required)
      zoom: 15

      # The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(45.663730, 12.242450) # Treviso

      mapTypeId: google.maps.MapTypeId.ROADMAP

      # Disables the default Google Maps UI components
      # disableDefaultUI: true
      # scrollwheel: false
      # draggable: false

      # How you would like to style the map.
      # This is where you would paste any style found on Snazzy Maps.
      styles: [
        {
          "featureType": "landscape"
          "stylers": [
            {"saturation": -100 }
            {"lightness": 65 }
            {"visibility": "on"}
          ]
        },
        {
          "featureType": "poi"
          "stylers": [
            {"saturation": -100 }
            {"lightness": 51 }
            {"visibility": "simplified"}
          ]
        },
        {
          "featureType": "road.highway"
          "stylers": [
            {"saturation": -100 }
            {"visibility": "simplified"}
          ]
        },
        {
          "featureType": "road.arterial"
          "stylers": [
            {"saturation": -100 }
            {"lightness": 30 }
            {"visibility": "on"}
          ]
        },
        {
          "featureType": "road.local"
          "stylers": [
            {"saturation": -100 }
            {"lightness": 40 }
            {"visibility": "on"}
          ]
        },
        {
          "featureType": "transit"
          "stylers": [
            {"saturation": -100 }
            {"visibility": "simplified"}
          ]
        },
        {
          "featureType": "administrative.province"
          "stylers": [
            {"visibility": "off"}
          ]
        },
        {
          "featureType": "water"
          "elementType": "labels"
          "stylers": [
            {"visibility": "on"}
            {"lightness": -25 }
            {"saturation": -100 }
          ]
        },
        {
          "featureType": "water"
          "elementType": "geometry"
          "stylers": [
            {"hue": "#ffff00"}
            {"lightness": -25 }
            {"saturation": -97 }
          ]
        }
      ]

    # Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions)

    # Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    image = '/assets/img/map-marker.png'
    myLatLng = new google.maps.LatLng(45.663730, 12.242450)
    # beachMarker = new google.maps.Marker
    #   position: myLatLng
    #   map: map
    #   icon: image

    # Places
    createMarker = (place) ->
      placeLoc = place.geometry.location
      marker = new google.maps.Marker
        map: map
        position: place.geometry.location
      google.maps.event.addListener marker, 'click', ->
        infowindow.setContent(place.name)
        infowindow.open(map, this)

    searchPlaceRequest =
      # location: myLatLng,
      # radius: 100,
      # name: 'Ottica Molinari'
      placeId: 'ChIJZbYHjio2eUcR59drO_RObuc'
    infowindow = new google.maps.InfoWindow()
    service = new google.maps.places.PlacesService(map)
    service.getDetails searchPlaceRequest, (place, status) ->
      if status is google.maps.places.PlacesServiceStatus.OK
        createMarker(place)
    # service.nearbySearch searchPlaceRequest, (results, status) ->
    #   if status is google.maps.places.PlacesServiceStatus.OK
    #     for result in results
    #       createMarker(result)
