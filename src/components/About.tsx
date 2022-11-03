import { NoEncryption } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Grid from '@mui/system/Unstable_Grid'
import Image from 'next/image'
import imagePath from '../../public/meImg.png'

const darkTheme = createTheme({ palette: { mode: 'dark' } })

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'center',
  width: '100%',
}))

const skills: Array<string> = [
  'HTML/CSS',
  'Sass',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Python',
  'ML/DL',
]

const About = (props: aboutProps) => {
  return (
    <>
      <Box id={props.id} sx={{ width: 1 / 2, mt: 8, display: { xs: 'none', lg: 'flex' } }}>
        <ThemeProvider theme={darkTheme}>
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              padding: 4,
              boxShadow: '10px 10px 25px 15px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Stack sx={{ alignItems: 'center' }}>
              <h1>ABOUT</h1>
              <Stack
                direction={'row'}
                spacing={12}
                sx={{ alignItems: 'center', justifyContent: 'center' }}
              >
                <Box sx={{ display: 'block', width: '25%' }}>
                  <Image src={imagePath} alt='My Image' />
                </Box>
                <Stack>
                  <Stack>
                    <p>出身：日本/宮崎県</p>
                    <p>大学：宮崎大学大学院　工学研究科　工学専攻</p>
                    <p>趣味：ダーツ</p>
                    <p>好きなもの：野球・ダーツ・コーラ</p>
                    <p>苦手なもの：高い場所・狭い場所・片付け</p>
                  </Stack>
                  <p>スキル：</p>
                  <Grid container spacing={1} columns={4}>
                    {skills.map((skill, index) => (
                      <Grid xs={1} key={index}>
                        <Item>{skill}</Item>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </ThemeProvider>
      </Box>
      <Box id={props.id} sx={{ width: 6 / 7, mt: 8, display: { xs: 'block', lg: 'none' } }}>
        <ThemeProvider theme={darkTheme}>
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              padding: 4,
              boxShadow: '10px 10px 25px 15px rgba(0, 0, 0, 0.5)',
            }}
          >
            <Stack sx={{ alignItems: 'center' }}>
              <h1>ABOUT</h1>
              <Stack spacing={6} sx={{ alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ display: 'block', width: '25%' }}>
                  <Image src={imagePath} alt='My Image' />
                </Box>
                <Stack>
                  <Stack>
                    <p>出身：日本/宮崎県</p>
                    <p>大学：宮崎大学大学院　工学研究科　工学専攻</p>
                    <p>趣味：ダーツ</p>
                    <p>好きなもの：野球・コーラ</p>
                    <p>苦手なもの：高い場所・狭い場所・片付け</p>
                  </Stack>
                  <p>スキル：</p>
                  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}>
                    {skills.map((skill, index) => (
                      <Grid xs={1} sm={4} key={index}>
                        <Item>{skill}</Item>
                      </Grid>
                    ))}
                  </Grid>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </ThemeProvider>
      </Box>
    </>
  )
}

export default About

type aboutProps = {
  id: string
}
