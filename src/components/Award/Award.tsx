import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles'
import Link from 'next/link'

import styles from './Award.module.scss'

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'left',
}))

const Award = (props: awardProps) => {
  const darkTheme = createTheme({ palette: { mode: 'dark' } })
  return (
    <>
      <Box id={props.id} sx={{ width: '100%' }}>
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
              <h1>Achievements</h1>
              <Stack
                direction={'row'}
                spacing={12}
                sx={{ alignItems: 'center', justifyContent: 'center' }}
              >
                <Stack spacing={6}>
                  <Link href={'https://signate.jp/competitions/449'} passHref>
                    <a target='_blank' className={styles.link}>
                      <span>SIGNATE Student Cup 2021春【予測部門】(1位)</span>
                    </a>
                  </Link>
                  <Link
                    href={'https://www.kaggle.com/competitions/ai-medical-contest-2022/overview'}
                    passHref
                  >
                    <a target='_blank' className={styles.link}>
                      <span>全国医療AIコンテスト2022 (9位)</span>
                    </a>
                  </Link>
                  <Link href={'https://www.jdla.org/cdle-youth-hackathon/'} passHref>
                    <a target='_blank' className={styles.link}>
                      <span>
                        リテールAIハッカソン2022 <br /> (1stステージ 21位　2ndステージ Goto賞)
                      </span>
                    </a>
                  </Link>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </ThemeProvider>
      </Box>
    </>
  )
}

export default Award

type awardProps = {
  id: string
}
