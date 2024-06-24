import React from 'react'
import styles from './CustomProgress.module.css'
import { ProgressBar } from 'react-bootstrap'

const CustomProgress = ( {now} ) => {
  return (
    <ProgressBar className={styles.customProgress} now={now} />
  )
}

export default CustomProgress
