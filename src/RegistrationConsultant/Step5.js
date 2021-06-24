import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Avatar, Select, TextField } from "@material-ui/core";
import { storage } from "../firebase";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { ConsultantContext } from "../context/ConsultantContext";
import UploadCert from "../components/section-components/UploadCert";
import MapField from "../components/section-components/MapField";
import Chip from "@material-ui/core/Chip";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
export default function Step5() {
  const [request, setRequest] = useContext(ConsultantContext);
  const handleAbout = (value) => {
    let newState = Object.assign({}, request);
    newState.about = value.target.value;
    setRequest(newState);
  };
  const handleFacebook = (value) => {
    let newState = Object.assign({}, request);
    newState.facebook = value.target.value;
    setRequest(newState);
  };
  const handleInstagram = (value) => {
    let newState = Object.assign({}, request);
    newState.instagram = value.target.value;
    setRequest(newState);
  };
  const handleLinkedIn = (value) => {
    let newState = Object.assign({}, request);
    newState.linkedin = value.target.value;
    setRequest(newState);
  };
  const handleTwitter = (value) => {
    let newState = Object.assign({}, request);
    newState.twitter = value.target.value;
    setRequest(newState);
  };
  return (
    <Container>
      <Row>
        {/*   <Col md={2} sm={12} className={"center"}>
          <Avatar></Avatar>
          <button className="button btn btn-green">Upload picture</button>
        </Col> */}
        <Col className="mt-4 center " md="12" sm="12">
          <h5>Qualcosa su di te e sulla tua esperienza</h5>
          <TextField
            value={request.about}
            onChange={handleAbout}
            type="text"
            multiline
            rows={5}
            variant="outlined"
            style={{ width: "80%", textAlign: "center" }}
            required
            error={request.about == "" ? (request.error ? true : false) : null}
            helperText={
              request.about == "" ? (request.error ? "Required" : null) : null
            }
            className="mt-3"
          ></TextField>
        </Col>
      </Row>
      <Row>
        <Col className=" center mt-2" md="3" sm="12">
          <TextField
            id="input-with-icon-textfield"
            label="Facebook"
            value={request.facebook}
            onChange={handleFacebook}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              ),
            }}
          />
        </Col>
        <Col className=" center mt-2" md="3" sm="12">
          <TextField
            id="input-with-icon-textfield"
            label="Instagram"
            variant="outlined"
            value={request.instagram}
            onChange={handleInstagram}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <InstagramIcon />
                </InputAdornment>
              ),
            }}
          />
        </Col>
        <Col className=" center mt-2" md="3" sm="12">
          <TextField
            id="input-with-icon-textfield"
            label="LinkedIn"
            variant="outlined"
            value={request.linkedin}
            onChange={handleLinkedIn}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LinkedInIcon />
                </InputAdornment>
              ),
            }}
          />
        </Col>
        <Col className=" center mt-2 " md="3" sm="12">
          <TextField
            id="input-with-icon-textfield"
            label="Twitter"
            value={request.twitter}
            onChange={handleTwitter}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TwitterIcon />
                </InputAdornment>
              ),
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}
