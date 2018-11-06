import { createAction } from 'redux-actions';

import { reducer } from './toggle-menu.reducer';

const prefix = reducer.sliceName;
const TOGGLE = `${prefix}TOOLBAR`;
export const onToggle = createAction(TOGGLE);

const reducerHandlers = {
  [TOGGLE]: (state) => {
    return {
      status: !state.status
    };
  }
}
reducer.addHandlers(reducerHandlers);

export const testPort = {
  TOGGLE,
  reducerHandlers
}