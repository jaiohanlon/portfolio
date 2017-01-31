import React, { PropTypes } from 'react';
import defaultProps from '../../mock-data/map-and-contact-form';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import ContactForm from "./contact-form";
import pinIconImage from "../../img/pin.png";
import styles from "../../scss/components/map-and-contact-form";

const pinIcon = {
  url: pinIconImage,
  scaledSize: new google.maps.Size(75, 75),
  origin: new google.maps.Point(0,0),
  anchor: new google.maps.Point(25, 25),
};

const StyledGoogleMap = withGoogleMap(({mapOptions, markers}) => (
  <GoogleMap
    defaultZoom={9}
    defaultCenter={{ lat: 51.541371, lng: 1.0567206 }}
    options={mapOptions}
  >
    {markers.map((marker, index) => (
      <Marker
        {...marker}
        icon={pinIcon}
      />
    ))}
  </GoogleMap>
));

const MapAndContactForm = ({
  mapOptions,
  markers,
  contactFormTitle,
  contactFormSubTitle,
}) => (
  <section className={styles.mapAndContactForm}>
    <StyledGoogleMap
      containerElement={
        <div className={styles.googleMapContainer} />
      }
      mapElement={
        <div className={styles.googleMapElement} />
      }
      mapOptions={mapOptions}
      markers={markers}
    />
    <div className={styles.wrapper}>
      <ContactForm
        title={contactFormTitle}
        subTitle={contactFormSubTitle}
      />
    </div>
  </section>
);

MapAndContactForm.propTypes = {
  mapOptions: PropTypes.shape({

  }),
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
      key: PropTypes.string,
      defaultAnimation: PropTypes.number,
    }),
  ),
};

MapAndContactForm.defaultProps = defaultProps;

export default MapAndContactForm;
