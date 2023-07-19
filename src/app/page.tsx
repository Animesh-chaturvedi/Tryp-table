'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Box, Container } from '@chakra-ui/react';
import DataTable from '../components/DataTable';
import { rows } from '../../public/tableContent';

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
      <Box boxShadow="base" p={4}>
        <DataTable headers={headers} caption="Bookings" rows={rows} sortable  />    
      </Box>
    </Container>
  );
};

export default Home;