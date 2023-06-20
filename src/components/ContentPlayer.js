import "./ContentPlayer.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  ReplayControl,
  ForwardControl,
  VolumeMenuButton,
} from "video-react";

function ContentPlayer({ content }) {
  return (
    <Player
      autoPlay
      src={content.url}
    >
      <BigPlayButton position="center" />
      <ControlBar autoHide={true}>
        <ReplayControl seconds={10} order={2.1}/>
        <ForwardControl seconds={10} order={2.2}/>
        <VolumeMenuButton vertical />
      </ControlBar>
    </Player>
  );
}
export default ContentPlayer;
