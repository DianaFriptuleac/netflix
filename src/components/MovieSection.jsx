import React, { Component } from "react";
import { Col, Container, Row, Spinner, Alert } from "react-bootstrap";
import SingleMovie from "./SingleMovie";  // Importiamo il nuovo componente

class MovieSection extends Component {
  state = {
    mymovies: [],
    isLoading: true,
    isError: false,
    movieSelected: null, // per selezionare le card
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
          throw new Error("LA CHIAMATA NON È ANDATA A BUON FINE!");
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

  toggleMovieDetails = (idMovie) => {
    this.setState((prevState) => ({
      movieSelected: prevState.movieSelected === idMovie ? null : idMovie,
    }));
  };

  render() {
    console.log("Render invocato");

    const { mymovies, isLoading, isError, movieSelected } = this.state;

    return (
      <Container className="my-4">
        <Row className="mb-3">
          <Col>
            <h4 className="text-light">{this.props.saga}</h4>
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
              <Col xs={12} sm={6} md={4} lg={2} key={movie.imdbID} className="mb-4">
                <SingleMovie
                  movie={movie}
                  isSelected={movieSelected === movie.imdbID}
                  onMovieSelect={this.toggleMovieDetails}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default MovieSection;

