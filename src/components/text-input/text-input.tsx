import * as React from 'react';
import { ChangeEvent } from 'react';

import './text-input.css';

interface Props {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export class TextInput extends React.Component<Props> {
  public render(): JSX.Element {
    const { value, onChange } = this.props;
    
    return (
      <textarea
        className='text-input'
        value={value}
        onChange={onChange}
      />
    )
  }
}