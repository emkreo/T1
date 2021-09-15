import * as React from 'react';

import './modeSwitch.css';

interface Props {
  modeSwitchNormalSizePage: () => void;
  modeSwitchLargeSizePage: () => void;
}

export class ModeSwitch extends React.Component<Props> {
  render(): JSX.Element {
    return (
      <div className="container-mode-switch">
        <div className="mode-switch">
          <input
            onClick={this.props.modeSwitchNormalSizePage}
            className="size-text"
            type="radio"
            id="size-normal"
            name="color"
          />
          <label htmlFor="size-normal">14px</label>
        </div>
        <div className="mode-switch">
          <input
            onClick={this.props.modeSwitchLargeSizePage}
            className="size-text"
            type="radio"
            id="size-large"
            name="color"
          />
          <label htmlFor="size-large">28px</label>
        </div>
      </div>
    )
  }
}