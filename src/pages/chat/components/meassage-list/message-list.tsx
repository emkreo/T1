import * as React from 'react';

import './message-list.css';

import {ChatMessage} from '../../../../interfaces/chat';
import {Message} from './message';


interface Props {
  messages: ChatMessage[];
}

export class MessageList extends React.Component<Props> {
  public render(): JSX.Element {
    const {messages} = this.props;

    return (
      <div className='message-list'>
        {messages && messages.map(message => (
          <Message
            key={message.text}
            outcomming={message.outcomming}
            text={message.text}
            match={message.match}
          />
        ))}
      </div>
    )
  }
}