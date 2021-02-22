import React from 'react'

const Entry = ({ id, company, position, link, date_applied, status, notes }) => (
  <div className="entrybox1">
  <ul>
    <li><span className="entrylabel1">ID: {id}</span></li>
    <li><span className="entrylabel1">Company:</span> {company}</li>
    <li><span className="entrylabel1">Position:</span> {position}</li>
    <li><span className="entrylabel1">Link:</span> {link}</li>
    <li><span className="entrylabel1">Date Applied:</span> {date_applied}</li>
    <li><span className="entrylabel1">Status:</span> {status}</li>
    <li><span className="entrylabel1">Notes:</span> {notes}</li>
  </ul>
  </div>
)

export default Entry
