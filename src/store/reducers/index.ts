import { combineReducers } from 'redux';
import application, { ApplicationState } from './application.reducers';
import hiragana, { HiraganaState } from './hiragana.reducers';

export interface RootState {
  application: ApplicationState;
  hiragana: HiraganaState;
}

const rootReducer = combineReducers<RootState>({
  application,
  hiragana,
});

export default rootReducer;
