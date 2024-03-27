import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import axios from 'axios';
import { Chart, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { chakra, Box, Text } from '@chakra-ui/react';

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population');
        const data = result.data.data;

        const labels = data.map(item => item.Year);
        const nations = Array.from(new Set(data.map(item => item.Nation)));
        const datasets = nations.map(nation => {
          const populationValues = data
            .filter(item => item.Nation === nation)
            .map(item => ({ x: item.Year, y: item.Population }));
          const randomColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
          return {
            label: nation,
            data: populationValues,
            backgroundColor: randomColor,
            borderColor: randomColor,
            pointRadius: 5,
            pointHoverRadius: 8,
          };
        });

        setPopulationData({
          labels: labels,
          datasets: datasets,
        });
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      bg="#191919" // Set background color of the card
      color="white"
      p="4"
      borderRadius="md"
      boxShadow="lg"
      mt="40px"
      w="90%" // Set width to fill available space
      h="46vh" // Set height to fill available space
      mb="18px"
      ml={{ base: '0', md: '0px'}} // Move the card to the right to avoid overlap with the sidebar
    >
      <Text fontSize="xl" mb="4">Population Graph</Text>
      <div className="graph-container">
        <Scatter
          data={populationData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'top',
              },
            },
            scales: {
              x: {
                type: 'linear',
                title: {
                  display: true,
                  text: 'Year',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Population',
                },
              },
            },
          }}
        />
      </div>
    </Box>
  );
};

export default PopulationGraph;
