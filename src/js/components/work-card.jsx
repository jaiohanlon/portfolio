import React from 'react';
import styles from '../../scss/components/work-card';

const WorkCard = ({
  title,
  subTitle,
  description,
  technologies,
  logo,
  backgroundImage,
  buttonText,
}) => {
  const renderTechnologiesListItems = technologies.map((technology) => (
    <li className={styles.technologiesListItem}>
      {technology}
    </li>
  ));

  return (
    <div className={styles.workCard}>
      <header className={styles.header} style={{ backgroundImage: `url('${backgroundImage}')`}}>
        {logo}
      </header>
      <footer className={styles.footer}>
        <h3 className={styles.title}>
          {title}
        </h3>
        <h4 className={styles.subTitle}>
          {subTitle}
        </h4>
        <p className={styles.description}>
          {description}
        </p>
        <ul className={styles.technologiesList}>
          {renderTechnologiesListItems}
        </ul>
        <a className={styles.button} data-text={buttonText}></a>
      </footer>
    </div>
  );
}

export default WorkCard;
