import "./ContentPlayer.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
} from "video-react";
import React, { Component } from "react";
import PrevNextButton from "./sub-components/PrevNextButton";

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm",
};
export default class ContentPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources.bunnyMovie,
      endTriggered: false,
    };
  }

  componentDidMount() {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state,
    });
    if (state && state.ended && state.hasStarted) {
      this.props.playNext();
    }
  }

  render() {
    return (
      <div>
        <Player
          autoPlay
          src={this.props.content.url}
          ref={(player) => {
            this.player = player;
          }}
          playPrev={this.props.playPrev}
          playNext={this.props.playNext}
        >
          <BigPlayButton position="center" />
          <ControlBar autoHide={true}>
            <ReplayControl seconds={10} order={2.1} />
            <ForwardControl seconds={10} order={2.2} />
            <PrevNextButton order={3.1} type="Prev" />
            <PrevNextButton order={3.2} type="Next" />
            <VolumeMenuButton vertical />
          </ControlBar>
        </Player>
        {/* <div>State</div>
        <pre>{JSON.stringify(this.state.player, null, 2)}</pre> */}
      </div>
    );
  }
}
