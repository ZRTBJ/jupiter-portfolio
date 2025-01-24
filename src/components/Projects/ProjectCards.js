import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{width: 400, height:250}}/>
      <Card.Body>
        <Card.Title style={{fontWeight: 'bold'}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'center' }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
