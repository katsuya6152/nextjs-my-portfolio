import { Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import About from '@/components/About'
import Award from '@/components/Award/Award'
import Certification from '@/components/Certification'
import Header from '@/components/Header'
import LastImage from '@/components/Image/LastImage'
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
          <About id='About' />
          <Stack
            direction='row'
            spacing={8}
            sx={{ width: 1 / 2, display: { xs: 'none', lg: 'flex' } }}
          >
            <Award id='Award' />
            <Certification id='Certification' />
          </Stack>
          <Stack spacing={8} sx={{ width: 6 / 7, display: { xs: 'flex', lg: 'none' } }}>
            <Award id='Award' />
            <Certification id='Certification' />
          </Stack>
          <LastImage />
        </Stack>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
