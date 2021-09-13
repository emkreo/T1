import * as React from 'react';

import { Text } from '../../../../components';


interface Props {
  text: string;
  outcomming: boolean;
}

export class Message extends React.Component<Props> {
  public render(): JSX.Element {
    const { text, outcomming } = this.props;
    
    const className = `message message--${outcomming ? 'outcomming' : 'incomming'}`

    return (
      <div className={className}>
        <div className='message-text'>
          <Text>{text}</Text>
        </div>
      </div>
    )
  }
}