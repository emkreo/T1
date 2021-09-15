import * as React from 'react';

import './chat-list.css';

import {Chat} from '../../../../interfaces/chat';
import {ChatListItem} from './chat-list-item';


interface Props {
  chats: Chat[];
  selectedChatId: number | null;
  onChatClick: (chatId: number) => void;
}

export class ChatList extends React.Component<Props> {
  public render(): JSX.Element {
    const {chats, selectedChatId, onChatClick} = this.props;

    return (
      <div className='chat-list'>
        {chats.map(chat => (
          <ChatListItem
            key={chat.info.id}
            chatInfo={chat.info}
            isSelected={chat.info.id === selectedChatId}
            onClick={onChatClick}
          />
        ))}
      </div>
    )
  }
}