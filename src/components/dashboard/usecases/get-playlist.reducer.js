import { createAndMergeSliceReducer } from '@dealersocket/react-common';

const initialState = {
  data: null,
  loading: null,
  error: null
}
const sliceName = 'PLAYLIST_';
export const reducer = createAndMergeSliceReducer(sliceName, initialState);