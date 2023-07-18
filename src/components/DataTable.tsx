import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Pagination from './Pagination';

type Booking = {
    timestamp: string;
    purchaseId: string;
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
}

const DataTable: React.FC<DataTableProps> = ({ headers, caption, rows }) => {
    const totalCount = rows.length; 
    const pageSize = 10; 
    const siblingCount = 1;
    const [currentPage, setCurrentPage] = useState(1);
    const [displayList, setDisplayList] = useState<Booking[]>([]);
    const onPageChange = (page: number) => {
        setCurrentPage(page);
      };

      useEffect(() => {
        setDisplayList(rows.slice((currentPage-1)*pageSize, (currentPage-1)*pageSize+pageSize ))
      },[currentPage])
  
  return (
    <div>
    <Table variant="striped" size='md'>
      {caption && <caption>{caption}</caption>}
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index}>{header}</Th>
          ))}   
        </Tr>
      </Thead>
      <Tbody>
        {displayList.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            <Td>{row.timestamp}</Td>
            <Td>{row.purchaseId}</Td>
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
