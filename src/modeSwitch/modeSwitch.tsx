import * as React from 'react';

import './modeSwitch.css';

export class ModeSwitch extends React.Component {
  render(): JSX.Element {
    return (
      <div className="container-mode-switch">
        <div className="mode-switch">
          <input className="size-text" type="radio" id="size-normal" name="color"
                 value="indigo"/>
          <label htmlFor="size-normal">14px</label>
        </div>
        <div className="mode-switch">
          <input className="size-text" type="radio" id="size-large" name="color"
                 value="red"/>
          <label htmlFor="size-large">28px</label>
        </div>
      </div>
    )
  }
}