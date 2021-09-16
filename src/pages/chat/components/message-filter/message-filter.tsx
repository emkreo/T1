import * as React from "react";
import {TextInput} from "../../../../components/text-input";

interface Props {
    filter: string;
    setFilter: (event: React.ChangeEvent) => void;
}

interface State {
    searchValue: string
}


export class MessageFilter extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }
    public render(): JSX.Element{
        return (
            <div>
                <TextInput
                    value={this.state.searchValue}
                    onChange={event => {}}
                />
            </div>
        )
    }
}