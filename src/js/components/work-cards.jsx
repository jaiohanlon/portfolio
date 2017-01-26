import React, { PropTypes } from 'react';
import ClientCard from './work-card';
import defaultProps from '../../mock-data/work-cards';
import styles from '../../scss/components/work-cards';

const WorkCards = ({
  cards,
  buttonText,
}) => {
  const renderCardsList = cards.map(({title, subTitle, description, technologies, logo, backgroundImage}, index) => (
    <li className={styles.listItem} key={index}>
      <ClientCard
        title={title}
        subTitle={subTitle}
        description={description}
        technologies={technologies}
        logo={logo}
        backgroundImage={backgroundImage}
        buttonText={buttonText}
      />
    </li>
  ));

  return (
    <section className={styles.workCards}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {renderCardsList}
        </ul>
      </div>
    </section>
  );
};

WorkCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  buttonText: PropTypes.string,
};

WorkCards.defaultProps = defaultProps;

export default WorkCards;
