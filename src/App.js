import logo from './logo.svg';
import './App.css';
import Sidenavbar from './Components/Sidenavbar/Sidenavbar';
import PopulationGraph from './Components/PopulationGraph/PopulationGraph';
import CryptoPrices from './Components/CryptoPrices/CryptoPrices';
import { Box, Button, Text, Flex} from '@chakra-ui/react';
import {chakra} from '@chakra-ui/react'


const ColoredText = chakra('span');



function App() {
  return (
   
    <div >
      <Sidenavbar/>
      <Box mt="40px" ml={{ base: '0', md: '300px' }}>
        <Text fontSize="3xl" mb="4" color ="white">Hello, <ColoredText color="#85b558">Brooklyn Simons</ColoredText>
        </Text>
       
        <Flex align="center">
        <Text fontSize="xl" mb="2" color="white">Welcome to  <ColoredText color="#226723"> Spot Trading !</ColoredText>
        </Text>
          <Button ml="60%" bg="#226723" color="white">Start Trading</Button>
        </Flex>
    
        <PopulationGraph />
      </Box>
      <Box color="white">
        <Text mt="40px" ml={{ base: '0', md: '300px' }}  fontSize="3xl" mb="4" color="white" > Assets </Text>
      <CryptoPrices/>
      </Box>
     
    </div>
 
  );
}

export default App;
