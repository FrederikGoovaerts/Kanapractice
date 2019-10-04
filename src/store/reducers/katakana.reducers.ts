import { combineReducers } from 'redux';
import { baseKatakanaIds } from '../../resources/katakana';
import { katakanaActions } from '../actions';
import { createReducer } from './base';

export interface KatakanaState {
  selected: string[];
}

const katakanaReducers = combineReducers<KatakanaState>({
  selected: createReducer(baseKatakanaIds, katakanaActions.names.setSelected),
});

export default katakanaReducers;
