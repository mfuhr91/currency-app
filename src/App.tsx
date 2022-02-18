import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ColorModeScript } from '@chakra-ui/react'
import { CurrencyStack } from "./components/CurrencyStack";
import { CustomTheme } from "./styles/Theme";

export const App = () => (
  <ChakraProvider theme={CustomTheme} >
    <Box className={"animate__animated animate__fadeIn"} >
      <Grid minH="100vh" p={3}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ColorModeSwitcher justifySelf="flex-end"/>
        <VStack>
          <CurrencyStack />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
