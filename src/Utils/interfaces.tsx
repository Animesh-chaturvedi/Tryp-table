export interface Booking {
    timestamp: string;
    purchaseid: string;
    mail: string;
    name: string;
    source: string;
    status: string;
    select: string;
  };
export interface DataTableProps {
  headers: string[];
  caption?: string;
  rows: Booking[];
  sortable ?: boolean;
  pagination?: boolean;
}