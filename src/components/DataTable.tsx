import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, Td, Tag, Input, Button } from "@chakra-ui/react";
import Pagination from "./Pagination";
import moment from "moment";
import { Booking, DataTableProps } from "../../public/interfaces";

const DataTable: React.FC<DataTableProps> = ({
  headers,
  caption,
  rows,
  sortable,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [displayList, setDisplayList] = useState<Booking[]>([]);
  const [sortedColumn, setSortedColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentList, setCurrentList] = useState<Booking[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const totalCount = rows.length;
  const pageSize = 10;
  const siblingCount = 1;

  useEffect(() => {
    setCurrentList(
      rows.slice(
        (currentPage - 1) * pageSize,
        (currentPage - 1) * pageSize + pageSize
      )
    );
  }, [currentPage, rows]);

  const handleSort = (column: string) => {
    console.log(column, "inside sort");
    if (!sortable) return;

    if (column === sortedColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortedColumn(column);
      setSortDirection("asc");
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleRowSelect = (purchaseid: string) => {
    const isSelected = selectedRows.includes(purchaseid);

    if (isSelected) {
      setSelectedRows(selectedRows.filter((id) => id !== purchaseid));
    } else {
      setSelectedRows([...selectedRows, purchaseid]);
    }
  };

  const filteredRows = searchQuery
    ? rows.filter((row) =>
        row.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : rows;

  const sortedRows = sortable
    ? [...displayList].sort((a: any, b: any) => {
        if (a[sortedColumn] && b[sortedColumn]) {
          const compareResult = a[sortedColumn].localeCompare(b[sortedColumn]);

          return sortDirection === "asc" ? compareResult : -compareResult;
        }
        return 0;
      })
    : filteredRows;
  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    searchQuery === ""
      ? setDisplayList(currentList)
      : setDisplayList(filteredRows);
  }, [searchQuery, currentList, filteredRows]);

  return (
    <div>
      <Input
        placeholder="Search by name"
        value={searchQuery}
        onChange={handleSearch}
        marginBottom="1rem"
      />
      <Table size="md">
        {caption && <caption>{caption}</caption>}
        <Thead>
          <Tr>
            {headers.map((header, index) => (
              <Th
                fontSize="xs"
                key={index}
                onClick={() =>
                  handleSort(header.toLocaleLowerCase().split(" ").join(""))
                }
                cursor={sortable ? "pointer" : "default"}
                _hover={sortable ? { textDecoration: "underline" } : {}}
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
              <Td>
                <Tag
                  colorScheme={
                    row.status === "Paid"
                      ? "green"
                      : row.status === "Waiting"
                      ? "yellow"
                      : "red"
                  }
                  borderRadius="xl"
                  fontSize="xs"
                  px={4}
                >
                  {row.status}
                </Tag>
              </Td>
              <Td> <Button
                  colorScheme={selectedRows.includes(row.purchaseid) ? 'green' : 'gray'}
                  onClick={() => handleRowSelect(row.purchaseid)}
                >
                  {selectedRows.includes(row.purchaseid) ? 'Selected' : 'Select'}
                </Button></Td>
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
