export const isMovieOnUserList = (userMovies, movieId) => {
    return userMovies.some((userMovie) => userMovie.id === movieId);
  };