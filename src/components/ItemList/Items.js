import React from 'react'
import PageHeader from 'react-bootstrap/lib/PageHeader'
import styles from './itemStyles.css'

class Items extends React.Component {
  render() {
    var item = this.props.item
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>{item.name}</h1>
        <div>
          <img className={styles.img} src={item.itemImageURL}/>
          <div className={styles.description}>{item.description}</div>
          <div>
            <h4 className={styles.itemHeader}>Daily Rate:</h4>
            <span>{item.price}</span>
          </div>
          <div>
            <h4 className={styles.itemHeader}>Deposit:</h4>
            <span>{item.deposit}</span>
          </div>
          <div>
            <h4 className={styles.itemHeader}>Rent From:</h4>
            <span>{item.firstName} {item.lastName}</span>
          </div>
        </div>
      </div>
    )

  }
}

export default Items
