import { ActionTypeMapping, ActionUnion, createAction } from './base';

export enum names {
  setSelected = 'HIRAGANA__SET_SELECTED',
}

export const actions = {
  setSelected: (p: string[]) => createAction(names.setSelected, p),
};

export type allTypes = ActionUnion<typeof actions>;
export type specificTypes = ActionTypeMapping<typeof actions>;
