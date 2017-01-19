import React, { PropTypes } from 'react';
import ClientCard from './client-card';
import defaultProps from '../../mock-data/client-cards';
import styles from '../../scss/components/client-cards';

const ClientCards = ({
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
    <section className={styles.clientCards}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {renderCardsList}
        </ul>
      </div>
    </section>
  );
};

ClientCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  buttonText: PropTypes.string,
};

ClientCards.defaultProps = defaultProps;

export default ClientCards;