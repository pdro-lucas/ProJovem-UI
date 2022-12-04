import Link from 'next/link';

import { useState } from 'react';

import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { AppleLogo, List } from 'phosphor-react';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="fixed" component="nav">
        <Toolbar disableGutters>
          <Container maxWidth="xl">
            <Link
              href="/home"
              style={{
                textDecoration: 'none',
                color: '#FFFFFF',
              }}
            >
              <Box
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <AppleLogo size={24} />
                <Typography variant="h6">Logo</Typography>
              </Box>
            </Link>
            <IconButton
              color="inherit"
              aria-label="open drawer menu"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: 'none' },
              }}
            >
              <List size={32} />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
      <MobileNavbar open={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
    </>
  );
};

export default Navbar;
