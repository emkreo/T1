import autobind from 'autobind-decorator';
import * as React from 'react';

import './message-editor.css'

import {TextInput, Button} from '../../../../components';


interface Props {
    sendMessage: (text: string) => void;
}

interface State {
    message: string,
    disabled: boolean
}

export class MessageEditor extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            message: '',
            disabled: true
        }
    }


    public render(): JSX.Element {
        return (
            <div className='message-editor'>
                <TextInput value={this.state.message} onChange={this.onMessageChange}/>
                <Button text='Send Message' onClick={this.sendMessage} disabled={this.state.disabled}/>
            </div>
        )
    }

    @autobind
    private onMessageChange(event: any): void {
        console.log(event);

        event.target.value.length !== 0
            ? this.setState({message: event.target.value, disabled: false})
            : this.setState({message: event.target.value, disabled: true})
    }

    @autobind
    private sendMessage(): void {
        this.props.sendMessage(this.state.message);
        this.setState({message: '', disabled: true});
    }
}