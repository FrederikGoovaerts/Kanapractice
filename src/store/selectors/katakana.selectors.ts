import { createSelector } from 'reselect';

import { katakana } from '../../resources/katakana';
import { flatMap } from '../../util/ArrayUtils';
import { RootState } from '../reducers';

const getSelectedIds = (state: RootState) => state.katakana.selected;

export const getSelectedAndDerivedKatakana = createSelector(getSelectedIds, selectedIds =>
  flatMap(
    flatMap(katakana, g => g.characters.filter(c => selectedIds.includes(c.id))),
    c => (c.derived ? [c, ...c.derived] : [c]),
  ),
);
