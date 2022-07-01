// import "../../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Row, Col } from "react-bootstrap";
function Cars(props) {
  const alertfunction = (x, y) => {
    alert(`You have to pay
       ${x} to buy ${y} ! `);
  };
  return (
    <div className="card">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={props.e.imgsrc}
                width={"200px"}
                height={"500px"}
              />
              <Card.Body>
                <Card.Title>{props.e.name}</Card.Title>
                <Card.Text>price.{props.e.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => alertfunction(props.e.price, props.e.name)}
                >
                  buy
                </Button>{" "}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cars;
