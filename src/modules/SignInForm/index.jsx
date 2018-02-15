import React, { Component } from 'react'

import { auth } from '../../firebase/index'
import * as routes from '../../constants/routes'
import { setPropKeys } from '../../utils/setPropKeys'
import {
  signInFormDefaults
} from '../../constants/signInFormDefaults'
import './index.css'

export default class SignInForm extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { ...signInFormDefaults }
  }

  handleSubmit (e) {
    const { email, password } = this.state
    const { history } = this.props

    auth.signInUser(email, password)
      .then(() => {
        this.setState(() => ({ ...signInFormDefaults }))
        history.push(routes.SHOPPING)
      })
      .catch(error => this.setState(setPropKeys('error', error)))
    e.preventDefault()
  }

  render () {
    const { email, password, error } = this.state
    const isInvalid = password === '' || email === ''

    return (
      <form onSubmit={this.handleSubmit}>
        <input className='app-signin'
          value={email} type='text'
          placeholder='Email address...'
          onChange={e => this.setState(setPropKeys('email', e.target.value))} />
        <input className='app-signin'
          value={password} type='password'
          placeholder='Password'
          onChange={e => this.setState(setPropKeys('password', e.target.value))} />
        <button className='app-signin-button'
          disabled={isInvalid}
          type='submit'>
          <span><span>Sign In</span></span>
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
