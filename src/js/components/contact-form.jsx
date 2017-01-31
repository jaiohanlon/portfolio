import React, { Component } from 'react';
import { ArrowIcon } from '../svgs/index';
import styles from '../../scss/components/contact-form';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = this._getInitialState();
    this.handlers = this._getBoundHandlers();
  }

  _getInitialState() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
  }

  _getBoundHandlers() {
    return {
      handleButtonClick: this._handleButtonClick.bind(this),
      handleNameInputChange: this._handleNameInputChange.bind(this),
      handleEmailInputChange: this._handleEmailInputChange.bind(this),
      handlePhoneInputChange: this._handlePhoneInputChange.bind(this),
      handleMessageInputChange: this._handleMessageInputChange.bind(this),
    }
  }

  _handleNameInputChange(event) {
    const { name } = this.state;

    this.setState({
      name: event.target.value,
    });
  }

  _handleEmailInputChange(event) {
    const { email } = this.state;

    this.setState({
      email: event.target.value,
    });
  }

  _handlePhoneInputChange(event) {
    const { phone } = this.state;

    this.setState({
      phone: event.target.value,
    });
  }

  _handleMessageInputChange(event) {
    const { message } = this.state;

    this.setState({
      message: event.target.value,
    });
  }

  _handleButtonClick(event) {
    const { name, email, phone, message } = this.state;

    event.preventDefault();

    fetch("/send-contact-email", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
  }

  render() {
    const { title, subTitle } = this.props;
    const { name, email, phone, message } = this.state;
    const {
      handleNameInputChange,
      handleEmailInputChange,
      handlePhoneInputChange,
      handleMessageInputChange,
      handleButtonClick,
    } = this.handlers;

    return (
      <form className={styles.contactForm}>
        <h2 className={styles.title}>
          {title}
        </h2>
        <h3 className={styles.subTitle}>
          {subTitle}
        </h3>
        <input className={styles.input} type="text" placeholder="Your Name" value={name} onChange={handleNameInputChange} />
        <input className={styles.input} type="email" placeholder="Your Email" value={email} onChange={handleEmailInputChange} />
        <input className={styles.input} type="phone" placeholder="Your Phone" value={phone} onChange={handlePhoneInputChange} />
        <textarea className={styles.textarea} placeholder="Message" value={message} onChange={handleMessageInputChange}></textarea>
        <button className={styles.button} onClick={handleButtonClick}>
          Fire at will
          <ArrowIcon />
        </button>
      </form>
    );
  }
}
