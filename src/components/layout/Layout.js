import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// Material components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
// Material icons
import MenuIcon from '@mui/icons-material/Menu';
import LyricsOutlinedIcon from '@mui/icons-material/LyricsOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SearchIcon from '@mui/icons-material/Search';
// Components
import Heading from './Heading';
// Constants
import { APP_NAME } from '../../utils/constants';

const drawerWidth = 240;

const menuItems = [
  {
    text: 'Lyrics',
    icon: <LyricsOutlinedIcon />,
    path: '/lyrics',
  },
  {
    text: 'Concerts',
    icon: <LibraryMusicOutlinedIcon />,
    path: '/concerts',
  },
];

function Layout({ children }) {
  const location = useLocation();
  const paths = location.pathname.split('/').splice(1);

  const isPathWelcome = paths[0] === '';

  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding onClick={() => navigate(path)}>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* App bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {APP_NAME}
          </Typography>
          <Paper
            variant="outlined"
            component="form"
            sx={{
              p: '0 4px',
              display: 'flex',
              alignItems: 'center',
              width: 200,
              opacity: '0.5',
              marginLeft: 'auto',
            }}
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <InputBase placeholder={`Search...`} />
          </Paper>
        </Toolbar>
      </AppBar>

      {/* Drawers */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        {/* Temporary drawer for mobile */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        {/* Permenant drawer for desktop */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: '#f9f9f9',
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        {/* Heading */}
        <Container>
          {!isPathWelcome && <Heading paths={paths} />}
          {children}
        </Container>
      </Box>
    </Box>
  );
}

export default Layout;
