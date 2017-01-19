import React, { PropTypes } from 'react';
import Testimonial from './testimonial';
import withCarousel from '../containers/carousel';
import {ArrowIcon} from '../svgs/index';
import defaultProps from '../../mock-data/testimonials';
import styles from '../../scss/components/testimonials';

const Testimonials = ({
  testimonials,
}) => {
  const renderTestimonialsListItems = (slides, activeIndex) => slides.map(({body, image, name, title}, index) => (
    <li className={activeIndex === index ? styles['listItem--active'] : styles.listItem} key={index}>
      <Testimonial
        body={body}
        image={image}
        name={name}
        title={title}
      />
    </li>
  ));

  const TestimonialsSlider = ({slides, activeIndex, onPreviousButtonClick, onNextButtonClick}) => (
    <div className={styles.testimonialsSlider}>
      <ul className={styles.list} style={{left: `-${activeIndex * 50}%`}}>
        {renderTestimonialsListItems(slides, activeIndex)}
      </ul>
      <button className={activeIndex > 0 ? styles.previousButton : styles.disabledPreviousButton} onClick={onPreviousButtonClick}>
        <ArrowIcon />
      </button>
      <button className={activeIndex < slides.length - 2 ? styles.nextButton : styles.disabledNextButton} onClick={onNextButtonClick}>
        <ArrowIcon />
      </button>
    </div>
  );

  const TestimonialsCarousel = withCarousel(
    TestimonialsSlider,
    testimonials,
    2
  );

  return (
    <div className={styles.testimonials}>
      <div className={styles.wrapper}>
        <TestimonialsCarousel />
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

Testimonials.defaultProps = defaultProps;

export default Testimonials;