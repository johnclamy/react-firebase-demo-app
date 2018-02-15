import React from 'react'
import { withRouter } from 'react-router-dom'

import SignInForm from '../../modules/SignInForm/index'
import SignUpLink from '../../modules/SignUpLink/index'
import './index.css'

const SignInPage = ({ history }) =>
  <section className='signin-page-container'>
    <header>
      <h1>Sign In</h1>
    </header>
    <SignInForm history={history} />
    <SignUpLink />
  </section>

export default withRouter(SignInPage)
