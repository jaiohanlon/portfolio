import React, { PropTypes } from 'react';
import { ArrowIcon } from '../svgs/index';
import styles from '../../scss/components/professional-skills-slider';

const ProfessionalSkillsSlider = ({
  slides,
  activeIndex,
  onPreviousButtonClick,
  onNextButtonClick,
}) => {
  const renderSkillsListItems = (title, skills) => skills.map(({label, skillLevel}, index) => (
    <li className={styles.skillsListItem} key={index}>
      <span className={styles.skillsListLabel}>
        {label}
      </span>
      <span className={styles.skillsListLevelMax}>
        <span className={styles.skillsListLevel} style={{width: `${skillLevel}%`}} />
      </span>
    </li>
  ));

  const renderCategoryListItems = slides.map(({title, skills}, index) => (
    <li className={activeIndex === index ? styles['categoriesListItem--active'] : styles.categoriesListItem} key={index}>
      <ul className={styles.skillsList}>
        {renderSkillsListItems(title, skills)}
      </ul>
    </li>
  ));

  return (
    <div className={styles.professionalSkillsSlider}>
      <ul className={styles.categoriesList} style={{left: `-${activeIndex * 100}%`}}>
        {renderCategoryListItems}
      </ul>
      <button className={activeIndex > 0 ? styles.previousButton : styles.disabledPreviousButton} onClick={onPreviousButtonClick}>
        <ArrowIcon />
      </button>
      <button className={activeIndex < slides.length - 1 ? styles.nextButton : styles.disabledNextButton} onClick={onNextButtonClick}>
        <ArrowIcon />
      </button>
    </div>
  );
}

ProfessionalSkillsSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      skills: PropTypes.array,
    })
  ),
  activeIndex: PropTypes.number,
  onPreviousButtonClick: PropTypes.func,
  onNextButtonClick: PropTypes.func,
};

export default ProfessionalSkillsSlider;