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

const dummyCard = (key: string) => (
  <Grid item key={key}>
    <div className="characterCard-card" />
  </Grid>
);

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
    let dummyCounter = 0;
    const cardList = group.characters.map((character: Character) => this.renderCharacter(character));

    // When life gives you lemons ¯\_(ツ)_/¯
    if (cardList.length < 5) {
      cardList.splice(1, 0, dummyCard(String(dummyCounter++)));
    }
    while (cardList.length < 5) {
      cardList.splice(-1, 0, dummyCard(String(dummyCounter++)));
    }

    return (
      <Grid container item direction="row" justify="center" spacing={16} key={group.name}>
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
