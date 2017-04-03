import React from 'react';
import Songs from './Songs';


export default function (props) {
const DUMMY_GENRE_NAME = props.genreName;
const DUMMY_SONGS = props.songs;
const DUMMY_CURRENT_SONG = props.currentSong;
const DUMMY_IS_PLAYING = props.isPlaying;
const DUMMY_TOGGLE_ONE = props.toggleOne;
  return (
    <div>
      <h3>{ DUMMY_GENRE_NAME } Station</h3>
      <Songs
        songs={DUMMY_SONGS}
        currentSong={DUMMY_CURRENT_SONG}
        isPlaying={DUMMY_IS_PLAYING}
        toggleOne={DUMMY_TOGGLE_ONE}
      />
    </div>
  );
}
