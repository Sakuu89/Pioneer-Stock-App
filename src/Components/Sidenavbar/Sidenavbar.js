import React from 'react';
import { useState } from 'react';
import { Box, Text, VStack, Link, Icon, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure, useBreakpointValue, Spacer, InputGroup, InputLeftElement, Input } from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { FaBars, FaTimes, FaSearch, FaBell, FaCog, FaUser, FaQuestionCircle, FaBuilding, FaChartPie, FaExchangeAlt, FaHistory, FaWallet } from 'react-icons/fa';
import CryptoPrices from '../CryptoPrices/CryptoPrices';
import PopulationGraph from '../PopulationGraph/PopulationGraph';
const ColoredText = chakra('span');

const Sidenavbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const displaySidebar = useBreakpointValue({ base: 'none', md: 'block' });
    const [activeLink, setActiveLink] = useState("Dashboard"); 

    return (
        <Box>
            {displaySidebar === 'block' && (
                <Box
                    pos="fixed"
                    left="0"
                    top="0"
                    h="100vh"
                    w="250px"
                    bg="#1a1e1c"
                    color="white"
                    p="4"
                    boxShadow="md"
                >
                    <VStack spacing="5" align="flex-start">
                        <Text fontSize="lg" fontWeight="bold">Carbon <ColoredText color="#226723">Cell</ColoredText></Text>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<FaSearch color="gray.300" />}
                            />
                            <Input type="text" placeholder="Search" />
                        </InputGroup>
                        <VStack spacing="5" align="flex-start">
                            <Link
                            onClick={() => setActiveLink("Dashboard")} // Set active link on click
                            color={activeLink === "Dashboard" ? "#226723" : "#ffffff"} // Set color based on active link
                            >
                                <Icon as={FaBars} mr="2" />
                                Dashboard
                            </Link>
                            <Link>
                                <Icon as={FaBuilding} mr="2" />
                                Organisation
                            </Link>
                            <Link to= '/cryptoprices' path ={<CryptoPrices/>}>
                                <Icon as={FaChartPie} mr="2" />
                                Assets
                            </Link>
                            <Link to ='/populationgraph' path = {<PopulationGraph/>}>
                                <Icon as={FaExchangeAlt} mr="2" />
                                Trade
                            </Link>
                            <Link>
                                <Icon as={FaHistory} mr="2" />
                                History
                            </Link>
                            <Link>
                                <Icon as={FaWallet} mr="2" />
                                Wallet
                            </Link>
                        </VStack>
                    </VStack>
                    <Spacer />
                    <Box marginTop="130">
                        <VStack spacing="5" align="flex-start">
                            <Link color = "#5f6261">
                                <Icon as={FaBell} mr="2" />
                                Notifications
                            </Link>
                            <Link  color = "#5f6261">
                                <Icon as={FaCog} mr="2" />
                                Settings
                            </Link>
                            <Link  color = "#5f6261">
                                <Icon as={FaQuestionCircle} mr="2" />
                                Support 
                            </Link>
                            <Box>
    <Box display="flex" alignItems="center">
        <Box display="inline-block" mr="2">
            <Box as={FaUser} fontSize="lg" />
        </Box>
        <Box display="inline-block">
            <Text>Brooklyn Simmons</Text>
            <Text fontSize="xs" color="gray.400">brooklyn.simmons@example.com</Text>
        </Box>
        <Box ml="auto">
            <Box as="span" fontSize="sm" color="gray.500">...</Box>
        </Box>
    </Box>
</Box>

                        </VStack>
                    </Box>
                </Box>
            )}
            {displaySidebar === 'none' && (
                <IconButton
                    pos="fixed"
                    left="4"
                    top="4"
                    display={{ base: 'block', md: 'none' }}
                    onClick={isOpen ? onClose : onOpen}
                    icon={isOpen ? <FaTimes /> : <FaBars />}
                    aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
                    variant="ghost"
                    size="lg"
                />
            )}
            <Drawer
                isOpen={isOpen && displaySidebar === 'none'}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent
                    pos="fixed"
                    left="0"
                    top="0"
                    h="100vh"
                    w="250px"
                    bg="#1a1e1c"
                    color="white"
                    p="4"
                    boxShadow="md"
                >
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Text fontSize="lg" fontWeight="bold">Carbon <ColoredText color="#226723">Cell</ColoredText></Text>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack spacing="5" align="flex-start">
                            <Link   onClick={() => setActiveLink("Dashboard")} 
                             color={activeLink === "Dashboard" ? "#226723" : "#ffffff"} 
                             >
                                <Icon as={FaBars} mr="2" />
                                Dashboard
                            </Link>
                            <Link>
                                <Icon as={FaBuilding} mr="2" />
                                Organisation
                            </Link>
                            <Link>
                                <Icon as={FaChartPie} mr="2" />
                                Assets
                            </Link>
                            <Link>
                                <Icon as={FaExchangeAlt} mr="2" />
                                Trade
                            </Link>
                            <Link>
                                <Icon as={FaHistory} mr="2" />
                                History
                            </Link>
                            <Link>
                                <Icon as={FaWallet} mr="2" />
                                Wallet
                            </Link>
                        </VStack>
                        <Box marginTop="160">
                            <VStack spacing="5" align="flex-start">
                                <Link  color = "#5f6261">
                                    <Icon as={FaBell} mr="2" />
                                    Notifications
                                </Link>
                                <Link  color = "#5f6261">
                                    <Icon as={FaCog} mr="2" />
                                    Settings
                                </Link>
                                <Link  color = "#5f6261">
                                    <Icon as={FaQuestionCircle} mr="2" />
                                    Support
                                </Link>
                                {/* <Box>
                                    <Box display="inline-block" mr="2">
                                        <Box as={FaUser} fontSize="lg" />
                                    </Box>
                                    <Box display="inline-block">
                                        <Text>Brooklyn Simmons</Text>
                                        <Box as="span" fontSize="sm">...</Box>
                                    </Box>
                                </Box> */}
                                <Box>
    <Box display="flex" alignItems="center">
        <Box display="inline-block" mr="2">
            <Box as={FaUser} fontSize="lg" />
        </Box>
        <Box display="inline-block">
            <Text>Brooklyn Simmons</Text>
            <Text fontSize="xs"  color = "#5f6261" >brooklyn.simmons@gmail.com</Text>
        </Box>
        <Box ml="auto">
            <Box as="span" fontSize="sm" color="gray.500">...</Box>
        </Box>
    </Box>
</Box>

                            </VStack>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
}

export default Sidenavbar;
