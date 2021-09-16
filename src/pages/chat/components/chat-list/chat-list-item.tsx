import autobind from 'autobind-decorator';
import * as React from 'react';

import {Text} from '../../../../components'
import {ChatInfo} from '../../../../interfaces/chat';
import {ReactNode} from "react";

interface Props {
    chatInfo: ChatInfo;
    isSelected: boolean;
    onClick: (chatId: number, chatName: string) => void;
    closeChat: (chatName: ReactNode) => void
    chatName: string
}

export class ChatListItem extends React.Component<Props> {
    public render(): JSX.Element {
        const {chatInfo, isSelected, closeChat, chatName} = this.props;

        const className = `chat-list-item ${isSelected ? 'selected' : null}`

        return (
            <div className={className} onClick={this.onClick}>
                <Text closeChat={closeChat} chatName={chatName}>{chatInfo.name}</Text>
            </div>
        )
    }

    @autobind
    private onClick(): void {
        const {onClick, chatInfo} = this.props;
        onClick(chatInfo.id,chatInfo.name);
    }

}