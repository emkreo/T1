import * as React from 'react';
import {Chat} from "../interfaces/chat";
import {ChangeEvent} from "react";
import './itemsList.css';

// const propsValues = {
//   title: "Список смартфонов",
//   items: [
//     "Samsung Galaxy Note20",
//     "Apple iPhone 12 Pro",
//     "Google Pixel 5",
//     "Huawei P40 Pro",
//     "OnePlus 8 Pro",
//     "Asus Zenfone 7 Pro"
//   ]
// };
interface PropsSearchPlugin {
  chats: Chat[];
}
// export class Item extends React.Component<Props> {
//   render(): JSX.Element {
//     const {chats} = this.props
//     return <li>{chats[0].messages[0].text}</li>;
//   }
// }

export class SearchPlugin extends React.Component{
  // constructor(){

    // super();
    // const {chats} = this.props

    // this.onTextChanged = this.onTextChanged.bind(this);
  // }

  onTextChanged(e: ChangeEvent<HTMLInputElement>){
    let text = e.target.value.trim();   // удаляем пробелы
    // this.props.chats.filter(text); // передаем введенный текст в родительский компонент
  }

  render(): JSX.Element {
    return <input placeholder="Поиск" onChange={this.onTextChanged} />;
  }
}

interface PropsItemsList {
  chats: Chat[];
}
export class ItemsList extends React.Component {
  constructor(props: PropsItemsList){
    super(props);
    this.state = { items: this.props};

    this.filterList = this.filterList.bind(this);
  }

  filterList(text: any){
    // let filteredList = this.props.filter(function(item: any){
    //   return item.toLowerCase().search(text.toLowerCase())!== -1;
    // });
    // this.setState({items: filteredList});
  }

  findOnText() {}


  render() {
    return(
      // <div>
        <form>
          <input type="text" placeholder="Search here..."/>
            <button type="button"></button>
        </form>


    )
  }
}