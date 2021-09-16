import * as React from 'react';

import './button.css';

interface Props {
    text: string;
    onClick: () => void;
    disabled: string;
}

export class Button extends React.Component<Props> {
    public render(): JSX.Element {

        const className = `button ${!this.props.disabled ? 'disabled' : null}`

        return (
            <div className={className} onClick={!this.props.disabled ? undefined : this.props.onClick}>
                {this.props.text}
            </div>
        )
    }
}