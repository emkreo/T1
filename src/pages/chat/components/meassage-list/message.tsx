import * as React from 'react';
import './message-list.css';

import {Text} from '../../../../components';
import {INCOMMING, MATCH, MESSAGE_MESSAGE, OUTCOMMING} from '../../../../constants';


interface Props {
  text: string;
  outcomming: boolean;
  match: boolean;
}

export class Message extends React.Component<Props> {
  public render(): JSX.Element {
    const {text, outcomming, match} = this.props;

    const className = `${MESSAGE_MESSAGE}${outcomming ? OUTCOMMING : INCOMMING}`;

    return (
      <div className={match ? className + MATCH : className}>
        <div className='message-text'>
          <Text>{text}</Text>
        </div>
      </div>
    )
  }
}