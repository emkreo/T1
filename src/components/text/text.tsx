import * as React from 'react';

import './text.css';
import {ReactNode} from "react";

interface Props {
    closeChat?: (chatName: ReactNode) => void
    chatName?: string
}

export class Text extends React.Component<Props> {


    public render(): JSX.Element {

        return (
            <span
                  onClick={this.props.chatName && this.props.chatName === this.props.children
                      ? () =>this.props.closeChat && this.props.closeChat(this.props.children)
                      : undefined}>
        {this.props.children}
      </span>
        )
    }
}