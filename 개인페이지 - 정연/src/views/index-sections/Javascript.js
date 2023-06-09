import React from "react";
// react plugins that creates an input with a date picker
import Datetime from "react-datetime";
// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Modal,
  ModalBody,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  NavLink,
} from "reactstrap";

// core components

function Javascript() {
  const [modal1, setModal1] = React.useState(false);
  const [modal2, setModal2] = React.useState(false);
  const [modal3, setModal3] = React.useState(false);
  return (
    <>
      <div id="projects"></div>
      <div className="section section-javascript" id="javascriptComponents">
        <Container>
          <p className="text-warning">
            <h3 className="title">Projects</h3>
            <br />
          </p>
          <Row id="modals">
            <Col md="6">
              <p className="category">
                <h5>Click Buttons!</h5>
              </p>
              <br />
              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal1(true)}
                style={{ marginBottom: "80px", fontSize: 15 }}
              >
                Project 1
              </Button>

              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal2(true)}
                style={{
                  marginLeft: "50px",
                  marginBottom: "80px",
                  fontSize: 15,
                }}
              >
                Project 2
              </Button>

              <Button
                color="primary"
                className="mr-1"
                onClick={() => setModal3(true)}
                style={{
                  marginLeft: "50px",
                  marginBottom: "80px",
                  fontSize: 15,
                }}
              >
                Project 3
              </Button>

              {/* <Button color="info" onClick={() => setModal2(true)}>
                Launch Modal Mini
              </Button> */}
              <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Study With</h4>
                </div>
                <ModalBody>
                  <p>
                    <img
                      alt="Project 1"
                      src={require("../../assets/img/project5-1.jpg")}
                    ></img>
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="default"
                    type="button"
                    href="https://github.com/jyeon172/MP-MobileProject"
                  >
                    Github
                  </Button>
                  <Button
                    color="default"
                    type="button"
                    href="https://www.youtube.com/watch?v=uRJlPR1WyDM"
                  >
                    Youtube
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal1(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

              <Modal isOpen={modal2} toggle={() => setModal2(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Open Eyes</h4>
                </div>
                <ModalBody>
                  <p>
                    <img
                      alt="Project 2"
                      src={require("../../assets/img/project5-2.jpg")}
                    ></img>
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="default"
                    type="button"
                    href="https://github.com/GachonAI20/final"
                  >
                    Github
                  </Button>
                  <Button
                    color="default"
                    type="button"
                    href="https://www.youtube.com/watch?v=QJsIhGM2SKA"
                  >
                    Youtube
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal2(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>

              <Modal isOpen={modal3} toggle={() => setModal3(false)}>
                <div className="modal-header justify-content-center">
                  <button
                    className="close"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Real Recognize Real</h4>
                </div>
                <ModalBody>
                  <p>
                    <img
                      alt="Project 3"
                      src={require("../../assets/img/project5-3.jpg")}
                    ></img>
                  </p>
                </ModalBody>
                <div className="modal-footer">
                  <Button
                    color="default"
                    type="button"
                    href="https://github.com/3R-RealRecognizeReal/Flask"
                  >
                    Github
                  </Button>
                  <Button
                    color="default"
                    type="button"
                    href="https://www.youtube.com/watch?v=nGUdnELqYsQ"
                  >
                    Youtube
                  </Button>
                  <Button
                    color="danger"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
              {/* <Modal
                modalClassName="modal-mini modal-info"
                toggle={() => setModal3(false)}
                isOpen={modal2}
              >
                <div className="modal-header justify-content-center">
                  <div className="modal-profile">
                    <i className="now-ui-icons users_circle-08"></i>
                  </div>
                </div>
                <ModalBody>
                  <p>Always have an access to your profile</p>
                </ModalBody>
                <div className="modal-footer">
                  <Button className="btn-neutral" color="link" type="button">
                    Back
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    type="button"
                    onClick={() => setModal3(false)}
                  >
                    Close
                  </Button>
                </div>
              </Modal> */}
            {/* </Col> */}
            {/* <Col md="6">
              <h4>Popovers</h4>
              <Button
                color="default"
                id="tooltip175489643"
                type="button"
                className="mr-1"
              >
                On left
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "top" : "left"}
                target="tooltip175489643"
                className="popover-primary"
              >
                <PopoverHeader>Popover On Left</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                id="tooltip768569110"
                type="button"
                className="mr-1"
              >
                On top
              </Button>
              <UncontrolledPopover placement="top" target="tooltip768569110">
                <PopoverHeader>Popover on Top</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button
                color="default"
                id="tooltip966745638"
                type="button"
                className="mr-1"
              >
                On right
              </Button>
              <UncontrolledPopover
                placement={window.innerWidth < 768 ? "bottom" : "right"}
                target="tooltip966745638"
              >
                <PopoverHeader>Popover on Right</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                  <br /> Here will be some very useful information about his
                  popover.
                </PopoverBody>
              </UncontrolledPopover>
              <Button color="default" id="tooltip822900491" type="button">
                On bottom
              </Button>
              <UncontrolledPopover placement="bottom" target="tooltip822900491">
                <PopoverHeader>Popover on Bottom</PopoverHeader>
                <PopoverBody>
                  Here will be some very useful information about his popover.
                </PopoverBody>
              </UncontrolledPopover>
            </Col>
            <br></br>
            <br></br>
            <Col md="6">
              <h4>Datepicker</h4>
              <Row>
                <Col md="6">
                  <div className="datepicker-container">
                    <FormGroup>
                      <Datetime
                        timeFormat={false}
                        inputProps={{ placeholder: "Datetime Picker Here" }}
                      />
                    </FormGroup>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <h4>Tooltips</h4>
              <Button
                className="btn-tooltip mr-1"
                color="default"
                id="tooltip116884155"
                type="button"
              >
                On left
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="left"
                target="tooltip116884155"
              >
                Tooltip on left
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip mr-1"
                color="default"
                id="tooltip502327420"
                type="button"
              >
                On top
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="top"
                target="tooltip502327420"
              >
                Tooltip on top
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip mr-1"
                color="default"
                id="tooltip243887155"
                type="button"
              >
                On bottom
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="bottom"
                target="tooltip243887155"
              >
                Tooltip on bottom
              </UncontrolledTooltip>
              <Button
                className="btn-tooltip"
                color="default"
                id="tooltip542703310"
                type="button"
              >
                On right
              </Button>
              <UncontrolledTooltip
                delay={0}
                placement="right"
                target="tooltip542703310"
              >
                Tooltip on right
              </UncontrolledTooltip>
              <div className="clearfix"></div>
              <br></br>
              <br></br> */}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Javascript;
