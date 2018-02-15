import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Header from '../modules/Header/index'
import Navigation from '../modules/Navigation/index'
import Footer from '../modules/Footer/index'

import LandingPage from '../pages/Landing/index'
import SignUpPage from '../pages/SignUp/index'
import SignInPage from '../pages/SignIn/index'
import PasswordForgetPage from '../pages/PasswordForget/index'
import ShoppingPage from '../pages/Shopping/index'
import AccountPage from '../pages/Account/index'

import * as routes from '../constants/routes'
import { firebase } from '../firebase/index'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      authUser: null
    }
  }

  componentDidMount () {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }))
    })
  }

  render () {
    return (
      <Router>
        <section className='app-container'>
          <Header />
          <Navigation authUser={this.state.authUser} />
          <div className='wrapper'>
            <main className='app-content'>
              <Route exact path={routes.LANDING}
                component={() => <LandingPage />} />
              <Route exact path={routes.SIGN_UP}
                component={() => <SignUpPage />} />
              <Route exact path={routes.SIGN_IN}
                component={() => <SignInPage />} />
              <Route exact path={routes.PASSWORD_FORGET}
                component={() => <PasswordForgetPage />} />
              <Route exact path={routes.SHOPPING}
                component={() => <ShoppingPage />} />
              <Route exact path={routes.ACCOUNT}
                component={() => <AccountPage />} />
            </main>
            <Footer />
          </div>
        </section>
      </Router>
    )
  }
}
