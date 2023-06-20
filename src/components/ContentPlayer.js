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
      src="https://d1e3n3ct49jsgv.cloudfront.net/beginning-accoustic-guitar/01_01_welcome.mp4"
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
