import { combineReducers } from 'redux';
import application, { ApplicationState } from './application.reducers';
import hiragana, { HiraganaState } from './hiragana.reducers';
import katakana, { KatakanaState } from './katakana.reducers';

export interface RootState {
  application: ApplicationState;
  hiragana: HiraganaState;
  katakana: KatakanaState;
}

const rootReducer = combineReducers<RootState>({
  application,
  hiragana,
  katakana,
});

export default rootReducer;
