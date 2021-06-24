import React, { useContext, useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { Select, TextField } from "@material-ui/core";
import { storage } from "../firebase";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { ConsultantContext } from "../context/ConsultantContext";
import UploadCert from "../components/section-components/UploadCert";
import MapField from "../components/section-components/MapField";

export default function Step4() {
  const [request, setRequest] = useContext(ConsultantContext);
  return (
    <Container>
      <Row>
        <Col className="mt-4  " md="12" sm="12">
          <UploadCert></UploadCert>
        </Col>
      </Row>
    </Container>
  );
}
