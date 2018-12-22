import { Typography } from '@material-ui/core';
import * as React from 'react';

import { Character } from '../../types';

interface Props {
  character: Character;
}

// TODO: Use this later
// const playSound = (character: Character) => () => {
//   if (character.sound) {
//     character.sound.play();
//   }
// };

export const CharacterCardContents = ({ character }: Props) => (
  <div className="characterCard-contents">
    <Typography variant="h2">{character.kanji}</Typography>
    <Typography variant="h5">/{character.roumaji}/</Typography>
  </div>
);
