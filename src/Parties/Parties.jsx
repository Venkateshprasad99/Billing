import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Button,
    Spacer,
    Heading,
    Flex, TableCaption
} from '@chakra-ui/react'
import { ArrowBackIcon,AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useSelector } from 'react-redux';


function Parties() {



    return (
        <>
            <Box bg="white" p={5} mb={5} style={{ borderRadius: "10px" }}>
                <Flex alignItems='center' gap={2}  >
                    
                    <Heading as="h3" size="lg" color="gray.600">
                        Parties
                    </Heading>
                    <Spacer />
                    <Link to="parties_form">
                   
                    <Button colorScheme="blue" >
                     
                    <AddIcon w={4} h={4} pr={2} />
                    Create Member
                </Button>
                </Link>
                </Flex>
            </Box>
            < Box p={5} color="black" bg="white" style={{ borderRadius: "10px" }}>

                <TableContainer mt={8}>
                    <Table variant='striped' >
                    <TableCaption>  No Parties To Display</TableCaption>
                        <Thead bg="#f2f2f2">
                            <Tr>
                                <Th> #</Th>
                                <Th> Name</Th>
                                <Th> Mobile Number </Th>
                                <Th> Type  </Th>
                                <Th> Balance </Th>
                                <Th> Act  </Th>

                            </Tr>
                        </Thead>
                        <Tbody>

                        </Tbody>
                    </Table>

                </TableContainer>

            </Box>
        </>

    )
}

export default Parties;