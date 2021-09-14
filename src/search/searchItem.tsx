import * as React from 'react';
import {ChangeEvent} from 'react';
import './searchItem.css';
import autobind from "autobind-decorator";


interface PropsSearchPlugin {
  searchText: (inputValue: string)=> any;
}
interface State {
  inputValue: string;
}

export class SearchItem extends React.Component<PropsSearchPlugin, State> {


  filterList(text: any){

  }

  @autobind
  findOnText(e: ChangeEvent<HTMLInputElement>) {

      let inputValue = e.target.value
    this.setState({inputValue})

  }

  @autobind
  clickSearch() {
    // const {inputValue} = this.state
      this.props.searchText(this.state?.inputValue)

    console.log(this.state?.inputValue)

  }


  public render() {
    return(
        <div className="form">
          <input onChange={this.findOnText} type="text" placeholder="Search here..."/>
          <button onClick={this.clickSearch} type="button"></button>
        </div>
    )
  }
}