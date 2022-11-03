import Box from '@mui/material/Box'
import Image from 'next/image'
import imagePath from '../../../public/stairs-of-the-sea-color3.jpg'
import styles from './LastImage.module.scss'

const LastImage = () => {
  return (
    <>
      <a className={`${styles.image_box} ${styles.hover_1}`} href=''>
        <Box className={styles.img_wrap} sx={{ width: '100%', height: '50%' }}>
          <Image src={imagePath} alt='Top Image' layout='responsive' objectFit='cover' />
        </Box>
      </a>
    </>
  )
}

export default LastImage
