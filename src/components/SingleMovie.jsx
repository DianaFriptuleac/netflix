import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleMovie extends Component {
  handleCardClick = () => {
    this.props.onMovieSelect(this.props.movie.imdbID);
  };

  render() {
    const { movie, isSelected } = this.props;

    return (
      <Card onClick={this.handleCardClick} className="h-100 movieCard"
      >

        <Card.Img
          variant="top"
          className="h-100"
          src={movie.Poster } //per i film che non hanno il poster
          alt={movie.Title}
          onError={() => this.props.onPosterError && this.props.onPosterError(movie.imdbID)}
        />
        {isSelected && (
          <Card.Body className="p-2"
         >
            <Card.Title className="titleCard">{movie.Title}</Card.Title>
            <Card.Text className="textCard">Year: {movie.Year}</Card.Text>
          </Card.Body>
        )}
      </Card>
    );
  }
}

export default SingleMovie;
