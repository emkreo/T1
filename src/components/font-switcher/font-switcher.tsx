import * as React from 'react';
import './font-switcher.css';

interface Props {
    toggle: () => void
    activeLargeMode: boolean
    activeNormalMode: boolean
}

export class FontSwitcher extends React.Component<Props> {

    public render(): JSX.Element {
        return (
            <div className="tooltip">
                <span className="tooltiptext">Select mode</span>
                <button onClick={this.props.toggle} disabled={this.props.activeLargeMode}>Large mode</button>
                <button onClick={this.props.toggle} disabled={this.props.activeNormalMode}>Normal mode</button>
            </div>
        )
    }
}