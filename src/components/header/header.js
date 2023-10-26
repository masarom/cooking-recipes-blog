import * as React from 'react';
import "@fontsource/rancho";
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, IconButton } from "gatsby-theme-material-ui";
//import { Link } from "gatsby"
import { useStaticQuery, graphql } from 'gatsby';

// menu items
const navItems = ['Inicio', 'Recetas', 'Quiénes somos','Contacto'];
const navLinks = ['/', '/recetas', '/quienes-somos', '/contacto'];

const Header = (props) => {
  //GraphQL data
  const data = useStaticQuery(graphql`
  query {
  site {
    siteMetadata {
      title
    }
  }
}
`)
  // mobile version state
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // mobile version display
  const drawerWidth = 240;
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container = window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}} >
      <Typography variant="h4" sx={{ color: '#fff', fontFamily: 'Rancho', backgroundColor: '#c62f38' }}>
        {data.site.siteMetadata.title}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', color:'#c62f38' }} to={navLinks[i]} >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <React.Fragment>
        <AppBar sx={{ backgroundColor:'#fff', position: 'static'}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' }, color: '#c62f38' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, fontFamily: 'Rancho', color: '#c62f38', fontSize:'2rem' }}>
              {data.site.siteMetadata.title}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item, i) => (
                <Button key={item} sx={{ color: '#c62f38', fontWeight:'700' }} to={navLinks[i]}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </React.Fragment>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default Header;