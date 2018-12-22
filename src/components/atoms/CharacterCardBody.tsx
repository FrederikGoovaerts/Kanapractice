import { Checkbox } from '@material-ui/core';
import * as React from 'react';

import { Character } from '../../types';
import { CharacterCardContents } from './CharacterCardContents';

interface Props {
  character: Character;
  select: (param: any) => void;
  selected: boolean;
}

export const CharacterCardBody = ({ selected, select, character }: Props) => (
  <div onClick={select}>
    <Checkbox value={character.id} checked={selected} />
    <CharacterCardContents character={character} />
  </div>
);
