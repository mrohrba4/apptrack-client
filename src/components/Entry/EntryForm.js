import React from 'react'

const EntryForm = ({ handleSubmit, handleInputChange, entry }) => (
  <div className="row-12 entryrow1">
    <div className="col-9 entrycol1">
      <form onSubmit={handleSubmit}>
        <input
          name="company"
          type="text"
          placeholder="Company Name"
          value={entry.company}
          onChange={handleInputChange}
        />
        <input
          name="position"
          type="text"
          placeholder="Job Position"
          value={entry.position}
          onChange={handleInputChange}
        />
        <input
          name="link"
          type="text"
          placeholder="Link"
          value={entry.link}
          onChange={handleInputChange}
        />
        <input
          name="date_applied"
          type="text"
          placeholder="Date Applied"
          value={entry.date_applied}
          onChange={handleInputChange}
        />
        <input
          name="status"
          type="text"
          placeholder="Application status"
          value={entry.status}
          onChange={handleInputChange}
        />
        <input
          name="notes"
          type="text"
          placeholder="Notes"
          value={entry.notes}
          onChange={handleInputChange}
        />
        <button type="submit" className="entrybutton1">Submit</button>
      </form>
    </div>
  </div>
)

export default EntryForm
