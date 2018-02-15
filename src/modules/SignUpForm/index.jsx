import React, { Component } from 'react'

import {
  signUpFormDefaults
} from '../../constants/signUpFormDefaults'
import { setPropKeys } from '../../utils/setPropKeys'
import { auth } from '../../firebase/index'
import * as routes from '../../constants/routes'
import './index.css'

export default class SignUpForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { ...signUpFormDefaults }
  }

  handleSubmit (e) {
    const { email, passwordOne } = this.state
    const { history } = this.props

    auth.createUser(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...signUpFormDefaults }))
        history.push(routes.SHOPPING)
      })
      .catch(error => this.setState(setPropKeys('error', error)))
    e.preventDefault()
  }

  render () {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.handleSubmit}>
        <input className='app-signup' value={username} type='text' placeholder='Your full name...'
          onChange={e => this.setState(setPropKeys('username', e.target.value))} />
        <input className='app-signup' value={email} type='text' placeholder='Email address...'
          onChange={e => this.setState(setPropKeys('email', e.target.value))} />
        <input className='app-signup' value={passwordOne} type='password' placeholder='Enter a password'
          onChange={e => this.setState(setPropKeys('passwordOne', e.target.value))} />
        <input className='app-signup' value={passwordTwo} type='password' placeholder='Confirm password'
          onChange={e => this.setState(setPropKeys('passwordTwo', e.target.value))} />
        <button className='app-signup-button'
          style={{cursor: 'pointer'}} disabled={isInvalid} type='submit'>
          <span><span>Sign Up</span></span>
        </button>
        { error &&
          <p style={{color: '#F00', textAlign: 'center', fontWeight: 'bold'}}>
            {error.message}
          </p>
        }
      </form>
    )
  }
}
