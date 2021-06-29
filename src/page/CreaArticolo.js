import React, { useState } from "react";
import HeaderV3 from "../components/section-components/Header-v4";
import Layouts from "../components/global-components/Layouts";
import { sectionData } from "../data/section.json";
import AboutV2 from "../components/section-components/About-v2";
import Modifica from "../components/section-components/Modifica";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function CreaArticolo() {
  const [editorState, setEditorState] = useState("");

  const onEditorStateChange = (e) => {
    setEditorState(e);
  };

  let data = sectionData.sectionTitle;
  return (
    <>
      <p> Ciao</p>
      <Layouts pageTitle="Team Details">
        <HeaderV3 background={data.teamDetails.background} />
        <section className="about p-120 index2">
          <Container>
            <Row>
              <Col>
                <Editor
                  editorState={editorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={onEditorStateChange}
                />
              </Col>
            </Row>
          </Container>
        </section>

        {/*   <Team /> */}
        {/*     <Connect />
        <Footer /> */}
      </Layouts>
    </>
  );
}
