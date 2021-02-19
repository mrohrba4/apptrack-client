import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

class IndexEntries extends Component {
  constructor (props) {
    super(props)

    this.state = {
      entries: null
    }
  }

  componentDidMount () {
    axios(apiUrl + '/entries/')
      .then(res => this.setState({ entries: res.data.entries }))
      .catch(console.error)
  }

  render () {
    let entriesJsx

    if (this.state.entries === null) {
      entriesJsx = 'Loading...'
    } else if (this.state.entries.length === 0) {
      entriesJsx = 'No entries to display.'
    } else {
      entriesJsx = this.state.entries.map(entry => (
        <li key={entry._id}>
        </li>
      ))
    }
    return (
      <div>
        <h2>All Entries</h2>
        {entriesJsx}
      </div>
    )
  }
}

export default IndexEntries