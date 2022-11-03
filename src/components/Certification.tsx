import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'

const Certification = () => {
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
              <h1>Certification</h1>
              <Stack
                direction={'row'}
                spacing={12}
                sx={{ alignItems: 'center', justifyContent: 'center' }}
              >
                <Stack>
                  <Stack>
                    <p>統計検定2級</p>
                    <p>基本情報技術者試験</p>
                    <p>JDLA Deep Learning for ENGINEER 2021#1(E資格)</p>
                    <p>Python3エンジニア認定データ分析試験</p>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </ThemeProvider>
      </Box>
    </>
  )
}

export default Certification
