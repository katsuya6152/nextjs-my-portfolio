import Box from '@mui/material/Box'
import Image from 'next/image'
import imagePath from '../../public/stairs-of-the-sea-mono-3.jpg'

const LastImage = () => {
  return (
    <>
    <Box sx={{ width: '100%', height: '50%' }}>
      <Image src={imagePath} alt='Top Image' layout='responsive' objectFit="cover" />
    </Box>
    </>
  )
}

export default LastImage