import { Component } from "react";
import { Col, Container, Row, Dropdown, Card, Spinner, Alert } from "react-bootstrap";

class MovieSection extends Component {
  state = {
    mymovies: [],
    isLoading: true,
    isError: false,
  };

  componentDidMount() {
    this.fetchAllMovies();
  }

  fetchAllMovies = () => {
    fetch(
         `http://www.omdbapi.com/?s=${this.props.saga}&apikey=80031566`
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("LA CHIAMATA E ANDATA A BUON FINE!");
        }
      })
      .then((data) => {
        console.log("MY MOVIES", data);
        this.setState({
          mymovies: data.Search || [], // Imposta films con l'array "Search" o un array vuoto se non esiste
          isLoading: false,
        });
      })
      .catch((error) => {
        console.log("ERRORE NEL RECUPERO DATI", error);
        this.setState({
          isLoading: false,
          isError: true,
        });
      });
  };

  render() {
    console.log("Render invocato");

    const { mymovies, isLoading, isError } = this.state;

    return (
      <Container className="my-4">
        <Row className="mb-3">
          <Col>
            <Col>
              <h2>TV Shows</h2>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/comedy">Comedy</Dropdown.Item>
                  <Dropdown.Item href="#/drama">Drama</Dropdown.Item>
                  <Dropdown.Item href="#/thriller">Thriller</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Col>
          <Col>
          <i className="bi bi-grid icons"></i>
          <i className="bi bi-grid-3x3 icons"></i>
          </Col>
        </Row>
        <Row className="mb-3">
            <Col>
            <h4>{this.props.saga}</h4>
            </Col>
            </Row>
            <Row>
          {isLoading && (
            <Col className="d-flex justify-content-center">
              <Spinner animation="border" variant="secondary" />
            </Col>
          )}
          {isError && (
            <Col>
              <Alert variant="danger">Errore nel recupero dei film!</Alert>
            </Col>
          )}
          {!isLoading && !isError && mymovies.length > 0 &&
            mymovies.map((movie) => (
              <Col xs={12} md={4} lg={3} key={movie.imdbID} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"} //se un film non ha poster
                    alt={movie.Title}
                  />
                  <Card.Body>
                    <Card.Title>{movie.Title}</Card.Title>
                    <Card.Text>
                      Year: {movie.Year}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}
export default MovieSection;
