import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// Utilities
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'

// Component Imports
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'
import Main from './components/Home/Home'
import IndexEntries from './components/Entry/ShowEntries'
import CreateEntry from './components/Entry/CreateEntry'
import ViewEntry from './components/Entry/ViewEntry'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      msgAlerts: []
    };
  }

  // USER
  setUser = user => this.setState({ user })
  clearUser = () => this.setState({ user: null })

  // Remove Alert
  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  // Message Alert
  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state
    return (

      <Fragment>
        {/* Nav Bar */}
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}

        {/* Main */}
        <Route exact path='/' render={() => (
          <Main/>
        )} />
        <main className="container">

          {/* Sign-Up */}
          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          {/* Sign-In */}
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />

          {/* Sign-Out */}
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />

          {/* Change Password*/}
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />

          {/* Show All Entries */}
          <AuthenticatedRoute user={user} path='/entries' render={() => (
            <IndexEntries user={user} />
          )} />

          {/* Create an Entry */}
          <AuthenticatedRoute user={user} path='/create-entry' render={() => (
            <CreateEntry user={user} />
          )} />

          {/* View an Entry*/}
          <AuthenticatedRoute user={user} path='/view-entry' render={() => (
            <ViewEntry user={user} />
          )} />
        </main>
      </Fragment>

    )
  }
}

export default App
