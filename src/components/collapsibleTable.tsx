import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Questions from '../data/faq_questions.json';
import Link from '@mui/material/Link';


interface Question {
  id: number;
  prompt: string;
  answer: string;
}

function createData(
  id: number,
  question: string,
  answer: string,
) {
  return {
    id,
    question,
    answer,
  };
}

const questions: Question[] = Questions.questions;

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const toggleRow = () => {
    setOpen(!open);
  };

  return (
    <>
      <TableRow sx={{ padding: 'none' }} onClick={toggleRow}>
        <TableCell align="left" component="th" scope="row">
          <Box sx={{ fontWeight: 'bold', fontSize: '1.05rem', color: 'black'}}>
              {row.question}
          </Box>
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
              <Typography variant="body1" mt="1rem" mb="1rem" color="black">
                {row.answer}
                {row.id === 7 ? <Link href="https://assets.kalkomey.com/boater/pdfs/handbook/idaho-handbook-entire.pdf" target="_blank">here.</Link> : ""}
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = questions.map((question) => (createData(question.id, question.prompt, question.answer)));

export default function CollapsibleTable() {
  return (
    <>
      {rows.map((row) => (
        <Box 
          key={1} 
          sx={{ 
            marginBottom: '10px', 
            marginLeft: '10px', 
            marginRight: '10px', 
            fontSize: '3rem' 
            }}>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 'none',
              border: 'none',
              // border: '1px solid #ddd',
              backgroundColor: '#D0DDE9'
            }}
          >
            <Table aria-label="collapsible table" sx = {{ marginTop: '0px'}}>
              <TableBody>
                <Row row={row} />
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      ))}
    </>
  );
}