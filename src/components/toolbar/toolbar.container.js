import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ToolBar from './toolbar';
import { getProfile } from '../../shared/usecases/profile/get-profile.usecase';
import { onToggle } from './usecases/toggle-menu.usecase';

function mapStateToProps(state) {
  return {
    profile: state.profile,
    toggle: state.toggle.status
  }
}

const mapDispatchToProps = {
  getProfile,
  onToggle
}

export const ToolBarContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));