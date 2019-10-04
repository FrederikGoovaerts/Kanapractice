import './CharacterList.scss';

import * as React from 'react';

import { Character, CharacterGroup } from '../../types';
import { CharacterCard } from '../atoms/CharacterCard';

interface Props {
  characters: CharacterGroup[];
  onSelect: (param: any) => void;
  selected: string[];
}

export const CharacterList = (props: Props) => (
  <div className="characterList-outerContainer">
    <div className="characterList-innerContainer">
      {props.characters.map((group: CharacterGroup) => (
        <div className="characterList-group" key={group.name}>
          {group.characters.map((character: Character) => (
            <CharacterCard
              key={character.roumaji}
              character={character}
              onSelect={props.onSelect}
              selected={props.selected.includes(character.id)}
            />
          ))}
        </div>
      ))}
    </div>
  </div>
);
