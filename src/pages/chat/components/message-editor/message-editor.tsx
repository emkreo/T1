import autobind from 'autobind-decorator';
import * as React from 'react';

import './message-editor.css'

import { TextInput, Button } from '../../../../components';
import {ChangeEvent} from "react";



interface Props {
  sendMessage: (text: string) => void;
}

interface State {
  message: string;
}


export class MessageEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: '',
    }
  }
  
  public render(): JSX.Element {

    return (
      <div className='message-editor'>
        <TextInput value={this.state.message} onChange={this.onMessageChange}/>
        <Button text='Send Message' onClick={this.sendMessage} disabled={this.state.message}/>
      </div>
    )
  }

  @autobind
  private onMessageChange(event: ChangeEvent<HTMLTextAreaElement>): void {
    console.log(event);
    this.setState({ message: event.target.value });
  }

  @autobind
  private sendMessage(): void {
    this.props.sendMessage(this.state.message);
    this.setState({ message: '' });
  }
}