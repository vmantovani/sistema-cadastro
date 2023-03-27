import { createTheme } from '@mui/material'
import { cyan, yellow } from '@mui/material/colors'

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500],
      contrastText: '#fff',
    },
    secondary: {
      main: cyan[400],
      dark: cyan[500],
      light: cyan[300],
      contrastText: '#fff',
    },
    background: {
      default: '#303134',
      paper: '#202124',
    }
  }
})