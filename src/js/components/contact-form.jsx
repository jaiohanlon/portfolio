import React from 'react';
import styles from '../../scss/components/contact-form';

const ContactForm = ({
  title,
  subTitle,
}) => {
  return (
    <form className={styles.contactForm}>
      <h2 className={styles.title}>
        {title}
      </h2>
      <h3 className={styles.subTitle}>
        {subTitle}
      </h3>
      <input className={styles.input} type="text" placeholder="Your Name" />
      <input className={styles.input} type="email" placeholder="Your Email" />
      <input className={styles.input} type="phone" placeholder="Your Phone" />
      <textarea className={styles.textarea} placeholder="Message"></textarea>
    </form>
  );
}

export default ContactForm;
