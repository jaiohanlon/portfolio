import React, { PropTypes } from 'react';
import styles from '../../scss/components/navigation';
import defaultProps from '../../mock-data/navigation';

const Navigation = ({
  links,
  hireText,
}) => {
  const renderLogo = (
    <a className={styles.logo}>
      Jai O'Hanlon
    </a>
  );
  const renderListItems = links.map(({label, href}) => (
    <li className={styles.listItem}>
      <a className={styles.link} href={href}>
        {label}
      </a>
    </li>
  ));

  const renderHireButton = (
    <li className={styles.listItem}>
      <button className={styles.hire} data-text={hireText}>
      </button>
    </li>
  );

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        {renderLogo}
        <ul className={styles.list}>
          {renderListItems}
          {renderHireButton}
        </ul>
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  hireText: PropTypes.string,
};

Navigation.defaultProps = defaultProps;

export default Navigation;
