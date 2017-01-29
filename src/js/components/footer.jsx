import React, { PropTypes } from 'react';
import styles from '../../scss/components/footer';
import SocialLinks from './social-links';
import defaultProps from '../../mock-data/footer';

const Footer = ({
  recentArticlesTitle,
  recentArticlesSubTitle,
  recentArticles,
  recentArticlesViewAllLink,
  followMeTitle,
  followMeSubTitle,
  socialLinks,
  myCompanyTitle,
  myCompanySubTitle,
  myCompanyLink,
  seoLinks,
  copyrightText,
}) => {
  const renderRecentArticlesListItems = recentArticles.map((article, index) => (
    <li className={styles.recentArticlesListItem} key={index}>
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

  const renderSeoLinksListItems = seoLinks.map((seoLink, index) => (
    <li className={styles.seoLinksListItem} key={index}>
      <a className={styles.seoLink} href={seoLink.href}>
        {seoLink.label}
      </a>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <div className={styles.recentArticles}>
            <h2 className={styles.recentArticlesTitle}>
              {recentArticlesTitle}
            </h2>
            <h3 className={styles.recentArticlesSubTitle}>
              {recentArticlesSubTitle}
            </h3>
            <ul className={styles.recentArticlesList}>
              {renderRecentArticlesListItems}
            </ul>
            <a className={styles.recentArticlesViewAllLink} href={recentArticlesViewAllLink.href}>
              {recentArticlesViewAllLink.label}
            </a>
          </div>
          <div className={styles.followMeAndMyCompany}>
            <div className={styles.followMe}>
              <h2 className={styles.followMeTitle}>
                {followMeTitle}
              </h2>
              <h3 className={styles.followMeSubTitle}>
                {followMeSubTitle}
              </h3>
              <SocialLinks
                links={socialLinks}
              />
            </div>
            <div className={styles.myCompany}>
              <h2 className={styles.myCompanyTitle}>
                {myCompanyTitle}
              </h2>
              <h3 className={styles.myCompanySubTitle}>
                {myCompanySubTitle}
              </h3>
              <a className={styles.myCompanyLink} href={myCompanyLink.href}>
                { myCompanyLink.label }
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.postFooter}>
        <div className={styles.wrapper}>
          <ul className={styles.seoLinksList}>
            {renderSeoLinksListItems}
          </ul>
          <p className={styles.copyrightText}>
            {copyrightText}
          </p>
        </div>
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
  recentArticlesViewAllLink: PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  }),
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
  seoLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    })
  ),
  copyrightText: PropTypes.string,
};

Footer.defaultProps = defaultProps;

export default Footer;
