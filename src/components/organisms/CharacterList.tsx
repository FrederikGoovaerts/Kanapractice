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

export const CharacterList = (props: Props) => (
  <div className="characterList-container">
    <div className="characterList-innerContainer">
      <Grid container direction="column" spacing={16}>
        {props.characters.map((group: CharacterGroup) => (
          <Grid container item direction="row" justify="center" spacing={16} key={group.name}>
            {group.characters.map((character: Character) => (
              <Grid item key={character.id}>
                <CharacterCard
                  key={character.roumaji}
                  character={character}
                  onSelect={props.onSelect}
                  selected={props.selected.includes(character.id)}
                />
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </div>
  </div>
);
