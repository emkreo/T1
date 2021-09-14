import * as React from 'react';
import './message-list.css';

import { Text } from '../../../../components';


interface Props {
  text: string;
  outcomming: boolean;
  match: boolean | undefined
}

export class Message extends React.Component<Props> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = this.props
  //   console.log(this.props, this.props.match)
  // }
  public render(): JSX.Element {
    const { text, outcomming, match } = this.props;
    console.log(this.props, this.props.match)
    
    const className = `message message--${outcomming ? 'outcomming' : 'incomming'}`

    return (
      <div className={this.props.match ? className + " match" : className}>
        {`${this.props.match}" !!!!!!!!!"`}
        <div className='message-text'>
          <Text>{text}</Text>
        </div>
      </div>
    )
  }
}