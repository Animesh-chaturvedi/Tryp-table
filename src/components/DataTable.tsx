import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface DataTableProps {
  headers: string[];
  caption?: string;
  rows: (string | JSX.Element)[][];
}

const DataTable: React.FC<DataTableProps> = ({ headers, caption, rows }) => {
  return (
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
        {rows.map((row, rowIndex) => (
          <Tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Td key={cellIndex}>{cell}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DataTable;
