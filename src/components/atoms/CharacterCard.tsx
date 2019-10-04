import './CharacterCard.scss';

import { Card, Checkbox, Typography } from '@material-ui/core';
import * as React from 'react';

import { Character } from '../../types';

interface Props {
  character: Character;
  onSelect: (param: any) => void;
  selected: boolean;
}

const playSound = (character: Character) => () => {
  if (character.sound) {
    character.sound.play();
  }
};

export const CharacterCard = ({ character, onSelect, selected }: Props) => {
  const select = () => onSelect(character.id);
  return (
    <Card className="characterCard-card" onClick={select}>
      <Checkbox value={character.id} checked={selected} />
      <div className="characterCard-contents" onClick={playSound(character)}>
        <Typography variant="h2">{character.kanji}</Typography>
        <Typography variant="h5">/{character.roumaji}/</Typography>
      </div>
    </Card>
  );
};
