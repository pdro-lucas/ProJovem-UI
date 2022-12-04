import {
  Box,
  Typography,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Collapse,
} from '@mui/material';
import { CaretDown, CaretUp } from 'phosphor-react';
import { useState } from 'react';

interface MobileNavbarProps {
  open: boolean;
  handleDrawerToggle(): void;
  navItems: {
    id: number;
    label: string;
    icon: JSX.Element;
    items?: {
      label: string;
    };
  }[];
}

const drawerWidth = 240;

const MobileNavbar = ({
  open,
  handleDrawerToggle,
  navItems,
}: MobileNavbarProps) => {
  const [listOpen, setListOpen] = useState({});

  /**
   * Define se a nested list esta aberta ou fechada baseado no id.
   * Isso é necessário para evitar o compartilhamento do mesmo estado para
   * todas as nested list, previnindo com que todas elas sejam abertas ao mesmo tempo
   */
  const handleClick = (id: number) => {
    setListOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

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
