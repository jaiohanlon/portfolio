import React, { PropTypes } from 'react';
import styles from '../../scss/components/footer';
import SocialLinks from './social-links';
import defaultProps from '../../mock-data/footer';

const Footer = ({
  recentArticlesTitle,
  recentArticles,
  followMeTitle,
  socialLinks,
  myCompanyTitle,
  myCompanyLink,
}) => {
  const renderRecentArticlesListItems = recentArticles.map((article) => (
    <li className={styles.recentArticlesListItem}>
      <a className={styles.recentArticlesLink} href={article.href}>
        <h3 className={styles.recentArticlesLinkTitle}>
          {article.title}
        </h3>
        <p className={styles.recentArticlesLinkSubTitle}>
          {article.subTitle}
        </p>
      </a>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.recentArticles}>
            <h2 className={styles.recentArticlesTitle}>{recentArticlesTitle}</h2>
            <ul className={styles.recentArticlesList}>
              {renderRecentArticlesListItems}
            </ul>
          </div>
          <div className={styles.followMeAndMyCompany}>
            <div className={styles.followMe}>
              <h2 className={styles.followMeTitle}>
                {followMeTitle}
              </h2>
              <SocialLinks
                links={socialLinks}
              />
            </div>
            <div className={styles.myCompany}>
              <h2 className={styles.myCompanyTitle}>
                {myCompanyTitle}
              </h2>
              <a className={styles.myCompanyLink} href={myCompanyLink.href}>
                { myCompanyLink.label }
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.postFooter}>

      </div>
    </footer>
  );
};

Footer.propTypes = {
  recentArticlesTitle: PropTypes.string,
  recentArticles: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  followMeTitle: PropTypes.string,
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

Footer.defaultProps = defaultProps;

export default Footer;
