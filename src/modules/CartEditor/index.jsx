import React, { Component } from 'react'
import './index.css'

export default class CartEditor extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputItem: ''
    }
    this.addItem = this.addItem.bind(this)
    this.handleInputItem = this.handleInputItem.bind(this)
  }

  handleInputItem (e) {
    this.setState({ inputItem: e.target.value })
  }

  addItem () {
    this.props.onAddItem(this.state.inputItem)
    this.setState({ inputItem: '' })
  }

  render () {
    return (
      <form className='cart-editor'>
        <input type='text' className='cart-item-input'
          value={this.state.inputItem}
          onChange={this.handleInputItem}
          placeholder='Add an item...' />
        <button type='button'
          onClick={this.addItem}
          className='cart-add-button'>
          Add
        </button>
      </form>
    )
  }
}
