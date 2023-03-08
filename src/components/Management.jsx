import axios from "axios";
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Management.css';

class Management extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8080/get')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {   
    return (
      <table border={1}>
        <thead>
          <tr>
            <th>Booking Id</th>
            <th>City</th>
            <th>Mode Of Travel</th>
            <th>Mode Of Travel Price</th>
            <th>Hotels</th>
            <th>Hotel Price</th>
            <th>Hotel Ratings</th>
          </tr>
        </thead>
        <tbody>

        

          {this.state.data.map(item => (
            <tr key={item.id}>
              <td>{item.bookingId}</td>
              <td>{item.city}</td>
              <td>{item.modeOfTravel}</td>
              <td>{item.modeOfTravelPrice}</td>
              <td>{item.hotels}</td>
              <td>{item.hotelPrice}</td>
              <td>{item.hotelRatings}</td>
            </tr>
          ))}
        </tbody>

        <Link to="/">
          <button className="back1" type="submit">Back</button>
        </Link>
        <Link to="/Update">
          <button className="next1" type="submit">Next</button>
        </Link>
      </table>
    );
  }
}

export default Management;