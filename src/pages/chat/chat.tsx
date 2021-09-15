import autobind from 'autobind-decorator';
import * as React from 'react';

import './chat.css';

import {ChatList, MessageEditor, MessageList} from './components';
import {InitialData} from '../../initial-data';
import {Chat, ChatMessage} from '../../interfaces/chat';
import {SearchItem} from './components/search/searchItem';


interface State {
  selectedChatId: number | null;
  chats: Chat[];
}

export class ChatPage extends React.Component<{}, State> {
  messages: ChatMessage[] = [];

  constructor(props: {}) {
    super(props);
    this.state = InitialData;
  }

  public render(): JSX.Element {
    const {chats, selectedChatId} = this.state;

    this.messages = chats.find(x => x.info.id === selectedChatId)?.messages || [];

    return (
      <div className='chat-page'>
        <ChatList
          chats={chats}
          onChatClick={this.selectChat}
          selectedChatId={selectedChatId}
        />
        {
          selectedChatId &&
          <div className='chatting-zone'>
            <SearchItem searchText={this.searchText}/>
            <MessageList messages={this.messages}/>
            <MessageEditor sendMessage={this.sendMessage}/>
          </div>
        }
      </div>
    )
  }

  @autobind
  searchText(inputText: string) {
    if (inputText) {
      this.messages.forEach(el => {
        if (el.text.indexOf(inputText) !== -1) {
          el.match = true
        } else {
          el.match = false
        }
      });
    } else {
      this.messages.forEach(el => {
        el.match = false
      });
    }

    const newState = {
      ...this.state,
      chats: this.state.chats.map((chat) => {
        if (chat.info.id === this.state.selectedChatId) {
          return {...chat, messages: this.messages}
        } else {
          return chat
        }
      })
    }
    this.setState(newState);
  }

  @autobind
  private selectChat(selectedChatId: number): void {
    if (selectedChatId === this.state.selectedChatId) {
      this.setState({selectedChatId: null});
    } else {
      this.setState({selectedChatId: selectedChatId});
    }
  }

  @autobind
  private sendMessage(text: string): void {
    const {chats, selectedChatId} = this.state;
    const currentChatIndex = chats.findIndex(x => x.info.id === selectedChatId);
    if (currentChatIndex === -1) {
      return;
    }

    const updatedChats = chats.slice();
    updatedChats[currentChatIndex].messages.push({outcomming: true, text, match: false});

    this.setState({chats: updatedChats});
  }
}
