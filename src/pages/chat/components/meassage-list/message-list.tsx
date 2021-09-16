import * as React from 'react';

import './message-list.css';

import {ChatMessage} from '../../../../interfaces/chat';
import {Message} from './message';



interface Props {
    messages: ChatMessage[];
}

export class MessageList extends React.Component<Props, any> {
    state = {
        searchText: '',
    }

    public render(): JSX.Element {
        const {messages} = this.props;


        return (
            <div className='message-list'>
                <input
                    type={'search'}
                    placeholder="Искать сообщение"
                    value={this.state.searchText}
                    onChange={event => this.setState({ searchText: event.target.value })}
                />
                {/*<input type="submit" value="Найти" className='message-search'/>*/}


                {messages && messages.map(message => (
                    <Message
                        outcomming={message.outcomming}
                        text={message.text}
                        searchText={this.state.searchText}
                    />
                ))}
            </div>
        )
    }
}