import React from 'react'
import styles from './MovieYearLength.module.css'

const MovieYearLength = ( {year, length} ) => {
  return (
    <p className={`${styles.movieYearLength} fw-semibold text-light mb-0`}>
        {year} &bull;
    <span className="fw-normal"> {length}</span>{" "}
   
  </p>
  )
}

export default MovieYearLength
