import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import Header from '../header/Header';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import AccountCircleIcon from '@material-ui/icons/AccountCircle'; // Import biểu tượng cho Profile
import Main from '../Main';
import { Link, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import TableChartIcon from '@material-ui/icons/TableChart'; // Thay thế biểu tượng cũ bằng TableChart


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <Route to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const MainDrawer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/datasensor" >
            <ListItemIcon>
              <BorderAllIcon />
            </ListItemIcon>
            <ListItemText primary="Data Sensor" />
          </ListItem>
          <ListItem button component={Link} to="/actionhistory" >
            <ListItemIcon>
              <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Action History" />
          </ListItem>
          <ListItem button component={Link} to="/profile" > {/* Thêm thẻ Profile */}
            <ListItemIcon>
              <AccountCircleIcon /> {/* Biểu tượng cho Profile */}
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Container className={classes.content}>
        <div className={classes.toolbar} />
        <Main />
      </Container>
    </div>
  );
}

export default MainDrawer;
