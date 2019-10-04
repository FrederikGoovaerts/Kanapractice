import { combineReducers } from 'redux';
import { hiraganaIds } from '../../resources/hiragana';
import { hiraganaActions } from '../actions';
import { createReducer } from './base';

export interface HiraganaState {
  selected: string[];
}

const hiraganaReducers = combineReducers<HiraganaState>({
  selected: createReducer(hiraganaIds, hiraganaActions.names.setSelected),
});

export default hiraganaReducers;
