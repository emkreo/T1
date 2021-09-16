import * as React from 'react';
import './message-list.css';
import {ChatMessage} from '../../../../interfaces/chat';
import {Message} from './message';
import {ChangeEvent} from "react";


interface Props {
    messages: ChatMessage[];
}

interface State {
    valueInput: string
}

export class MessageList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            valueInput: ''
        }
    }

    onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        this.setState({valueInput: e.currentTarget.value})
    }

    public render(): JSX.Element {
        return (
            <div className='message-list'>
                <input
                    onChange={(e) => {
                        this.onChangeHandler(e)
                    }}
                    placeholder="Search..."
                    type="text"
                    value={this.state.valueInput}
                />
                {
                    this.props.messages && this.props.messages.map(message => (
                        <Message
                            key={message.text}
                            outcomming={message.outcomming}
                            text={message.text}
                            valueInput={this.state.valueInput}
                        />
                    ))
                }
            </div>
        )
    }


}

