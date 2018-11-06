import { connect } from 'react-redux';

import Dashboard from './dashboard';
import { getPlaylist } from './usecases/get-playlist.usecase';

function mapStateToProps(state) {
  return {
    profile: state.profile,
    playlist: state.playlist
  }
}

const mapDispatchToProps = {
  getPlaylist
}

export const DashboardContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard);