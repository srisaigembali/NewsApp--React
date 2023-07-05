import React, { Component } from 'react';
import loading from '../assets/images/loading.gif';

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-5">
        <img src={loading} alt="loading gif" width="30px" height="30px" />
      </div>
    );
  }
}

export default Spinner;
