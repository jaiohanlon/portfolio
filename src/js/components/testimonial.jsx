import React, { PropTypes } from 'react';
import styles from '../../scss/components/testimonial';

const Testimonial = ({
  body,
  image,
  name,
  title,
}) => (
  <div className={styles.testimonial}>
    <div className={styles.identity}>
      <div className={styles.image} style={{backgroundImage: `url('${image}')`}} />
      <div className={styles.nameAndTitle}>
        <span className={styles.name}>
          {name}
        </span>
        <strong className={styles.title}>
          {title}
        </strong>
      </div>
    </div>
    <div className={styles.body} dangerouslySetInnerHTML={{__html: body}} />
  </div>
);

Testimonial.propTypes = {
  body: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Testimonial;
