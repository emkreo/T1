import * as React from 'react';
import { Text } from '../../../../components';
import Highlighter from "react-highlight-words";


interface Props {
  text: string;
  outcomming: boolean;
  valueInput: string
}

export class Message extends React.Component<Props> {
  public render(): JSX.Element {
    const { text, outcomming, valueInput} = this.props;
    
    const className = `message message--${outcomming ? 'outcomming' : 'incomming' }`

    return (
      <div className={className}>
        <div className='message-text'>
          <Text>
            <Highlighter
              highlightClassName="highlight"
              searchWords={[valueInput]}
              autoEscape={true}
              textToHighlight={text}
          />
          </Text>
        </div>
      </div>
    )
  }
}