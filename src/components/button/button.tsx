import * as React from 'react';

import './button.css';

interface Props {
  text: string;
  onClick: () => void;
}

export class Button extends React.Component<Props> {
  public render(): JSX.Element {
    return (
      <div className='button' onClick={this.props.onClick}>
        {this.props.text}
      </div>
    )
  }
}