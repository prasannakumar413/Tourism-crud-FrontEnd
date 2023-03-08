import React, { Component } from 'react';
import './Post.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
        bookingId:'',
        city:'',
        modeOfTravel: '',
        modeOfTravelPrice: '',
        hotels: '',
        hotelPrice: '',
        hotelRatings: ''
    };
  }

  handleBookingIdChange = (event) => {
    this.setState({ bookingId: event.target.value });
  };

  handleCityChange = (event) => {
    this.setState({ city: event.target.value });
  };

  handleModeOfTravelChange = (event) => {
    this.setState({ modeOfTravel: event.target.value });
  };

  handleModeOfTravelPriceChange = (event) => {
    this.setState({ modeOfTravelPrice: event.target.value });
  };

  handleHotelsChange = (event) => {
    this.setState({ hotels: event.target.value });
  };

  handleHotelPriceChange = (event) => {
    this.setState({ hotelPrice: event.target.value });
  };

  handleHotelRatingsChange = (event) => {
    this.setState({ hotelRatings: event.target.value });
  };
  

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
        bookingId: this.state.bookingId,
        city: this.state.city,
        modeOfTravel: this.state.modeOfTravel,
        modeOfTravelPrice: this.state.modeOfTravelPrice,
        hotels: this.state.hotels,
        hotelPrice: this.state.hotelPrice,
        hotelRatings: this.state.hotelRatings,
      };
    
      axios.post('http://127.0.0.1:8080/add', data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-form">
        <label className="sign-label">Booking Id</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.bookingId}
          onChange={this.handleBookingIdChange}
        />

        <label className="sign-label">City</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.city}
          onChange={this.handleCityChange}
        />

        <label className="sign-label">Mode of Travel</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.modeOfTravel}
          onChange={this.handleModeOfTravelChange}
        />

        <label className="sign-label">Mode of Travel Price</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.modeOfTravelPrice}
          onChange={this.handleModeOfTravelPriceChange}
        />

        <label className="sign-label">Hotels</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.hotels}
          onChange={this.handleHotelsChange}
        />

        <label className="sign-label">Hotel Price</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.hotelPrice}
          onChange={this.handleHotelPriceChange}
        />

        <label className="sign-label">Hotel Ratings</label>
        <input
          className="sign-input"
          type="text"
          value={this.state.hotelRatings}
          onChange={this.handleHotelRatingsChange}
        />
        
        <button className="login-button" type="submit">
          Add Details

        </button>

        <Link to="/Management">
          <button className="next1" type="submit">Next</button>
        </Link>
      </form>
    );
  }
}

export default Post; 