import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "./themes/theme";
import Navbar from "./navbar/Navbar";
import Home from "./layout/Home";

function WeatherApp() {
  return (
    <ChakraProvider theme={theme}>
      <Container minWidth={["570px", "767px", "992px", "1900px"]}>
        <Navbar />
        <Home />
      </Container>
    </ChakraProvider>
  );
}

export default WeatherApp;
