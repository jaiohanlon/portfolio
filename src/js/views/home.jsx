import React, { PropTypes } from 'react';
import Navigation from '../components/navigation';
import HomepageHeader from '../components/homepage-header';
import ClientCards from '../components/client-cards';
import ProfessionalProfile from '../components/professional-profile';
import Testimonials from '../components/testimonials';
import MapAndContactForm from '../components/map-and-contact-form';
import Footer from '../components/footer';
import styles from '../../scss/views/home';

const HomeView = ({
  navigationLinks,
  headerMainText,
  headerSubTextItems,
  clientsTitleText,
  clientsSubtitleText,
  clients,
  contactFormTitleText,
  contactFormSubtitleText,
}) => (
  <main className={styles.main}>
    <Navigation
      links={navigationLinks}
    />
    <HomepageHeader
      mainText={headerMainText}
      subTextItems={headerSubTextItems}
    />
    <ClientCards
      titleText={clientsTitleText}
      subtitleText={clientsSubtitleText}
      clients={clients}
    />
    <ProfessionalProfile />
    <Testimonials />
    <MapAndContactForm
      contactFormTitleText={contactFormTitleText}
    />
    <Footer
      contactFormTitleText={contactFormTitleText}
    />
  </main>
);

HomeView.propTypes = {
  navigationLinks: PropTypes.string,
  headerMainText: PropTypes.string,
  headerSubTextItems: PropTypes.string,
  clientsTitleText: PropTypes.string,
  clientsSubtitleText: PropTypes.string,
  clients: PropTypes.string,
  technologyStackTitleText: PropTypes.string,
  technologyStackSubtitleText: PropTypes.string,
  technologies: PropTypes.string,
  contactFormTitleText: PropTypes.string,
  contactFormSubtitleText: PropTypes.string,
};

export default HomeView;