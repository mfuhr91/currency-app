import {extendTheme, ThemeConfig} from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
}

// 3. extend the theme
export const CustomTheme = extendTheme({ config })
