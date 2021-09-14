import * as React from 'react';
import {ChangeEvent} from 'react';
import './searchItem.css';
import autobind from "autobind-decorator";


interface PropsSearchPlugin {
  searchText: (inputValue: string) => any;
}

interface State {
  inputValue: string;
  math: boolean;
}

export class SearchItem extends React.Component<PropsSearchPlugin, State> {
  constructor(props: PropsSearchPlugin) {
    super(props);
    this.state = {inputValue: '', math: false};
  }

  @autobind
  findOnText(e: ChangeEvent<HTMLInputElement>) {
    let inputValue = e.target.value;

    if (inputValue) {
      this.props.searchText(inputValue.trim());
      this.setState({inputValue});
    } else {
      this.props.searchText(inputValue.trim());
      this.setState({inputValue: ''});
      this.setState({math: false});
    }
  }

  public render(): JSX.Element {
    return (
      <div className="form">
        <input
          value={this.state.inputValue}
          onChange={this.findOnText} type="text"
          placeholder="Search here..."
        />
      </div>
    )
  }
}