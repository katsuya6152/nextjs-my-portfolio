import { Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import About from '@/components/About'
import Award from '@/components/Award'
import Header from '@/components/Header'
import History from '@/components/History'
import LastImage from '@/components/LastImage'
import styles from '@/styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Katsuya Suzuki </title>
        <meta name='description' content='Katsuya Suzuki Introduction Page' />
        <meta name='author' content='Katsuya Suzuki' />
        <meta name='keywords' content='Engineer,エンジニア,フロントエンド,ポートフォリオ' />
      </Head>
      <Header />
      <main>
        <Stack direction='column' justifyContent='center' alignItems='center' spacing={16}>
          <About />
          <Stack
            direction='row'
            spacing={8}
            sx={{ width: 1 / 2, display: { xs: 'none', lg: 'flex' } }}
          >
            <History />
            <Award />
          </Stack>
          <Stack
            spacing={8}
            sx={{ width: 6 / 7, display: { xs: 'flex', lg: 'none' } }}
          >
            <History />
            <Award />
          </Stack>
          <LastImage />
        </Stack>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
