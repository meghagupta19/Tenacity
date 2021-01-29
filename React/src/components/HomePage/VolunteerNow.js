import React from "react";
// reactstrap components
import{
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
// core components

function VolunteerNow(){
  return (
    <>
      <div className="donate-Now">
      <Card className="text-center">
        <CardHeader className="mt-2">Featured</CardHeader>
        <CardBody>
          <CardTitle tag="h4">Special title treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}>
            Volunteer Now
          </Button>
        </CardBody>
        
      </Card>
      </div>
    </>
  );
}

export default VolunteerNow