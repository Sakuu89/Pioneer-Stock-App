import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Text, SimpleGrid, Button, Flex, Icon } from '@chakra-ui/react';
import { FaInfoCircle } from 'react-icons/fa';

const CryptoPrices = () => {
  const [prices, setPrices] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
        setPrices(response.data.bpi);
      } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <Box p="4" borderRadius="md" boxShadow="lg" zIndex="1" position="relative" ml={{ base: '0', md: '250px' }}>

      {prices && (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="4">
          {Object.entries(prices).map(([currency, data]) => (
            <Box key={currency} bg="#191919" p="4" borderRadius="md">
              <Text fontSize="lg" mb="2">{currency}</Text>
              <Text fontSize="2xl">{data.rate}</Text>
              <Text fontSize="sm" mt="2">{data.description}</Text>
              <Flex align="center" justify="space-between" mt="4">
                <Button bgColor="#226723" color="white" size="sm">Trade</Button>
                <Icon as={FaInfoCircle} boxSize={5} color="gray.400" />
              </Flex>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default CryptoPrices;
