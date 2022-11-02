function Modal(props) {
  let movie = { ...props.data };
  return (
    <div className="modal">
      <div className="container">
        {" "}
        <div className="flex">
          <h2>Movie Details</h2>
          <i
            className="fas fa-xmark"
            onClick={() => closeModal(props.setState)}
          ></i>
        </div>
        <div className="flex content">
          <img src={movie.Poster} alt={movie.Title} />
          <div>
            <h3>
              <span className="title">{movie.Title}</span>
            </h3>
            <hr />
            <div>
              <p>
                Language: <span>{movie.Language}</span>
              </p>
              <p>
                Year: <span>{movie.Year}</span>
              </p>
              <p>
                Release Date: <span>{movie.Released}</span>
              </p>
              <p>
                Genre: <span>{movie.Genre}</span>
              </p>
              <p>
                Rated: <span>{movie.Rated}</span>
              </p>
              <p>
                Runtime: <span>{movie.Runtime}</span>
              </p>
              <p>
                Director: <span>{movie.Director}</span>
              </p>
              <p>
                Writers: <span>{movie.Writer}</span>
              </p>
              <p>
                Actors: <span>{movie.Actors}</span>
              </p>
              <p>
                Origin Country: <span>{movie.Country}</span>
              </p>
              <p>
                Awards: <span>{movie.Awards}</span>
              </p>
              <p>
                Meta Score: <span>{movie.Metascore}</span>
              </p>
              <p>
                IMDB Rating: <span>{movie.imdbRating}</span>
              </p>
              <p>
                IMDB Votes: <span>{movie.imdbVotes}</span>
              </p>
              <p>
                Type: <span>{movie.Type}</span>
              </p>
              <p>
                Plot: <span>{movie.Plot}</span>
              </p>
            </div>
          </div>
        </div>
        <h3 className="pictures">Pictures:</h3>
        <div className="flex wrap">
          {movie.Images.map((img, i) => (
            <img key={i} src={img} alt=""></img>
          ))}
        </div>
      </div>
    </div>
  );
}
function closeModal(setState) {
  setState(null);
}
export default Modal;
