import { combineReducers } from 'redux';
import { baseHiraganaIds } from '../../resources/hiragana';
import { hiraganaActions } from '../actions';
import { createReducer } from './base';

export interface HiraganaState {
  selected: string[];
}

const hiraganaReducers = combineReducers<HiraganaState>({
  selected: createReducer(baseHiraganaIds, hiraganaActions.names.setSelected),
});

export default hiraganaReducers;
