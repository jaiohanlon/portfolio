import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import styles from "../../scss/components/map-and-contact-form";
import pinIcon from "../../img/pin.png";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 51.541371, lng: 0.5967206 }}
    options={{
      mapTypeControl: false,
      navigationControl: false,
      scaleControl: false,
      scrollwheel: false,
      styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

var icon = {
    url: pinIcon,
    scaledSize: new google.maps.Size(50, 50),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(25, 25)
};

const markers = [{
  position: {
    lat: 51.541371,
    lng: 0.657206,
  },
  key: 'Leigh On Sea',
  defaultAnimation: 2,
  icon,
},{
  position: {
    lat: 51.5255582,
    lng: -0.1016797,
  },
  key: 'London',
  defaultAnimation: 2,
  icon,
}];

const MapAndContactForm = () => (
  <footer>
    <GettingStartedGoogleMap
      containerElement={
        <div className={styles.googleMapContainer} />
      }
      mapElement={
        <div className={styles.googleMapElement} />
      }
      markers={markers}
    />
  </footer>
);

MapAndContactForm.propTypes = {

};

export default MapAndContactForm;
