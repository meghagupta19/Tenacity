import React from "react";
// reactstrap components
import{
  Card,
  CardBody
} from "reactstrap";
// core components

function Quotes(){
  return (
    <>
      <div className="quotes">
      <Card>
        <CardBody>
          <blockquote className="blockquote blockquote-primary mb-0">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className="blockquote-footer">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </CardBody>
      </Card>
      </div>
    </>
  );
}

export default Quotes