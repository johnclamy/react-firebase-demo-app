import React from 'react'
import { withRouter } from 'react-router-dom'

import SignUpForm from '../../modules/SignUpForm/index'
import './index.css'

const SignUpPage = ({ history }) =>
  <section className='signup-page-container'>
    <header>
      <h1>Sign Up</h1>
    </header>
    <SignUpForm history={history} />
  </section>

export default withRouter(SignUpPage)
