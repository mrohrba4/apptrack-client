import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class ViewEntry extends Component {
  constructor (props) {
    super(props)

    this.state = {
      entry: null,
      redirect: null
    }
  }

  componentDidMount () {
    const { user, id } = this.props
    console.log(id)
    console.log(user)
    axios({
      url: apiUrl + '/entries/' + id,
      method: 'get',
      headers: {
        'Authorization': `Token ${user.token}`
      }})
      .then(res => this.setState({ entry: res.data.entry }))
      .catch(console.error)
  }

  deleteClick = () => {
    axios({
      method: 'delete',
      url: apiUrl + '/entries/' + this.state.book._id
    })
      .then(() => this.setState({ redirect: '/entries/' }))
      .catch(console.error)
  }

  render () {
    let entryJsx
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    const { entry } = this.state

    if (!entry) {
      entryJsx = 'Loading...'
    } else {
      entryJsx = (
        <Fragment>
          <h3>{entry.id}. {entry.company}</h3>

        </Fragment>
      )
    }

    return (
      <Fragment>
        {entryJsx}
        <button onClick={this.deleteClick}>Delete entry</button>
      </Fragment>
    )
  }
}

export default ViewEntry
