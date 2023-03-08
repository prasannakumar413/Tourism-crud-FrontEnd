import React, { Component } from 'react';
import axios from 'axios';
import './DeleteRecord.css';
import { Link } from 'react-router-dom';

class DeleteRecord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingId: '',
      
    };
  }

  handleBookingIdChange = (event) => {
    this.setState({ bookingId: event.target.value });
  };

  

  handleDelete = (event) => {
    event.preventDefault();
    const { bookingId } = this.state;
    axios.delete(`http://127.0.0.1:8080/deleteDetails/${bookingId}`);
  };

  render() {
    return (
        

      <form onSubmit={this.handleDelete} className="delete-form">
        <label className="delete-label">Booking ID</label>
        <input
          className="delete-input"
          type="text"
          value={this.state.bookingId}
          onChange={this.handleBookingIdChange}
        />

        <button className="delete-button" type="submit">
          Delete Record
        </button>

        <Link to="/">
          <button className="back1" type="submit">Back</button>
        </Link>
        

      </form>
      
    );
  }
}

export default DeleteRecord;
