import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {Currency} from "./components/Currency";
import { CurrencyStack } from "./components/CurrencyStack";

export const App = () => (
  <ChakraProvider theme={theme} >
    <Box className={"animate__animated animate__fadeIn"} >
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack>
          <CurrencyStack />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
