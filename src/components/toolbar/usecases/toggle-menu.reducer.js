import { createAndMergeSliceReducer } from '@dealersocket/react-common';

const initialState = {
  status: false
}
const sliceName = 'TOGGLE_';

export const reducer = createAndMergeSliceReducer(sliceName, initialState);