import autobind from 'autobind-decorator';
import * as React from 'react';

import './chat.css';

import {ChatList, MessageEditor, MessageList} from './components';
import {InitialData} from '../../initial-data';
import {Chat} from '../../interfaces/chat';


interface State {
  selectdChatId: number | null;
  chats: Chat[];
}

export class ChatPage extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = InitialData;
  }

  public render(): JSX.Element {
    const {chats, selectdChatId} = this.state;

    const messages = chats.find(x => x.info.id === selectdChatId)?.messages || [];

    return (
      <div className='chat-page'>
        <ChatList
          chats={chats}
          onChatClick={this.selectChat}
          selectdChatId={selectdChatId}
        />
        {
          selectdChatId &&
          <div className='chatting-zone'>
            <MessageList messages={messages}/>
            <MessageEditor sendMessage={this.sendMessage}/>
          </div>
        }
      </div>
    )
  }

  @autobind
  private selectChat(selectdChatId: number): void {
    if (selectdChatId === this.state.selectdChatId) {
      this.setState({selectdChatId: null});
    } else {
      this.setState({selectdChatId: selectdChatId});
    }
  }

  @autobind
  private sendMessage(text: string): void {
    const {chats, selectdChatId} = this.state;
    const currentChatIndex = chats.findIndex(x => x.info.id === selectdChatId);
    if (currentChatIndex === -1) {
      return;
    }

    const updatedChats = chats.slice();
    updatedChats[currentChatIndex].messages.push({outcomming: true, text});

    this.setState({chats: updatedChats});
  }
}
