import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import styles from "../../scss/components/map-and-contact-form";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{ lat: 51.541371, lng: 0.667206 }}
    options={{
      mapTypeControl: false,
      navigationControl: false,
      scaleControl: false,
      scrollwheel: false,
      styles: [{"featureType":"road","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"weight":1}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"weight":0.8}]},{"featureType":"landscape","stylers":[{"color":"#ffffff"}]},{"featureType":"water","stylers":[{"visibility":"off"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"elementType":"labels","stylers":[{"visibility":"off"}]},{"elementType":"labels.text","stylers":[{"visibility":"on"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"elementType":"labels.icon","stylers":[{"visibility":"on"}]}],
    }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
      />
    ))}
  </GoogleMap>
));

const markers = [{
  position: {
    lat: 51.541371,
    lng: 0.657206,
  },
  key: 'test',
  defaultAnimation: 2,
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
