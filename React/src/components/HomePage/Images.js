import React from "react";
// reactstrap components
import { Card, CardImg, CardBody, CardText } from "reactstrap";
// core components
import { Container, Row, Col } from "react-bootstrap";
function Images() {
  return (
    <>
      <div className="image">
        <Container>
          <Row>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <CardImg
                  alt="..."
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiqYmNO5KXkkmdx6UFt_gQKVyW7S7v2xLTw&usqp=CAU"
                  top
                ></CardImg>
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <CardImg
                  alt="..."
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiqYmNO5KXkkmdx6UFt_gQKVyW7S7v2xLTw&usqp=CAU"
                  top
                ></CardImg>
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card style={{ width: "18rem" }}>
                <CardImg
                  alt="..."
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiqYmNO5KXkkmdx6UFt_gQKVyW7S7v2xLTw&usqp=CAU"
                  top
                ></CardImg>
                <CardBody>
                  <CardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
