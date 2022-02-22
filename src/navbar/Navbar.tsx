import React from 'react'
import {Box , Button, Center , HStack, Image, Stack, useColorMode} from '@chakra-ui/react';
import lightpng from '../assets/images/lightpng.png'
import darkpng from '../assets/images/darkpng.png'
import {TiWeatherCloudy} from 'react-icons/ti';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const isDark = colorMode === "dark";
  return (
      <>
         <Stack  pos="relative" mx="6rem" direction="row" justify="space-between"  spacing={6} my="1rem" >
         <Image src={darkpng} boxSize="4rem" onClick={toggleColorMode}/>
         <HStack pr="42rem" spacing="4rem">

        <Button variant="ghost"> <TiWeatherCloudy size="2rem"/></Button>
        <Button variant="ghost"> <TiWeatherCloudy size="2rem"/></Button>
        <Button variant="ghost"> <TiWeatherCloudy size="2rem"/></Button>
        <Button variant="ghost"> <TiWeatherCloudy size="2rem"/></Button>
         </HStack>
         </Stack>
        {/* <HStack    mx="6rem" bg="green">
        <Image src={darkpng} boxSize="3rem" />
            
        </HStack> */}
         </>
  )
}

export default Navbar;