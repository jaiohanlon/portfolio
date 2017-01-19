import React, { PropTypes } from 'react';
import styles from '../../scss/components/social-links';
import {
  FacebookLogo,
  TwitterLogo,
  YoutubeLogo,
  GooglePlusLogo,
  LinkedInLogo,
  GithubLogo,
} from '../svgs/index';

const SocialLinks = ({
  links,
}) => {
  const renderLogo = (logo) => {
    switch (logo) {
      case "facebook":
        return <FacebookLogo />;
      case "twitter":
        return <TwitterLogo />;
      case "linkedIn":
        return <LinkedInLogo />;
      case "youtube":
        return <YoutubeLogo />;
      case "googlePlus":
        return <GooglePlusLogo />;
      case "github":
        return <GithubLogo />;
    }
  };

  const renderSocialLinks = links.map(({title, href, name}, index) => (
    <li className={styles.listItem} key={index}>
      <a className={styles.socialLink} href={href}>
        {renderLogo(name)}
      </a>
    </li>
  ));

  return (
    <ul className={styles.socialLinksList}>
      {renderSocialLinks}
    </ul>
  );
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(
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

export default SocialLinks;