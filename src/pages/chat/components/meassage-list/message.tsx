import * as React from 'react';
import { Text } from '../../../../components';


interface Props {
  text: string;
  outcomming: boolean;
  found: boolean
}

export class Message extends React.Component<Props> {
  public render(): JSX.Element {
    const { text, outcomming, found} = this.props;
    
    const className = `message message--${outcomming ? 'outcomming' : 'incomming' }`
    const Found = ' found';
    return (
      <div className={found ? className+Found:className}>

        <div className='message-text'>
          <Text>
            {text}
          </Text>
        </div>
      </div>
    )
  }
}