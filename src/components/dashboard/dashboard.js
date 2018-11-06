import React, { Component } from 'react';
import injectSheet from 'react-jss';

import Fetching from '../../shared/components/fetching/Fetching';

const style = {
  playlistContainer: {
    display: 'flex',
    overflow: 'scroll'
  },
  playlist: {
    minWidth: '180px',
    padding: '15px'
  },
  playlistImage: {
    width: '100%'
  },
  playlistTitle: {
    fontWeight: 'bold'
  }
}

class Dashboard extends Component {
  componentDidMount() {
    this.props.getPlaylist();
  }

  render() {
    const { data:dataprof, loading:loadingprof, error:errorprof } = this.props.profile;
    const { data:dataplay, loading:loadingplay, error:errorplay } = this.props.playlist;
    const { classes } = this.props;

    console.log(dataplay)
    return (!dataprof || loadingprof || errorprof) ? (
      <Fetching error={errorprof} />
    ):
    (
      <div>
        <h1>Welcome {dataprof.display_name}</h1>
        {
          (!dataplay || loadingplay || errorplay) ? (
            <Fetching error={errorplay} message='Fetching Playlists ...' />
          ):
          (
            <div>
              <h2>Your Playlists</h2>
              <div className={classes.playlistContainer}>
              {
                dataplay.map ((playlist, i) => {
                  return (
                    <div key={i} className={classes.playlist}>
                      <img 
                        src={playlist.images[playlist.images.length - 1].url}
                        alt={playlist.name}
                        className={classes.playlistImage}
                      />
                      <p className={classes.playlistTitle}>{playlist.name}</p>
                    </div>
                  );
                })
              }
              </div>
            </div>
          )
        }
      </div>
    )
  }
}

export default injectSheet(style)(Dashboard)