import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Entry from './Entry'
import { Grid } from '@material-ui/core'
// import ViewEntry from './ViewEntry'
// import { Link } from 'react-router-dom'

class IndexEntries extends Component {
  constructor (props) {
    super(props)

    this.state = {
      entries: []
    }
  }

  componentDidMount () {
    const { user } = this.props
    axios({
      url: apiUrl + '/entries/',
      method: 'get',
      headers: {
        'Authorization': `Token ${user.token}`
      }})
      .then(res => this.setState({ entries: res.data.entries }))
      .catch(console.error)
  }



  render () {
    let entriesJsx
    const { entries } = this.state
    console.log(entries)
    if (this.state.entries === null) {
      entriesJsx = 'Loading...'
    } else if (this.state.entries.length === 0) {
      entriesJsx = 'No entries to display.'
    } else {
      entriesJsx = this.state.entries.map(entry => (
        <div key={entry.id}>
          <Entry
            key={entry.id}
            id={entry.id}
            company={entry.company}
            position={entry.position}
            link={entry.link}
            date_applied={entry.date_applied}
            status={entry.status}
            notes={entry.notes}/>
          </div>
      ))
    }

    return (
      <div>
      <Grid container
            direction="column"
            justify="center"
            alignItems="center">
        <h2 className="entrytitle1">Your Entries</h2>
        <div className="entrydata1">
        <Grid item xs>
          {entriesJsx}
        </Grid>
        </div>
      </Grid>
      </div>
    )
  }
}

export default IndexEntries
