import './NavigationHeader.scss';

import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
  Toolbar,
  Typography,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Location } from 'history';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  location: Location<any>;
}

interface State {
  drawerOpen: boolean;
}

// TODO selected
const getBaseRoute = (location: Location<any>) => location.pathname.substring(1);

const LinkListItem = ({ title, to, icon }: { title: string; to: string; icon: React.ReactElement<any> }) => (
  <ListItem {...{ to }} component={Link} button>
    <ListItemIcon>{icon}</ListItemIcon>
    <Typography>{title}</Typography>
  </ListItem>
);

export class NavigationHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { drawerOpen: false };
  }

  openDrawer = () => this.setState({ drawerOpen: true });
  closeDrawer = () => this.setState({ drawerOpen: false });

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu" onClick={this.openDrawer}>
              <MenuIcon />
            </IconButton>
            <div className="navigationHeader-pageTitle">
              <Typography variant="h6" color="inherit">
                Kanapractice
              </Typography>
            </div>
            <IconButton color="inherit" aria-label="Menu" component={Link} {...{ to: '/about' }}>
              <InfoIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={this.closeDrawer}>
          <div tabIndex={0} role="button" onClick={this.closeDrawer}>
            <div>
              <List>
                <ListSubheader>{`Hiragana`}</ListSubheader>
                <LinkListItem title="Overview" key="overview" to="/hiragana" icon={<ViewModuleIcon />} />
                <LinkListItem
                  title="Flash cards"
                  key="flash-cards"
                  to="/hiragana/flash-cards"
                  icon={<ViewCarouselIcon />}
                />
              </List>
              <Divider />
              <List>
                <ListSubheader>{`Katakana`}</ListSubheader>
              </List>
              <Divider />
              <List>
                <ListSubheader>{`Numbers`}</ListSubheader>
              </List>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}
