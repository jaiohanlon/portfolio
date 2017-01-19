import React, { PropTypes } from 'react';
import defaultProps from '../../mock-data/homepage-header';
import styles from '../../scss/components/homepage-header';
import SocialLinks from './social-links';

const HomepageHeader = ({
  title,
  subTitle,
  text,
  socialLinks,
}) => (
  <header className={styles.header}>
    <hgroup className={styles.hgroup}>
      <div className={styles.textWrapper}>
        <h1 className={styles.title}>
          {title}
        </h1>
        <h2 className={styles.subTitle}>
          {subTitle}
        </h2>
        <p className={styles.text}>
          {text}
        </p>
      </div>
      <div className={styles.social}>
        <SocialLinks
          links={socialLinks}
        />
      </div>
    </hgroup>
  </header>
);

HomepageHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      name: PropTypes.oneOf([
        "facebook",
        "twitter",
        "linkedIn",
        "youtube",
        "googlePlus",
        "github",
      ]),
    })
  ),
};

HomepageHeader.defaultProps = defaultProps;

export default HomepageHeader;