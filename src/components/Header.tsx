import MenuIcon from '@mui/icons-material/Menu'
import MoodIcon from '@mui/icons-material/Mood'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Stack } from '@mui/system'
import { useState } from 'react'
import { Link as Scroll } from 'react-scroll'

const pages = ['About', 'Award', 'Certification', 'Contact']

const theme = createTheme({
  palette: {
    neutral: {
      main: '#212121',
      contrastText: '#fff',
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

// Update the AppBar's color prop options
declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    neutral: true
  }
}

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBar position='sticky' color='neutral'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {/* PC */}
            <MoodIcon sx={{ display: { xs: 'none', lg: 'flex' }, mr: 1 }} />
            <Typography
              variant='h6'
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', lg: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Katsuya Suzuki
            </Typography>
            <Stack
              direction='row'
              justifyContent='flex-end'
              sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}
            >
              {pages.map((page) => (
                <Button key={page} sx={{ my: 2, color: 'white', display: 'block' }}>
                  <Scroll to={`${page}`} smooth={true} duration={600} offset={-190}>
                    {page}
                  </Scroll>
                </Button>
              ))}
            </Stack>

            {/* SP */}
            <MoodIcon sx={{ display: { xs: 'flex', lg: 'none' }, mr: 1 }} />
            <Typography
              variant='h5'
              noWrap
              component='a'
              href=''
              sx={{
                mr: 2,
                display: { xs: 'flex', lg: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Katsuya Suzuki
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' }, justifyContent: 'flex-end' }}
            >
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', lg: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <nav>
                      <Scroll to={`${page}`} smooth={true} duration={600}>
                        {page}
                      </Scroll>
                    </nav>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  )
}
export default Header
