import { connect } from 'react-redux';
import { toggleSong } from '../action-creators/player';
import Station from '../components/Station';
import { convertSong } from '../utils'


//Will display a selected station. Stations.js will link to /stations/:genreName, which the route says will render Station component, passing to it the genreName as props.params.genreName. We then use the props.params.genreName here, passing in as ownProps. These props get passed to Station to display the genre and all songs within that genre.

const mapStateToProps = function (state, ownProps) {
  return {
    genreName: ownProps.params.genreName,
    songs: state.songs
      .filter(song => song.genre === ownProps.params.genreName)
      .map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggleOne: function (song, list) {
      dispatch(toggleSong(song, list));
    }
  };
};

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;
