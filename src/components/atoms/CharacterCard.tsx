import './CharacterCard.scss';

import { Card } from '@material-ui/core';
import * as React from 'react';

import { Character } from '../../types';
import { AlternativeCharacterPopover } from './AlternativeCharacterPopover';
import { CharacterCardBody } from './CharacterCardBody';

interface Props {
  character: Character;
  onSelect: (param: any) => void;
  selected: boolean;
}

export const CharacterCard = ({ character, onSelect, selected }: Props) => {
  const select = () => onSelect(character.id);
  return (
    <Card className="characterCard-card">
      <CharacterCardBody selected={selected} character={character} select={select} />
      {!!character.derived &&
        character.derived.length > 0 && <AlternativeCharacterPopover derived={character.derived} />}
    </Card>
  );
};
