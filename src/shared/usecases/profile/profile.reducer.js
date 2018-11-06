import { createAndMergeSliceReducer } from '@dealersocket/react-common';

const sliceName = 'PROFILE_';
const initialState = {
  data: null,
  loading: false,
  error: false
};

export const reducer = createAndMergeSliceReducer(sliceName, initialState);