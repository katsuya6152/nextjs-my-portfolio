import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Grid from '@mui/system/Unstable_Grid'

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'left',
}))

const History = () => {
  const darkTheme = createTheme({ palette: { mode: 'dark' } })
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <ThemeProvider theme={darkTheme}>
          <Paper
            elevation={12}
            sx={{
              height: '100%',
              borderRadius: 4,
              padding: 4,
              boxShadow: '10px 10px 25px 15px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Stack sx={{ alignItems: 'center' }}>
              <h1>HISTORY</h1>

            </Stack>
          </Paper>
        </ThemeProvider>
      </Box>
    </>
  )
}

export default History
