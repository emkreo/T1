import * as React from 'react';
import './message-list.css';

import {Text} from '../../../../components';


interface Props {
  text: string;
  outcomming: boolean;
  match: boolean;
}

export class Message extends React.Component<Props> {
  public render(): JSX.Element {
    const {text, outcomming, match} = this.props;

    const className = `message message--${outcomming ? 'outcomming' : 'incomming'}`;

    return (
      <div className={match ? className + " match" : className}>
        <div className='message-text'>
          <Text>{text}</Text>
        </div>
      </div>
    )
  }
}