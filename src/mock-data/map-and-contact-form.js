const mapAndContactForm = {
  "mapOptions": {
    "disableDefaultUI": true,
    "mapTypeControl": false,
    "navigationControl": false,
    "scaleControl": false,
    "scrollwheel": false,
    "styles": [{"stylers":[{"hue":"#ff1a00"},{"invert_lightness":true},{"saturation":-100},{"lightness":33},{"gamma":0.5}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2D333C"}]}]
  },
  "markers": [
    {
      position: {
        lat: 51.541371,
        lng: 0.657206,
      },
      key: 'Leigh On Sea',
      defaultAnimation: 2,
    },
    {
      position: {
        lat: 51.5255582,
        lng: -0.1016797,
      },
      key: 'London',
      defaultAnimation: 2,
    }
  ],
  "contactFormTitle": "Get in touch",
  "contactFormSubTitle": "This form of contact is mainly for getting in touch regarding direct contract opportunities",
};

export default mapAndContactForm;
