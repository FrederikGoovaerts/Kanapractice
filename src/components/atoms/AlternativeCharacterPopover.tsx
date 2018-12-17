import './AlternativeCharacterPopover.scss';

import { Button, Popover, Typography } from '@material-ui/core';
import * as React from 'react';

interface State {
  anchor?: HTMLElement;
}

export class AlternativeCharacterPopover extends React.Component<{}, State> {
  constructor() {
    super({});
    this.state = { anchor: undefined };
  }

  handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchor: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchor: undefined });
  };

  render() {
    return (
      <div className="alternativeCharacterPopover-container">
        <Button
          aria-owns={open ? 'simple-popper' : undefined}
          aria-haspopup="true"
          variant="text"
          size="small"
          onClick={this.handleOpen}
        >
          Alternatives
        </Button>
        <Popover
          id="simple-popper"
          onClose={this.handleClose}
          open={!!this.state.anchor}
          anchorEl={this.state.anchor}
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
        >
          <Typography>The content of the Popover.</Typography>
        </Popover>
      </div>
    );
  }
}
