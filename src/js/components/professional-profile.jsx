import React, { PropTypes } from 'react';
import withCarousel from '../containers/carousel';
import ProfessionalSkillsSlider from '../components/professional-skills-slider';
import defaultProps from '../../mock-data/professional-profile';
import styles from '../../scss/components/professional-profile';

const ProfessionalProfile = ({
  professionalSkillsTitle,
  professionalSkillsSubTitle,
  professionalSkills,
  professionalBackgroundTitle,
  professionalBackgroundSubTitle,
  professionalBackgroundBody,
}) => {
  const ProfessionalSkillsCarousel = withCarousel(
    ProfessionalSkillsSlider,
    professionalSkills
  );

  return (
    <div className={styles.professionalProfile}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {professionalBackgroundTitle}
          </h2>
          <h3 className={styles.subTitle}>
            {professionalBackgroundSubTitle}
          </h3>
          <div className={styles.body} dangerouslySetInnerHTML={{__html: professionalBackgroundBody}} />
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {professionalSkillsTitle}
          </h2>
          <h3 className={styles.subTitle}>
            {professionalSkillsSubTitle}
          </h3>
          <ProfessionalSkillsCarousel />
        </div>
      </div>
    </div>
  );
}

ProfessionalProfile.propTypes = {
  professionalSkillsTitle: PropTypes.string,
  professionalSkillsSubTitle: PropTypes.string,
  professionalSkills: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      skillLevel: PropTypes.number,
    })
  ),
  professionalBackgroundTitle: PropTypes.string,
  professionalBackgroundSubTitle: PropTypes.string,
  professionalBackgroundBody: PropTypes.string,
};

ProfessionalProfile.defaultProps = defaultProps;

export default ProfessionalProfile;