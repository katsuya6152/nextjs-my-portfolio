import { Stack } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'

import About from '@/components/About'
import Header from '@/components/Header'
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

          <LastImage/>
        </Stack>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
