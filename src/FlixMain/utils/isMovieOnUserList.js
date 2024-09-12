// export const isMovieOnUserList = (userMovies, movieId) => {
//     return userMovies.some((userMovie) => userMovie.id === movieId);
//   };

export const isMovieOnUserList = (userMovies, movieId) => {
  if (!Array.isArray(userMovies)) {
    return false;
  }
  return userMovies.some((userMovie) => userMovie.id === movieId);
};