import PropTypes from "prop-types";
import React, { Component } from "react";
import classNames from "classnames";

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
};

export default class PrevNextButton extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.props.type === "Prev") {
      this.props.playPrev();
    } else if (this.props.type === "Next") {
      this.props.playNext();
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div
        ref={(c) => {
          this.button = c;
        }}
        href="#"
        className={classNames(className, {
          "video-react-control": true,
          "video-react-button": true,
          "player-button": true,
        })}
        tabIndex="0"
        onClick={this.handleClick}
      >
        <span className="material-symbols-outlined player-button-icon">
          {this.props.type === "Prev" ? "skip_previous" : "skip_next"}
        </span>
      </div>
    );
  }
}

PrevNextButton.propTypes = propTypes;
