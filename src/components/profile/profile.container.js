import { connect } from 'react-redux';

import Profile from './profile';
import { getProfile } from '../../shared/usecases/profile/get-profile.usecase';

function mapStateToProps(state) {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = {
  getProfile
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);