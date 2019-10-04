import './AlternativeCharacterPopover.scss';

import { Button, Popover } from '@material-ui/core';
import * as React from 'react';
import { BaseCharacter } from '../../types';
import { CharacterCardContents } from './CharacterCardContents';

interface Props {
  derived: BaseCharacter[];
}

interface State {
  anchor?: HTMLElement;
}

export class AlternativeCharacterPopover extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
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
          <div className="alternativeCharacterPopover-popover">
            {this.props.derived.map(char => (
              <div className="alternativeCharacterPopover-contents" key={char.id}>
                <CharacterCardContents character={char} />
              </div>
            ))}
          </div>
        </Popover>
      </div>
    );
  }
}
