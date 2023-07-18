import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Pagination from './Pagination';

type Booking = {
    timestamp: string;
    purchaseid: string;
    mail: string;
    name: string;
    source: string;
    status: string;
    select: string;
  };
interface DataTableProps {
  headers: string[];
  caption?: string;
  rows: Booking[];
  sortable ?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ headers, caption, rows, sortable }) => {
    const totalCount = rows.length; 
    const pageSize = 10; 
    const siblingCount = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [displayList, setDisplayList] = useState<Booking[]>([]);
    const [sortedColumn, setSortedColumn] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
    const handleSort = (column: string) => {
        console.log(column,"inside sort");
      if (!sortable) return;
  
      if (column === sortedColumn) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortedColumn(column);
        setSortDirection('asc');
      }
    };
  
    const sortedRows = [...displayList].sort((a:any, b:any) => {
        console.log(a, b ,a[sortedColumn], b[sortedColumn], sortedColumn, "sorted")
      if (sortable && a[sortedColumn] && b[sortedColumn]) {
        return sortDirection === 'asc'
          ? a[sortedColumn].localeCompare(b[sortedColumn])
          : b[sortedColumn].localeCompare(a[sortedColumn]);
      }
      return 0;
    });
    const onPageChange = (page: number) => {
        setCurrentPage(page);
      };

      useEffect(() => {
        setDisplayList(rows.slice((currentPage-1)*pageSize, (currentPage-1)*pageSize+pageSize ))
      },[currentPage])

      useEffect(() => {
        console.log(sortedRows,"rowws")
      },[sortedRows])
  
  return (
    <div>
    <Table variant="striped" size='md'>
      {caption && <caption>{caption}</caption>}
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th
              key={index}
              onClick={() => handleSort(header.toLocaleLowerCase().split(" ").join(""))}
              cursor={sortable ? 'pointer' : 'default'}
              _hover={sortable ? { textDecoration: 'underline' } : {}}
            >
              {header}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {sortedRows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td>{row.timestamp}</Td>
            <Td>{row.purchaseid}</Td>
            <Td>{row.mail}</Td>
            <Td>{row.name}</Td>
            <Td>{row.source}</Td>
            <Td>{row.status}</Td>
            <Td>{row.select}</Td>
          </Tr>
        ))}
      </Tbody>
      </Table>
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        siblingCount={siblingCount}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default DataTable;
