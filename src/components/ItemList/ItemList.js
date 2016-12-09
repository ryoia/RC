import React from 'react'
import Items from './Items'

class ItemList extends React.Component {
  render() {
    if (this.props.searchResult.length > 0) {
      return (
        <div>
          {
            this.props.searchResult.map(function(result) {
              return <Items item={result} />
            })
          }
        </div>
      )
    } else {
      return (
        <div>no item</div>
      )
    }
  }
}

export default ItemList
