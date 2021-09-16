import * as React from 'react';

import './button.css';


interface Props {
  text: string;
  onClick: () => void;
  disabled: boolean
}

export class Button extends React.Component<Props> {
  public render(): JSX.Element{
    return (
      <div className={this.props.disabled ?'disabledButton':'activeButton'} onClick={this.props.onClick} data-disabled={this.props.disabled}>
        {this.props.text}
      </div>
    )
  }
}