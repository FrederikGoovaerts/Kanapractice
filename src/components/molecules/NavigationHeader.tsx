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
  Tooltip,
  Typography,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MenuIcon from '@material-ui/icons/Menu';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { Location } from 'history';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/constants';

const overviewTooltip =
  'Contains an overview of all characters. Selected characters on this page will be present in the other practice pages.';

const flashCardTooltip = 'Presents a simple flash card view of all selected characters.';

const quickReadingTooltip =
  'A typing exercise to to recognize japanese characters. Shows the average time to type the roumaji version of a character.';

interface Props {
  location: Location<any>;
}

interface State {
  drawerOpen: boolean;
}

interface LinkListItemProps {
  title: string;
  to: string;
  icon: React.ReactElement<any>;
  tooltip?: string;
}

// TODO selected
const getBaseRoute = (location: Location<any>) => location.pathname.substring(1);

const LinkListItem = ({ title, to, icon, tooltip }: LinkListItemProps) => (
  <ListItem {...{ to }} component={Link} button>
    <ListItemIcon>{icon}</ListItemIcon>
    <Typography>{title}</Typography>
    {tooltip && (
      <Tooltip title={tooltip} placement="right">
        <ListItemIcon className="navigationHeader-drawerInfoIcon">
          <InfoIcon />
        </ListItemIcon>
      </Tooltip>
    )}
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
            <IconButton color="inherit" aria-label="Menu" component={Link} {...{ to: routes.about }}>
              <InfoIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onClose={this.closeDrawer}>
          <div tabIndex={0} role="button" onClick={this.closeDrawer}>
            <div>
              <List>
                <ListSubheader>{`Hiragana`}</ListSubheader>
                <LinkListItem
                  title="Overview"
                  key="overview"
                  to={routes.hiragana.path}
                  icon={<ViewModuleIcon />}
                  tooltip={overviewTooltip}
                />
                <LinkListItem
                  title="Flash cards"
                  key="flash-cards"
                  to={routes.hiragana.path + routes.hiragana.subpathFlashCards}
                  icon={<ViewCarouselIcon />}
                  tooltip={flashCardTooltip}
                />
                <LinkListItem
                  title="Quick Reading Practice"
                  key="quick-reading"
                  to={routes.hiragana.path + routes.hiragana.subpathQuickReading}
                  icon={<KeyboardIcon />}
                  tooltip={quickReadingTooltip}
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
