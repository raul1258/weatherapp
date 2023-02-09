import React from "react";
import Button from "react-bootstrap/Button";

function Weather() {
  return (
    <div>
      <h1>Weather App</h1>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Place Name "
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="basic-addon2">
          Search
        </Button>
      </div>
    </div>
  );
}

export default Weather;
