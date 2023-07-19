import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Tag, Input } from '@chakra-ui/react';
import Pagination from './Pagination';
import moment from 'moment';

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
    const [currentPage, setCurrentPage] = useState(1);
    const [displayList, setDisplayList] = useState<Booking[]>([]);
    const [sortedColumn, setSortedColumn] = useState<string>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentList,setCurrentList] = useState<Booking[]>([]);
    
    const totalCount = rows.length;
    const pageSize = 10; 
    const siblingCount = 1;

    useEffect(() => {
        setCurrentList(rows.slice((currentPage-1)*pageSize, (currentPage-1)*pageSize+pageSize ))
      },[currentPage, rows])
      
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
        
        const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(event.target.value);
        };
        
        const filteredRows = searchQuery
        ? rows.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : rows;
        
        const sortedRows = sortable
        ? [...displayList].sort((a:any, b:any) => {
            if (a[sortedColumn] && b[sortedColumn]) {
                const compareResult = a[sortedColumn].localeCompare(b[sortedColumn]);
                
                return sortDirection === 'asc' ? compareResult : -compareResult;
            }
            return 0;
        })
        : filteredRows;
        const onPageChange = (page: number) => {
            setCurrentPage(page);
        };
        
        useEffect(() => {
          searchQuery ==='' ? setDisplayList(currentList): setDisplayList(filteredRows)
        },[searchQuery, currentList, filteredRows])             
        
        
        return (
            <div>
           <Input
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
        marginBottom="1rem"
      />
    <Table size='md'>
      {caption && <caption>{caption}</caption>}
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th
              fontSize="xs"
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
            <Td>{moment(row.timestamp).fromNow()}</Td>
            <Td>{row.purchaseid}</Td>
            <Td>{row.mail}</Td>
            <Td>{row.name}</Td>
            <Td>{row.source}</Td>
            <Td><Tag colorScheme={row.status ==="Paid"? "green" : row.status ==="Waiting" ? "yellow":"red" }  borderRadius='xl' fontSize='xs'>{row.status}</Tag></Td>
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
