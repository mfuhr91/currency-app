import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import {Currency} from "./components/Currency";
import { CurrencyStack } from "./components/CurrencyStack";

export const App = () => (
  <ChakraProvider theme={theme} >
    <Box >
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack>
          <CurrencyStack />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
