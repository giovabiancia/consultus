import React, { Component, useState, useContext, useEffect } from "react";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
import { Badge, Col, Form, Row } from "react-bootstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

import { LinearScale } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { RequestContext } from "../../context/RequestContext";

const GreenRadio = withStyles({
  root: {
    color: "lightgray",
    transform: "scale(2)",
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

export default function Map(props) {
  const [specificAlert, setSpecificAlert] = useState(false);
  const [rangeError, setRangeError] = useState(false);

  const [request, setRequest] = useContext(RequestContext);

  const addressChange = (address) => {
    let newState = Object.assign({}, request);
    newState.indirizzo = address;
    newState.selectedRadioColor = "gray";
    newState.selectedValue = "";
    setRequest(newState);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        getCoordinates,
        handleLocationError
      );
    } else {
      alert("Geolocation is not supported in this browser");
    }
  };
  const getCoordinates = (position) => {
    setRangeError("");
    fetch(
      `https://www.google.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=false&key=AIzaSyCFGqm0wyxR5Jxtehsd_l6A3xh1qVg6O4E`
    ).then((response) =>
      response
        .json()
        .then((data) => {
          addressChange(data.results[0].formatted_address);
          let formattedAddress =
            data.results[0].formatted_address.toUpperCase();
          let addressComponent = data.results[0].address_components;
        })

        .catch((erro) => alert(erro))
    );
  };
  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  };

  // autocomplete

  const handleSelect = (address) => {
    setRangeError(false);
    let newState = Object.assign({}, request);
    newState.selectedValue = "";
    newState.indirizzo = address;
    setRequest(newState);

    setSpecificAlert(false);
    geocodeByAddress(address)
      .then((results) => {
        getLatLng(results[0]);

        // prendi il formatted address e vedi se contiene una delle città nell' array areas
        let formattedAddress = results[0].formatted_address.toUpperCase();
        let addressComponent = results[0].address_components;
        var latitude = results[0].geometry.location.lat();
        var longitude = results[0].geometry.location.lng();
        let inZona = [];

        // se tutto sono uguali (sono tutti false vuol dire che non in zona )ritorna true altrimenti false
        const allEqual = (arr) => arr.every((v) => v === arr[0]);

        allEqual(inZona);

        if (allEqual(inZona) == true) {
          let newState = Object.assign({}, request);
          newState.selectedRadioColor = "red";
          newState.selectedValue = "c";
          setRequest(newState);
        }

        if (results[0].geometry.location_type == "APPROXIMATE") {
          setSpecificAlert(true);
        }
      })
      .then((latLng) => {
        console.log("Success", latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <div className="col-12 mt-4 mb-4  center">
      <h4 className=" mt-4 mb-4">Posizione</h4>
      <PlacesAutocomplete
        value={request.indirizzo}
        onChange={addressChange}
        onSelect={handleSelect}
        debounce={2000}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              style={{ minWidth: 300 }}
              label="Ricerca Località"
              type="search"
              variant="outlined"
              error={
                request.indirizzo == "" ? (request.error ? true : false) : null
              }
              helperText={
                request.indirizzo == ""
                  ? request.error
                    ? "Required"
                    : null
                  : null
              }
              /*  InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomIcon />
                    </InputAdornment>
                  ),
                }} */
              value={request.indirizzo}
              required
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input",
              })}
            />

            <div className="autocomplete-dropdown-container widget">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active widget"
                  : "suggestion-item widget";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <ul className="list-group-flush">
                      <li
                        style={{ marginTop: "10px", listStyle: "none" }}
                        className=" list-group-item mt-4"
                        onClick={() => addressChange(suggestion.description)}
                      >
                        {suggestion.description}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <button
        className="button button-primary "
        style={{ marginBottom: 200 }}
        onClick={getLocation}
      >
        Geolocation attuale
      </button>
    </div>
  );
}
