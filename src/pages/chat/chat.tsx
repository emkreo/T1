import autobind from 'autobind-decorator';
import * as React from 'react';

import './chat.css';

import {ChatList, MessageEditor, MessageList} from './components';
import {InitialData} from '../../initial-data';
import {Chat, ChatMessage} from '../../interfaces/chat';
import {SearchItem} from "../../search/searchItem";


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
    this.messages = this.messages.map(el => {
      return {...el, match: false}
    });

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
    // debugger


    this.messages.forEach(el => {
      if (el.text.indexOf(inputText) !== -1) {
        el.match = true
      }
    });

    // this.messages = this.messages.find(message=> message.match === true)


    console.log("444444" + this.messages)
    console.log("555555" + this.state)

    const newState = {
      ...this.state,
      chats: this.state.chats.map((ch) => {
        if (ch.info.id === this.state.selectedChatId) {
          return {...ch, messages: this.messages }
        } else {
          return ch
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
    updatedChats[currentChatIndex].messages.push({outcomming: true, text});

    this.setState({chats: updatedChats});
  }
}
