import Link from 'next/link';

import { AppBar, Container, Link as MUILink, Toolbar } from '@mui/material';
import { useState } from 'react';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar disableGutters>
        <Container maxWidth="xl">
          <Link href="/home" passHref>
            <MUILink
              variant="h6"
              component="button"
              underline="none"
              color="white"
            >
              Logo
            </MUILink>
          </Link>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
