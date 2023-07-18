'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container } from '@chakra-ui/react';
import DataTable from '../components/DataTable';

const headers = [
  'Timestamp',
  'Purchase Id',
  'Mail',
  'Name',
  'Source',
  'Status',
  'Select',
];

const rows = [
  ['2023-07-01', '123', 'example1@mail.com', 'John Doe', 'Website', 'Completed', ''],
  ['2023-07-02', '456', 'example2@mail.com', 'Jane Smith', 'App', 'Pending', ''],
  ['2023-07-03', '789', 'example3@mail.com', 'Alice Johnson', 'Website', 'Completed', ''],
  ['2023-07-04', '987', 'example4@mail.com', 'Bob Williams', 'App', 'Pending', ''],
  ['2023-07-05', '654', 'example5@mail.com', 'Mike Johnson', 'Website', 'Completed', ''],
  ['2023-07-06', '321', 'example6@mail.com', 'Sarah Brown', 'App', 'Pending', ''],
  ['2023-07-07', '111', 'example7@mail.com', 'David Wilson', 'Website', 'Completed', ''],
  ['2023-07-08', '222', 'example8@mail.com', 'Emily Davis', 'App', 'Pending', ''],
  ['2023-07-09', '333', 'example9@mail.com', 'Olivia Taylor', 'Website', 'Completed', ''],
  ['2023-07-10', '444', 'example10@mail.com', 'Jacob Moore', 'App', 'Pending', ''],
  ['2023-07-11', '555', 'example11@mail.com', 'Liam Anderson', 'Website', 'Completed', ''],
  ['2023-07-12', '666', 'example12@mail.com', 'Ava Garcia', 'App', 'Pending', ''],
  ['2023-07-13', '777', 'example13@mail.com', 'Sophia Lee', 'Website', 'Completed', ''],
  ['2023-07-14', '888', 'example14@mail.com', 'Mia Wilson', 'App', 'Pending', ''],
  ['2023-07-15', '999', 'example15@mail.com', 'Noah Brown', 'Website', 'Completed', ''],
  ['2023-07-16', '1010', 'example16@mail.com', 'James Davis', 'App', 'Pending', ''],
  ['2023-07-17', '1112', 'example17@mail.com', 'Charlotte Moore', 'Website', 'Completed', ''],
  ['2023-07-18', '1314', 'example18@mail.com', 'Elijah Taylor', 'App', 'Pending', ''],
  ['2023-07-19', '1516', 'example19@mail.com', 'Scarlett Anderson', 'Website', 'Completed', ''],
  ['2023-07-20', '1718', 'example20@mail.com', 'Henry Garcia', 'App', 'Pending', ''],
];


const Home: React.FC = () => {
  return (
    <Container maxW="container.lg" mt={16}>
      <Box boxShadow="base" p={4}>
        <DataTable headers={headers} caption="Bookings" rows={rows} />
      </Box>
    </Container>
  );
};

export default Home;