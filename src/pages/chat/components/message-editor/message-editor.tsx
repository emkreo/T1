import autobind from 'autobind-decorator';
import * as React from 'react';

import './message-editor.css'

import { TextInput, Button } from '../../../../components';
import {flushSync} from "react-dom";



interface Props {
  sendMessage: (text: string) => void;
}

interface State {
  message: string;
  disabled: boolean;
}

export class MessageEditor extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: '',
      disabled: false
    }
  }
  
  public render(): JSX.Element {
    return (
      <div className='message-editor'>
        <TextInput value={this.state.message} onChange={this.onMessageChange}/>
        <Button disabled={this.state.disabled} text='Send Message' onClick={this.sendMessage} />
      </div>
    )
  }

  @autobind
  private onMessageChange(event: any): void {
    console.log(event);
    if(event.target.value.trim() !== '') {
      this.setState({disabled: true});
    }
    this.setState({ message: event.target.value });
  }

  @autobind
  private sendMessage(): void {
    if(this.state.disabled) {
      this.props.sendMessage(this.state.message);
      this.setState({ message: '' });
      this.setState({disabled: false});
    }
    this.setState({ message: '' });
  }
}