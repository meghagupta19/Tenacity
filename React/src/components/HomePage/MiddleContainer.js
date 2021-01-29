import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardImg } from "reactstrap";

function MiddleContainer() {
  return (
    <div>
       <Container className="middle-container">
          <Row>
            <Col md={6} className="middle-col-1">
              <Card className="col-1-image">
                <CardImg
                  alt="..."
                  src="https://images.pexels.com/photos/1667240/pexels-photo-1667240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                ></CardImg>
              </Card>
              <blockquote className="blockquote text-center col-1-blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
                <footer className="blockquote-footer">
                  Someone famous in{" "}
                  <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Col>
            
            <Col md={5} className="middle-col-2">
              <Card className="col-2-image">
                <CardImg
                  alt="..."
                  src="https://images.pexels.com/photos/3719494/pexels-photo-3719494.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                ></CardImg>
              </Card>
            </Col>
          </Row>
        </Container>
     
    </div>
  );
}

export default MiddleContainer;
