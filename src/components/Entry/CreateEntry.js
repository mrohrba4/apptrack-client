import React, { Component, Fragment } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Redirect } from 'react-router-dom'
import EntryForm from './EntryForm'
import { Grid } from '@material-ui/core'

class CreateEntry extends Component {
  constructor () {
    super()
    this.state = {
      entry: {
        company: '',
        position: '',
        link: '',
        date_applied: '',
        status: '',
        notes: ''
      },
      created: false
    }
  }

  handleInputChange = (event) => {
    const updatedField = {
      [event.target.name]: event.target.value
    }

    this.setState(currState => {
      const newEntry = { ...currState.entry,...updatedField }
      return { entry: newEntry}
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { user } = this.props
    axios({
      method: 'post',
      url: `${apiUrl}/entries/`,
      headers: {
      'Authorization': `Token ${user.token}`
    },
      data: { entry: this.state.entry }
    })
      .then(() => this.setState({ created: true }))
      .catch(console.error)
  }

  render () {
    if (this.state.created) {
      return <Redirect to={`/entries/${this.state.entry._id}`} />
    }
    return (
      <Fragment>
      <Grid container
            direction="column"
            justify="center"
            alignItems="center">
        <h2>Create An Entry</h2>
        <Grid item>
        <EntryForm
          entry={this.state.entry}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
        />
        </Grid>
        </Grid>
      </Fragment>
    )
  }
}

export default CreateEntry
