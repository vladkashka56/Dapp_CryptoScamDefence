import React from 'react';
// import clsx from 'clsx';
import { Link } from 'react-router-dom';
import {
  AppBar,
  // Box,
  // Drawer,
  // IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  // List,
  // ListItem,
  // ListItemText,
  // Divider,
  Button,
  Grid,
} from '@material-ui/core';


// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles/*, useTheme*/ } from '@material-ui/core/styles';
import AccountButton from './AccountButton';
import SafeVaultMarkImage from '../../assets/img/SV New Logo GOLD3 NEW ROCKET2.png'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#e0e3bd',
    'background-color': '#001c30!important',
    padding: '10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: '"Amarante", cursive',
    fontSize: '30px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#e0e3bd',
    fontSize: '14px',
    margin: theme.spacing(1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#e0e3bd',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:1005px)');
  const classes = useStyles();
  // const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <AppBar position="relative" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Grid container justify="center" alignContent="center" alignItems="center">
              <Grid item xs={4}>
                <Link to="/" color="inherit" className={classes.brandLink}>
                  <img src={SafeVaultMarkImage} alt={`SafeVaultMark Logo`} style={{ width: "300px" }} />
                </Link>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" style={{ backgroundImage: "linear-gradient(180deg, #ad4022 0% , #e09900 100%)" }}>
                  <a href="https://safevaultcrypto.com" style={{ textDecoration: 'none', fontSize: "20px",fontFamily: "'Open Sans', sans-serif !important", color: "white" }}>
                    Learn More
                  </a>
                </Button>
              </Grid>
              <Grid item xs={2}>
                <AccountButton text="Connect" />
              </Grid>
            </Grid>

            {/* <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle} style={{marginLeft: "15%"}}>
              <Link to="/" color="inherit" className={classes.brandLink}>
                <img src={SafeVaultMarkImage} alt={`SafeVaultMark Logo`} style={{ width: "auto", position: "relative", height: "auto", maxWidth: "100%" }} />
              </Link>
            </Typography>
            <Box mr={5} style={{marginRight: "100px"}}>
              <Button variant="contained" style={{ backgroundImage: "linear-gradient(180deg, #ad4022 0% , #e09900 100%)" }}>
                <a href="https://safevaultcrypto.com" style={{ textDecoration: 'none', fontSize: "20px",fontFamily: "'Open Sans', sans-serif !important", color: "white" }}>
                  Learn More
                </a>
              </Button>
            </Box>
            <div style={{marginRight:"20%"}}>
              <AccountButton text="Connect" />
            </div> */}
          </>
        ) : (
          <Grid container justify="center" alignContent="center" alignItems="center" direction="column" >
            <Grid item xs={12}>
              <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                <Link to="/" color="inherit" className={classes.brandLink}>
                  <img src={SafeVaultMarkImage} alt={`SafeVaultMark Logo`} style={{ width: "100%" }} />
                </Link>
              </Typography>
            </Grid>
            <Grid container item xs={12} justify="center" alignItems="center" alignContent="center">
              <Grid container item xs={6} justify="center" alignItems="center" alignContent="center" style={{display: "flex"}}>
                  <Button variant="contained" style={{ backgroundImage: "linear-gradient(180deg, #ad4022 0% , #e09900 100%)" }}>
                    <a href="https://safevaultcrypto.com" style={{ textDecoration: 'none', fontSize: "20px",fontFamily: "'Open Sans', sans-serif !important", color: "white" }}>
                      Learn More
                    </a>
                  </Button>
              </Grid>
              <Grid item container xs={6} justify="center" alignItems="center" alignContent="center" style={{display: "flex"}}>
                <AccountButton text="Connect" />
              </Grid>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
