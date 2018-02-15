import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'

export default class Cart extends Component {
  constructor (props) {
    super(props)
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this)
  }

  handleClickRemoveItem (id) {
    this.props.onRemoveItem(id)
  }

  render () {
    return (
      <section className='shopping-item'>
        <span>{this.props.item}</span>
        <span className='remove-button'
          onClick={() => this.handleClickRemoveItem(this.props.itemId)}>
          <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB6SURBVDhPzZJLEkAwEERzMtyCuBlxDBWHcglaTRepijFY8DbJfF5nE/cfgo/90I6FlKd0PpbYlXIHcmjirIVs8rqDU1opWsilTHIhZpkwBMJtmVB8JINXAZRxHu8y1skJ5hBtkbNQT5W0UiyvqCH4nppMIGe/8kc4twDnCIjH4sN+AQAAAABJRU5ErkJggg==' alt='remove button' />
        </span>
      </section>
    )
  }
}

Cart.propTypes = { item: PropTypes.string }
