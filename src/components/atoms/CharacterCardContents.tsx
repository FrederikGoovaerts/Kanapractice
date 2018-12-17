import { Checkbox, Typography } from '@material-ui/core';
import * as React from 'react';

import { Character } from '../../types';

interface Props {
  character: Character;
  select: (param: any) => void;
  selected: boolean;
}

// TODO: Use this later
// const playSound = (character: Character) => () => {
//   if (character.sound) {
//     character.sound.play();
//   }
// };

export const CharacterCardContents = ({ selected, select, character }: Props) => (
  <div onClick={select}>
    <Checkbox value={character.id} checked={selected} />
    <div className="characterCard-contents">
      <Typography variant="h2">{character.kanji}</Typography>
      <Typography variant="h5">/{character.roumaji}/</Typography>
    </div>
  </div>
);
