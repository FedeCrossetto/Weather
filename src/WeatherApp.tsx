import { Box, ChakraProvider, Container, useColorMode } from "@chakra-ui/react";
import theme from "./themes/theme";
import Navbar from "./navbar/Navbar";
import Home from "./layout/Home";
import { useEffect, useState } from "react";

function WeatherApp() {
  
  return (
    <ChakraProvider theme={theme}>  

      <Container minWidth={["570px", "767px", "992px", "1900px"]} >
        <Navbar />
        <Box h="90vh" bg="brand.background" my="1rem" mx="6rem" borderRadius="3xl">
        {/* <Home /> */}
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default WeatherApp;
