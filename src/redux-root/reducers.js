import { combineReducers } from 'redux';

import { reducer as profileReducer } from '../shared/usecases/profile/profile.reducer';
import { reducer as toolBarReducer } from '../components/toolbar/usecases/toggle-menu.reducer';
import { reducer as playlistReducer } from '../components/dashboard/usecases/get-playlist.reducer';

export function rootReducers() {
  return combineReducers({
    profile: profileReducer,
    toggle:  toolBarReducer,
    playlist: playlistReducer
  });
}