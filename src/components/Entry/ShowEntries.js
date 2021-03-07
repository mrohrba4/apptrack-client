import React, { Component } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Entry from './Entry'
import { Grid } from '@material-ui/core'
import TableBody from '@material-ui/core/TableBody'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
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
        <TableBody key={entry.id.toString()}>
          <TableRow>
            <Entry
              key={entry.id}
              id={entry.id}
              company={entry.company}
              position={entry.position}
              link={entry.link}
              date_applied={entry.date_applied}
              status={entry.status}
              notes={entry.notes}/>
          </TableRow>
        </TableBody>
      ))
    }

    return (
      <Grid className="entrydata1"
            container
            direction="column"
            justify="center"
            alignItems="stretch">
        <h2 className="entrytitle1">Your Entries</h2>

          {/* Table */}
          <Table>

            {/* Table Head */}
            <TableHead>
              {/* Table Row */}
              <TableRow>
                {/* Table Cells */}
                <TableCell key= "0">ID</TableCell>
                <TableCell key= "1">Company</TableCell>
                <TableCell key= "2">Position</TableCell>
                <TableCell key= "3">Link</TableCell>
                <TableCell key= "4">Date Applied</TableCell>
                <TableCell key= "5">Status</TableCell>
                <TableCell key= "6">Notes</TableCell>

              </TableRow>
            </TableHead>
              {entriesJsx}
            </Table>
        </Grid>
    )
  }
}

export default IndexEntries
