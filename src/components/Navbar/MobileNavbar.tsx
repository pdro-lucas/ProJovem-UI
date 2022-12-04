import {
  Box,
  Typography,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Collapse,
} from '@mui/material';
import { CaretDown, CaretUp, House } from 'phosphor-react';
import { useState } from 'react';

interface MobileNavbarProps {
  open: boolean;
  handleDrawerToggle(): void;
}

// Drawer options
const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    label: 'Jovens',
    icon: <House size={32} />,
    items: {
      label: 'Listar Todos',
    },
  },
  {
    id: 2,
    label: 'Empresas',
    icon: <House size={32} />,
    items: {
      label: 'Listar Todos',
    },
  },
  {
    id: 3,
    label: 'Teste',
    icon: <House size={32} />,
  },
];

const MobileNavbar = ({ open, handleDrawerToggle }: MobileNavbarProps) => {
  const [listOpen, setListOpen] = useState({});

  const handleClick = (id: number) => {
    setListOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  // Create drawer elements
  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      {/* Drawer Logo */}
      <Typography variant="h6" sx={{ my: 2 }}>
        LOGO
      </Typography>
      <Divider />
      <List
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Geral
          </ListSubheader>
        }
      >
        {/* Nested Drawer Items */}
        {navItems.map((item) =>
          item.items ? (
            <Box component="div" key={item.id}>
              <ListItemButton onClick={() => handleClick(item.id)}>
                <ListItemText primary={item.label} />
                {listOpen[item.id] ? (
                  <CaretUp size={24} />
                ) : (
                  <CaretDown size={24} />
                )}
              </ListItemButton>
              <Collapse in={listOpen[item.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton>
                    <ListItemText primary={item.items.label} />
                  </ListItemButton>
                </List>
              </Collapse>
            </Box>
          ) : (
            <ListItemButton key={item.id}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
