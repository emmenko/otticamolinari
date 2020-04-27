---
---

DISMISSED_COOKIE = 'cookieconsent_dismissed'

parallaxOnScroll = (el, offset = 100) ->
  return if el.length is 0
  viewportHeight = $(window).height() - offset
  scrollPosition = $('body').scrollTop()

  delta = viewportHeight + scrollPosition - el.offset().top
  if delta > 0
    el.css('background-position-y', "#{delta * 100 / viewportHeight}%")

$(window).scroll ->
  parallaxOnScroll($('.parallax-bkg'))

# jQuery for page scrolling feature - requires jQuery Easing plugin
$ ->
  parallaxOnScroll($('.parallax-bkg'))

  $('a.page-scroll').bind 'click', (evt) ->
    currentPath = $('body').data('page-dir')
    if currentPath is '/'
      evt.preventDefault()
      target = $(@).data('target')
      $('html, body').stop().animate
        scrollTop: $(target).offset().top - 32 # give it some padding
      , 500

  $('*[rel=tooltip]').tooltip()

  $('.video-play').on 'click', (evt) ->
    evt.preventDefault()
    $el = $(@)
    videoId = $el.data('video-id')
    $previewer = $('.previewer')
    $previewer.find('.video').empty().append """
      <iframe src="//player.vimeo.com/video/#{videoId}?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    """
    $previewer.show()

  $('body').on 'click', '.previewer .close', ->
    $('.previewer').find('.video').empty()
    $('.previewer').hide()

  if (!~document.cookie.indexOf(DISMISSED_COOKIE))
    $('#cookie-banner').css('display', 'block')
    document.getElementById('dismiss-cookie-banner').addEventListener 'click', ->
      document.cookie = "#{DISMISSED_COOKIE}=yes; expires=#{new Date('2099-12-31').toUTCString()}; path=/"
      document.getElementById('cookie-banner').remove()
      return

# Remove cookie policy banner if user already acknowledged it
if (~document.cookie.indexOf(DISMISSED_COOKIE))
  document.getElementById('cookie-banner').remove()


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

      # Disables scrollwheel zooming on the map
      scrollwheel: false

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

    infowindow = new google.maps.InfoWindow()
    # Places
    createMarker = (place) ->
      placeLoc = place.geometry.location
      marker = new google.maps.Marker
        map: map
        position: place.geometry.location
        title: place.name
      google.maps.event.addListener marker, 'click', ->
        infowindow.setContent("""
          <address>
            <strong>Ottica Molinari</strong><br>
            Piazza della Vittoria, 11<br>
            31100 Treviso (TV), Italy<br>
            <abbr title="Telefono">T:</abbr> +39 0422 582347<br>
            <i>info@otticamolinari.it</i>
          </address>
          <a class="link" target="_blank" href="#{place.url}">Vedi in Google Maps</a>
        """)
        infowindow.open(map, this)

    searchPlaceRequest =
      location: myLatLng,
      radius: 100,
      name: 'Ottica Molinari'
      placeId: 'ChIJZbYHjio2eUcR59drO_RObuc'
    service = new google.maps.places.PlacesService(map)
    service.getDetails searchPlaceRequest, (place, status) ->
      if status is google.maps.places.PlacesServiceStatus.OK
        createMarker(place)
    # service.nearbySearch searchPlaceRequest, (results, status) ->
    #   if status is google.maps.places.PlacesServiceStatus.OK
    #     for result in results
    #       createMarker(result)