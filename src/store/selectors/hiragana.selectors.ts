import { createSelector } from 'reselect';

import { hiragana } from '../../resources/hiragana';
import { flatMap } from '../../util/ArrayUtils';
import { RootState } from '../reducers';

const getSelectedIds = (state: RootState) => state.hiragana.selected;

export const getSelectedHiragana = createSelector(getSelectedIds, selectedIds =>
  flatMap(hiragana, g => g.characters.filter(c => selectedIds.includes(c.id))),
);
