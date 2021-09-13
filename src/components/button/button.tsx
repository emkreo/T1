import * as React from 'react';

import './button.css';

interface Props {
  text: string;
  onClick: () => void;
  disabled: boolean;
}

export class Button extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <div
        className={this.props.disabled ? "button" : "button button_disabled"}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </div>
    )
  }
}