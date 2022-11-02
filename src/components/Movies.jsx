import moviesList from "../data.json";
import Modal from "./Modal";
import React from "react";

class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }
  clickHandler = (i) => {
    this.setState({
      activeIndex: i,
    });
  };
  render() {
    return (
      <ul className="flex wrap container movies">
        {moviesList.map((movie, index) => {
          return (
            <li key={movie.imdbID}>
              <div className="img-container">
                <img src={movie.Poster} alt={movie.Title} />
                <div className="flex details">
                  <button onClick={() => this.clickHandler(index)}>
                    More Info
                  </button>
                </div>
              </div>
              <h2>{movie.Title}</h2>
              <p>Released: {movie.Released}</p>
              {this.state.activeIndex === index ? (
                <Modal data={movie} setState={this.clickHandler} />
              ) : null}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Movies;
