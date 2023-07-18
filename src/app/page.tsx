'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container } from '@chakra-ui/react';
import DataTable from '../components/DataTable';

const headers = [
  'timestamp',
  'purchase Id',
  'mail',
  'name',
  'source',
  'status',
  'select',
];

type Booking = {
  timestamp: string;
  purchaseid: string;
  mail: string;
  name: string;
  source: string;
  status: string;
  select: string;
};


const rows: Booking[] = [
  {
    timestamp: '2023-07-01T12:00:00Z',
    purchaseid: '123',
    mail: 'example1@mail.com',
    name: 'John Doe',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-02T14:30:00Z',
    purchaseid: '456',
    mail: 'example2@mail.com',
    name: 'Jane Smith',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-03T09:15:00Z',
    purchaseid: '789',
    mail: 'example3@mail.com',
    name: 'Alice Johnson',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-04T16:45:00Z',
    purchaseid: '987',
    mail: 'example4@mail.com',
    name: 'Bob Williams',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-05T10:30:00Z',
    purchaseid: '654',
    mail: 'example5@mail.com',
    name: 'Mike Johnson',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-06T13:20:00Z',
    purchaseid: '321',
    mail: 'example6@mail.com',
    name: 'Sarah Brown',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-07T11:10:00Z',
    purchaseid: '111',
    mail: 'example7@mail.com',
    name: 'David Wilson',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-08T15:40:00Z',
    purchaseid: '222',
    mail: 'example8@mail.com',
    name: 'Emily Davis',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-09T10:50:00Z',
    purchaseid: '333',
    mail: 'example9@mail.com',
    name: 'Olivia Taylor',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-10T14:00:00Z',
    purchaseid: '444',
    mail: 'example10@mail.com',
    name: 'Jacob Moore',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-11T09:45:00Z',
    purchaseid: '555',
    mail: 'example11@mail.com',
    name: 'Liam Anderson',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-12T13:15:00Z',
    purchaseid: '666',
    mail: 'example12@mail.com',
    name: 'Ava Garcia',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-13T11:30:00Z',
    purchaseid: '777',
    mail: 'example13@mail.com',
    name: 'Sophia Lee',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-14T16:00:00Z',
    purchaseid: '888',
    mail: 'example14@mail.com',
    name: 'Mia Wilson',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-15T12:45:00Z',
    purchaseid: '999',
    mail: 'example15@mail.com',
    name: 'Noah Brown',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-16T14:50:00Z',
    purchaseid: '1010',
    mail: 'example16@mail.com',
    name: 'James Davis',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-17T13:25:00Z',
    purchaseid: '1112',
    mail: 'example17@mail.com',
    name: 'Charlotte Moore',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-18T11:55:00Z',
    purchaseid: '1314',
    mail: 'example18@mail.com',
    name: 'Elijah Taylor',
    source: 'App',
    status: 'Pending',
    select: '',
  },
  {
    timestamp: '2023-07-19T15:35:00Z',
    purchaseid: '1516',
    mail: 'example19@mail.com',
    name: 'Scarlett Anderson',
    source: 'Website',
    status: 'Completed',
    select: '',
  },
  {
    timestamp: '2023-07-20T12:15:00Z',
    purchaseid: '1718',
    mail: 'example20@mail.com',
    name: 'Henry Garcia',
    source: 'App',
    status: 'Pending',
    select: '',
  },
];



const Home: React.FC = () => {
  return (
    <Container maxW="container.lg" mt={4}>
      <Box boxShadow="base" p={4}>
        <DataTable headers={headers} caption="Bookings" rows={rows} sortable  />
      </Box>
    </Container>
  );
};

export default Home;