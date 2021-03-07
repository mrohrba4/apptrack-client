import React from 'react'
import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';



const Entry = ({ id, company, position, link, date_applied, status, notes }) => (
        <React.Fragment>
            <TableCell>{id}</TableCell>
            <TableCell>{company}</TableCell>
            <TableCell>{position}</TableCell>
            <TableCell>{link}</TableCell>
            <TableCell>{date_applied}</TableCell>
            <TableCell>{status}</TableCell>
            <TableCell>{notes}</TableCell>
        </React.Fragment>
)
export default Entry
