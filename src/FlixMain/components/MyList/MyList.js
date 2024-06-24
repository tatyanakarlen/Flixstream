import React from 'react'
import styles from './MyList.module.css'

const MyList = () => {
  return (
    <div className="text-light">
     <h4 className="mt-4">My list</h4>
     <div className={styles.listContainer}>
     <ul className={`${styles.navMenuList} text-light`}>
          <li>
            <h1>ITEM 1</h1>
          </li>
          <li>
            <h1>ITEM 2</h1>
          </li>
          <li>
            <h1>ITEM 3</h1>
          </li>
          <li>
            <h1>ITEM 4</h1>
          </li>
          <li>
            <h1>ITEM 4</h1>
          </li>
          <li>
            <h1>ITEM 4</h1>
          </li>
          <li>
            <h1>ITEM 4</h1>
          </li>
          <li>
            <h1>ITEM 4</h1>
          </li>
          <li>
            <h1>ITEM 4</h1>
          </li>
        
        </ul>
        </div>
    </div>
  )
}

export default MyList
