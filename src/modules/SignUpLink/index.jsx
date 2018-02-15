import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../../constants/routes'
import './index.css'

const SignUpLink = () =>
  <section className='signup-link-container'>
    <span>Don't have an account?</span>{' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </section>

export default SignUpLink
