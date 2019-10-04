import './CharacterList.scss';

import { Grid } from '@material-ui/core';
import * as React from 'react';

import { Character, CharacterGroup } from '../../types';
import { CharacterCard } from '../atoms/CharacterCard';

interface Props {
  characters: CharacterGroup[];
  onSelect: (param: any) => void;
  selected: string[];
}

export class CharacterList extends React.Component<Props> {
  renderCharacter(character: Character) {
    return (
      <Grid item key={character.id}>
        <CharacterCard
          key={character.roumaji}
          character={character}
          onSelect={this.props.onSelect}
          selected={this.props.selected.includes(character.id)}
        />
      </Grid>
    );
  }

  renderGroup(group: CharacterGroup) {
    const cardList = group.characters.map((character: Character) => this.renderCharacter(character));
    return (
      <Grid container item direction="row" justify="space-between" spacing={16} key={group.name}>
        {cardList}
      </Grid>
    );
  }

  render() {
    return (
      <div className="characterList-container">
        <div className="characterList-innerContainer">
          <Grid container direction="column" spacing={16}>
            {this.props.characters.map((group: CharacterGroup) => this.renderGroup(group))}
          </Grid>
        </div>
      </div>
    );
  }
}
