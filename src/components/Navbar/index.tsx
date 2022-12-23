import Link from 'next/link';

import { ReactElement, useState } from 'react';

import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Box,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Link as MUILink,
} from '@mui/material';
import { AppleLogo, House, List as ListIcon } from 'phosphor-react';

interface IItems {
  label: string;
  link: string;
}
interface INavItems {
  id: number;
  label: string;
  link: string;
  icon: ReactElement;
  subPages?: IItems[];
}

// TODO: Atualizar o tema da aplicação e ver como o código abaixo pode ser melhorado
const Navbar = () => {
  const [navItemDropdownOpen, setNavItemDropdownOpen] = useState({});

  const navItems: INavItems[] = [
    {
      id: 1,
      label: 'Jovens',
      link: '/home',
      icon: <House size={32} />,
      subPages: [
        {
          label: 'Listar Todos',
          link: '/listar_todos',
        },
      ],
    },
    {
      id: 2,
      label: 'Empresas',
      link: '/empresas',
      icon: <House size={32} />,
      subPages: [
        {
          label: 'Listar Todos',
          link: '/listar_todos',
        },
        {
          label: 'Listar Todos',
          link: '/listar_todos',
        },
      ],
    },
    {
      id: 3,
      label: 'Teste',
      link: '/teste',
      icon: <House size={32} />,
    },
  ];

  function handleShowDropdown(id: number) {
    setNavItemDropdownOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <AppBar position="absolute" sx={{ top: 0, left: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <List sx={{ display: { xs: 'block', md: 'flex' } }}>
            {navItems.map((item, key) => (
              <Box component="div" key={key}>
                {item.subPages ? (
                  <>
                    <ListItemButton
                      onClick={() => handleShowDropdown(item.id)}
                      alignItems="center"
                      sx={{ height: '100%' }}
                    >
                      <ListItemText primary={item.label} />
                    </ListItemButton>
                    <Collapse
                      in={navItemDropdownOpen[item.id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List
                        component="div"
                        disablePadding
                        sx={{ position: { md: 'absolute' }, top: '64px' }}
                      >
                        {item.subPages.map((page, key) => (
                          <ListItemButton
                            onClick={() => handleShowDropdown(item.id)}
                            key={key}
                          >
                            <MUILink
                              component={Link}
                              href={page.link}
                              underline="none"
                              sx={{ color: 'black' }}
                            >
                              {page.label}
                            </MUILink>
                          </ListItemButton>
                        ))}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <ListItemButton alignItems="center" sx={{ height: '100%' }}>
                    <MUILink
                      component={Link}
                      href={item.link}
                      underline="none"
                      sx={{ color: 'white' }}
                    >
                      {item.label}
                    </MUILink>
                  </ListItemButton>
                )}
              </Box>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
