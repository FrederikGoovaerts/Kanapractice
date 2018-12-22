import { createSelector } from 'reselect';

import { hiragana } from '../../resources/hiragana';
import { flatMap } from '../../util/ArrayUtils';
import { RootState } from '../reducers';

const getSelectedIds = (state: RootState) => state.hiragana.selected;

export const getSelectedAndDerivedHiragana = createSelector(getSelectedIds, selectedIds =>
  flatMap(
    flatMap(hiragana, g => g.characters.filter(c => selectedIds.includes(c.id))),
    c => (c.derived ? [c, ...c.derived] : [c]),
  ),
);
