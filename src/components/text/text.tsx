import * as React from 'react';

import './text.css';


export class Text extends React.Component {
  public render(): JSX.Element {
    return (
      <span>
        {this.props.children}
      </span>
    )
  }
}