import { useMemo } from 'react';

export const DOTS = '...';

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

interface PaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
}: PaginationProps): (number | string)[] => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    if (totalPageCount <= 1) {
      return [];
    }

    if (totalPageCount <= siblingCount * 2 + 1) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

    const items: (number | string)[] = [];

    if (shouldShowLeftDots) {
      items.push(1);
      if (leftSiblingIndex > 2 + 1) {
        items.push(DOTS);
      }
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      items.push(i);
    }

    if (shouldShowRightDots) {
      if (rightSiblingIndex < totalPageCount - 1) {
        items.push(DOTS);
      }
      items.push(totalPageCount);
    }

    return items;
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
