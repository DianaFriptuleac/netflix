import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();  //un hook che ci riporta alla pagina
  return (
    <Container className="mt-5">
      <Row className="justify-content-center my-5 text-light" >
        <Col xs={12} md={6}>
          <h2>404 - Not found</h2>
          <p>
            Sorry, page not found. Try again later.
          </p>
          <Button
            style={{backgroundColor:"#e30914", border: "none"}}
            onClick={() => {
              navigate("/"); //riporta a homepage
            }}
          >
            TORNA IN HOMEPAGE
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;