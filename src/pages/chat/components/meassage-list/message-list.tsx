import * as React from 'react';
import './message-list.css';
import {ChatMessage} from '../../../../interfaces/chat';
import {Message} from './message';
import {ChangeEvent} from "react";
import autobind from "autobind-decorator";


interface Props {
    messages: ChatMessage[];
}

interface State {
    valueInput: string,
    found: boolean
}

export class MessageList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            valueInput: '',
            found: false
        }
    }


    public render(): JSX.Element {
        return (
            <div className='message-list'>
                <input
                    onChange={(e) => {
                        this.onChangeHandler(e)
                        this.findMatch(e)
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
                            found={message.found}
                        />
                    ))
                }
            </div>
        )
    }
    @autobind
    onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        this.setState({valueInput: e.target.value})
    }

    @autobind
    findMatch(e: ChangeEvent<HTMLInputElement>) {
        const valueInput = e.target.value
        if (valueInput) {
            this.props.messages.map(message => {
                if (message.text.includes(valueInput)) {
                    message.found = true
                    console.log(message.text)
                } else {
                    message.found = false
                }
            });
        } else {
            this.props.messages.map(message => {
                message.found = false
            });

        }
    }

}

