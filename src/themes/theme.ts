import { extendTheme, theme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/poppins/400.css'
export default extendTheme({
  // config:{
  //   initialColorMode:"dark"
  // },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  colors: {
    brand: {
      primari:"red",
      secondary: "#636CBB",
      tertiary: "#9b9c9e",
      background:"#f4f9ff",
      dark:"#1a202c",
      light:"#ffffff"
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "light",
      },
      size: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        santander: {
          bg: "red",
          color: "grey",
        },
      },
    },
  },
});
