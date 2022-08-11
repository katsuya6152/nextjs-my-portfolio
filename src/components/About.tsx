import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const darkTheme = createTheme({ palette: { mode: 'dark' } })

const About = () => {
  return (
    <Box
    sx={{
        width: 4/5,
    }}
    >
    <ThemeProvider theme={darkTheme}>
        <Paper elevation={24}>
            <h1>
                About
            </h1>
        </Paper>
    </ThemeProvider>
    </Box>
  )
}

export default About
