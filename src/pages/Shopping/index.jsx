import React, { Component } from 'react'

import Cart from '../../modules/Cart/index'
import CartEditor from '../../modules/CartEditor/index'
import { firebase } from '../../firebase/index'
import './index.css'

export default class Shopping extends Component {
  constructor (props) {
    super(props)
    this.state = { items: [] }
    this.db = firebase.db.ref().child('items')
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleRemoveItem = this.handleRemoveItem.bind(this)
  }

  componentWillMount () {
    const prevItems = this.state.items

    this.db.on('child_added', snap => {
      prevItems.push({ id: snap.key, item: snap.val().item })
      this.setState({ items: prevItems })
    })

    this.db.on('child_removed', snap => {
      for (let i = 0; i < prevItems.length; i += 1) {
        if (prevItems[i].id === snap.key) {
          prevItems.splice(i, 1)
        }
      }
      this.setState({ items: prevItems })
    })
  }

  handleAddItem (item) {
    this.db.push().set({ item })
  }

  handleRemoveItem (itemId) {
    this.db.child(itemId).remove()
  }

  render () {
    return (
      <section className='shopping-page-container'>
        <section className='cart-items-container'>
          {this.state.items.map(item =>
            <Cart key={item.id}
              itemId={item.id}
              item={item.item}
              onRemoveItem={this.handleRemoveItem} />
          )}
        </section>
        <section className='cart-editor-container'>
          <CartEditor onAddItem={this.handleAddItem} />
        </section>
      </section>
    )
  }
}
