import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../Particle";

import CV_MERN from "../../Assets/pdfs/JavaScript_Mohammed_Lahlali.pdf";


function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            <strong className="purple">My Resume</strong>
          </h1>
          <Row className="resume" style={{ justifyContent: "center" }}>
           
            <Col md={6}>
              <div className="text-center m-3">
                
                <Button
                  variant="primary"
                  href={CV_MERN}
                  target="_blank"
                  style={{ maxWidth: "250px" }}
                >
                  <AiOutlineDownload />
                  &nbsp;Download MERN CV
                </Button>
              </div>

              <Document file={CV_MERN} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.2 : 0.6} />
              </Document>
              
            </Col>
             
           
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
