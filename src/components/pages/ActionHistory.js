import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  centerText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filterContainer: {
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    marginLeft: '16px',
  },
});

// Chỉnh sửa để tạo dữ liệu thiết bị
function createData(id, device, status, timestamp) {
  return { id, device, status, timestamp };
}

const generateRows = () => {
  const devices = ['Đèn', 'Quạt', 'Điều hòa'];
  const statuses = ['On', 'Off'];
  const rows = [];
  for (let i = 0; i < 30; i++) {
    rows.push(createData(
      i + 1, // Tạo ID bắt đầu từ 1
      devices[Math.floor(Math.random() * devices.length)],
      statuses[Math.floor(Math.random() * statuses.length)],
      new Date(Date.now() - i * 1000 * 60 * 60 * 24).toLocaleString()
    ));
  }
  return rows;
};

export default function DeviceStatusTable() {
  const classes = useStyles();
  const [rows] = useState(generateRows());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id'); // Mặc định sắp xếp theo ID

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleFilter = () => {
    console.log('Applying filter with startDate:', startDate, 'and endDate:', endDate);
  };

  const filteredRows = rows.filter(row => {
    const timestamp = new Date(row.timestamp);
    const start = new Date(startDate);
    const end = new Date(endDate);
    return (!startDate || timestamp >= start) && (!endDate || timestamp <= end);
  });

  const sortedRows = filteredRows.sort((a, b) => {
    if (orderBy === 'id') {
      return order === 'asc' ? a.id - b.id : b.id - a.id;
    } else if (orderBy === 'timestamp') {
      return order === 'asc' ? new Date(a.timestamp) - new Date(b.timestamp) : new Date(b.timestamp) - new Date(a.timestamp);
    } else {
      return order === 'asc' ? a[orderBy] - b[orderBy] : b[orderBy] - a[orderBy];
    }
  });

  return (
    <div>
      <div className={classes.filterContainer}>
        <TextField
          label="Start Date"
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Date"
          type="datetime-local"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.filterButton}
          onClick={handleFilter}
        >
          Apply Filter
        </Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.centerText}>
                <TableSortLabel
                  active={orderBy === 'id'}
                  direction={orderBy === 'id' ? order : 'asc'}
                  onClick={() => handleRequestSort('id')}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell className={classes.centerText}>
                Thiết bị
              </TableCell>
              <TableCell className={classes.centerText}>
                Trạng thái
              </TableCell>
              <TableCell className={classes.centerText}>
                Thời gian
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow key={row.id}>
                <TableCell className={classes.centerText}>{row.id}</TableCell>
                <TableCell className={classes.centerText}>{row.device}</TableCell>
                <TableCell className={classes.centerText}>{row.status}</TableCell>
                <TableCell className={classes.centerText}>{row.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </div>
  );
}
