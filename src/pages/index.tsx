import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Header from '@/components/Header'
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
      <main></main>

      <footer></footer>
    </div>
  )
}

export default Home
