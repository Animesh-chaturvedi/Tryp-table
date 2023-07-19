'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container, Heading } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import { rows } from '../Utils/tableContent';

const headers = [
  'timestamp',
  'purchase Id',
  'mail',
  'name',
  'source',
  'status',
  'select',
];




const Home: React.FC = () => {
  return (
    <Container maxW="container.xl" mt={4}>
      <Heading as='h1' size='2xl' my="4">Tyrp Table</Heading>
      <Box boxShadow="base" p={4}>
        <DataTable headers={headers} caption="Bookings" rows={rows} sortable  />    
      </Box>
    </Container>
  );
};

export default Home;