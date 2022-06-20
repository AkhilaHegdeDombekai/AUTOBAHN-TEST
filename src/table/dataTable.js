import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect } from "react";
import { Delete, Edit } from "@mui/icons-material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { TableFooter, TablePagination } from "@mui/material";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";

const styles = (theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto",
  },
  table: {
    minWidth: 700,
  },
});

function SimpleTable(props) {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      setAPIData(response.data);
    });
  }, []);
  const { classes } = props;
  

  //const [pageSize, setPageSize] = React.useState(10);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = React.useState(0);
  const emptyRows =    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - APIData.length) : 0;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const setData = (data) => {
    let { id, title, body, } = data;
        localStorage.setItem('id', id);
        localStorage.setItem('title', title);
        localStorage.setItem('body', body);
 }

 const onDelete = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
//   const columns = [
//     { field: 'id', headerName: 'ID', width: 90, bgcolor: "orange"  },
//     {
//       field: 'title',
//       headerName: 'Title',
//       width: 200,
//       editable: false,
//     },
//     {
//         field: 'body',
//         headerName: 'Body',
//         width: 400,
//         editable: false,
//       },
//       {
//         field: 'action',
//         headerName: 'Action',
//         width: 200,
//         editable: false,
//       }
//   ];


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ bgcolor: "orange" }}>ID</TableCell>
            <TableCell sx={{ bgcolor: "orange" }} align="center">
              Title
            </TableCell>
            <TableCell
              sx={{ bgcolor: "orange", width: "130vh" }}
              align="center"
            >
              Body
            </TableCell>
            <TableCell sx={{ bgcolor: "orange" }} align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {APIData.map((row) => ( */}
          {(rowsPerPage > 0
            ? APIData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : APIData
          ).map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell
                align="center"
                sx={{ overflow: "hidden", whiteSpace: "break-spaces" }}
              >
                <div tooltip={row.body}>{row.body}</div>
              </TableCell>
              <TableCell align="center">
                <Box display="flex" flexDirection="row">
                <Link to='/update' style={{ textDecoration: 'none' }} ><Edit sx={{ color: "blue" }} onClick={() => setData(row)}></Edit> </Link>&nbsp;
                  <span sx="height:10vh">|</span>{" "}
                  <Link to='/' style={{ textDecoration: 'none' }} > <Delete sx={{ color: "red" }} onClick={() => onDelete(row.id)}></Delete></Link>
                </Box>
              </TableCell>
            </TableRow>
          ))}

{emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={APIData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
    // <div style={{ height: 400, width: '100%' }}>
    //   <DataGrid
    //   rows={APIData}
    //   columns={columns}
    //     pageSize={pageSize}
    //     onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
    //     rowsPerPageOptions={[5, 10, 20]}
    //     pagination
    //     {...APIData}
    //   />
    // </div>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
