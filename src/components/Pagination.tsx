import { Box, Button, ButtonGroup, Center, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { usePagination } from './commonfunctions/usePagination';

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
  onPageChange,
}) => {
  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  const handlePageChange = (page: number) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  return (
    <Center mt={4}>
      <ButtonGroup size="sm" isAttached>
        <Button
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          leftIcon={<ChevronLeftIcon />}
        >
          Prev
        </Button>
        {paginationRange.map((page, index) => (
          <Button
            key={index}
            variant={currentPage === page ? 'solid' : 'outline'}
            onClick={() => {
                handlePageChange(page as number)
            }}
          >
            {page}
          </Button>
        ))}
        <Button
          isDisabled={currentPage === Math.ceil(totalCount / pageSize)}
          onClick={() => handlePageChange(currentPage + 1)}
          rightIcon={<ChevronRightIcon />}
        >
          Next
        </Button>
      </ButtonGroup>
      <Box ml={4}>
        <Text fontSize="sm" color="gray.500">
          Page {currentPage} of {Math.ceil(totalCount / pageSize)}
        </Text>
      </Box>
    </Center>
  );
};

export default Pagination;
