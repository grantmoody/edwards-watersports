import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createData(
  question: string,
  answer: string,
) {
  return {
    question,
    answer,
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const toggleRow = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' }, marginBottom: '10rem' }} onClick={toggleRow}>
        <TableCell align="left" component="th" scope="row">
          {row.question}
        </TableCell>
        <TableCell align="right">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(e) => {
              e.stopPropagation(); // Prevent row click from toggling the row again
              setOpen(!open);
            }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="body1" mt={"1rem"} mb={"1 rem"} color="black">
                {row.answer}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData('Question 1', 'answer 1w'),
  createData('Question 2', 'answer 2'),
  createData('Question 3', 'answer 3'),
  createData('Question 4', 'answer 4'),
  createData('Question 5', 'answer 5'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        {rows.map((row) => (
          <TableBody sx={{pb: '5px'}}>
            <Row key={row.question} row={row} />
          </TableBody>
        ))}
        {/* <TableBody>
          {rows.map((row) => (
            // <Row key={row.question} row={row} />
            
          ))}
        </TableBody> */}
      </Table>
    </TableContainer>
  );
}
