import { combineReducers } from 'redux';
import { applicationActions } from '../actions';
import { createReducer } from './base';

export interface ApplicationState {
  initialized: boolean;
}

const applicationReducers = combineReducers<ApplicationState>({
  initialized: createReducer(false, applicationActions.names.setInitialized),
});

export default applicationReducers;
