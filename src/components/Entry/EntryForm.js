import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'


const EntryForm = ({ handleSubmit, handleInputChange, entry }) => (
  <Grid container
        direction="column"
        justify="center"
        alignItems="center"
  >
      <form onSubmit={handleSubmit}>
      <Grid item>
        <TextField className="ctf"
          name="company"
          type="text"
          placeholder="Company Name"
          value={entry.company}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField className="ctf"
          name="position"
          type="text"
          placeholder="Job Position"
          value={entry.position}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField className="ctf"
          name="link"
          type="text"
          placeholder="Link"
          value={entry.link}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField className="ctf"
          name="date_applied"
          type="text"
          placeholder="Date Applied"
          value={entry.date_applied}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField className="ctf"
          name="status"
          type="text"
          placeholder="Application status"
          value={entry.status}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <TextField className="ctf"
          name="notes"
          type="text"
          placeholder="Notes"
          value={entry.notes}
          onChange={handleInputChange}
          variant="outlined"
        />
      </Grid>
      <Grid item>
        <Button variant="contained" type="submit" className="entrybutton1">Submit</Button>
      </Grid>
      </form>
  </Grid>
)

export default EntryForm
