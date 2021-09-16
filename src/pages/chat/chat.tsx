import autobind from 'autobind-decorator';
import * as React from 'react';

import './chat.css'

import {ChatList, MessageEditor, MessageList} from './components';
import {InitialData} from '../../initial-data';
import {Chat} from '../../interfaces/chat';
import {ReactNode} from "react";


interface State {
    selectdChatId: number;
    chats: Chat[];
    chatName: string;
}

export class ChatPage extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = InitialData;
    }

    public render(): JSX.Element {
        const {chats, selectdChatId, chatName} = this.state;
        const messages = chats.find(x => x.info.id === selectdChatId)?.messages || [];


        return (
            <div className='chat-page'>
                <ChatList
                    chats={chats}
                    chatName={chatName}
                    onChatClick={this.selectChat}
                    selectdChatId={selectdChatId}
                    closeChat={this.closeChat}

                />
                <div className='chatting-zone'>
                    <MessageList messages={messages}
                    />
                    <MessageEditor sendMessage={this.sendMessage}/>
                </div>
            </div>
        )
    }

    @autobind
    private selectChat(selectdChatId: number, chatName: string): void {
        this.setState({selectdChatId, chatName})
    }

    @autobind
    private closeChat(chatName: ReactNode): void {
        const {chats} = this.state
        const filterChat = chats.filter(chat => chat.info.name !== chatName)
        this.setState({chats: filterChat})
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

        this.setState({chats: updatedChats})
    }
}