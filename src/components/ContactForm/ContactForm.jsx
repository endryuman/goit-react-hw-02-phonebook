import styles from './ContactForm.module.css';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.addContact(this.state);
  };
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };
  render() {
    return (
      <form className={styles.contactForm} onSubmit={this.handelSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          value={this.state.value}
          onChange={this.handleChange}
          required
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
