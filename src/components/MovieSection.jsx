import React, { Component } from "react";
import { Col, Container, Row, Spinner, Alert, Carousel } from "react-bootstrap";
import SingleMovie from "./SingleMovie"; // Importiamo il nuovo componente

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const PAGE_SIZE = 6;

const reduceArray = (arr, size) =>
  arr.reduce(
    (acc, _, i) => (i % size ? acc : [...acc, arr.slice(i, i + size)]),
    []
  );

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
    const MAX_PAGES = 3;
    const allMovies = [];

    const fetchPage = (page) => {
      return fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(this.props.saga)}&page=${page}&apikey=${API_KEY}`)

        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("LA CHIAMATA NON È ANDATA A BUON FINE!");
          }
        })
        .then((data) => {
          if (data.Response === "True" && data.Search) {
            // Mostra solo i movie con img.
            const movieWithPoster = data.Search.filter(
              (movie) => movie.Poster && movie.Poster !== "N/A"
            );
            allMovies.push(...movieWithPoster);
          }
        });
    };

    const promises = [];
    for (let i = 1; i <= MAX_PAGES; i++) {
      promises.push(fetchPage(i));
    }

    Promise.all(promises)
      .then(() => {
        const unique = Array.from(
          new Map(allMovies.map((m) => [m.imdbID, m])).values()
        );
        this.setState({ mymovies: unique, isLoading: false });
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

  handlePosterError = (imdbID) => {
    this.setState((s) => ({
      mymovies: s.mymovies.filter((m) => m.imdbID !== imdbID),
    }));
  };

  render() {
    // console.log("Render invocato");

    const { mymovies, isLoading, isError, movieSelected } = this.state;

    // pag. da 6
    const pages = reduceArray(mymovies, PAGE_SIZE);

    return (
      <Container className="my-5">
        <Row className="mb-3">
          <Col>
            <h4 className="text-light">{this.props.saga}</h4>
          </Col>
        </Row>

        {isLoading && (
          <Row>
            <Col className="d-flex justify-content-center">
              <Spinner animation="border" variant="secondary" />
            </Col>
          </Row>
        )}
        {isError && (
          <Row>
            <Col className="d-flex justify-content-center">
              <Alert variant="danger">Errore nel recupero dei film!</Alert>
            </Col>
          </Row>
        )}
        {!isLoading && !isError && mymovies.length > 0 && (
          <Carousel interval={null} indicators={false} variant="dark">
            {pages.map((page, idx) => (
              <Carousel.Item key={`slide-${idx}`}>
                <Row>
                  {page.map((movie) => (
                    <Col
                      xs={12}
                      sm={6}
                      md={4}
                      lg={2}
                      key={movie.imdbID}
                      className="mb-4"
                    >
                      <SingleMovie
                        movie={movie}
                        isSelected={movieSelected === movie.imdbID}
                        onMovieSelect={this.toggleMovieDetails}
                        onPosterError={this.handlePosterError}
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        )}
      </Container>
    );
  }
}

export default MovieSection;
