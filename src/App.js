import React, { Component } from 'react';
import ListItem from './ListItem';

class App extends Component {
  constructor() {
    super()

    this.updateNewElementsName = this.updateNewElementsName.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.updateHeader = this.updateHeader.bind(this);

    this.state = {
      shoppingList: [
        {id: 0, name: 'Mleko', done: false},
        {id: 1, name: 'Masło', done: false},
        {id: 2, name: 'Pieczywo', done: false}
      ],
      newElementName: '',
      newHeader: ''
    }
  }

  updateNewElementsName(e) {
    const newElementName = e.target.value;

    this.setState({newElementName});
  }

  updateHeader(e) {
      const newHeader = e.target.value;

      this.setState({newHeader});
  }

  addNewItem() {
    const newItem = {id: Date.now(), name: this.state.newElementName}
    // ... tworzenie nowej tablicy
    const newShopppingList = [
          ...this.state.shoppingList,
          newItem
          ];
    // newShopppingList.push(newItem);

    this.setState({shoppingList: newShopppingList})
  }

  changeElementStatus (index) {
    console.log('change', index)
  }

  render() {
    const { shoppingList, newElementName, newHeader } = this.state;
    // const shoppingList = this.state.shoppingList;

    return (
      <div>
        <h1>{newHeader}</h1>
        <ul>
          {
            shoppingList.map((shoppingElement, i) => {
            return <ListItem 
              key={shoppingElement.id} 
              value={shoppingElement.name} 
              index={i}
              changeStatus={this.changeElementStatus} ></ListItem>
            })
            // shoppingList.map(shoppingElement => <li key={shoppingElement.id}>{shoppingElement.name}</li>)
          }
        </ul>
        <input value={newElementName} onChange={this.updateNewElementsName}/>
        <button onClick={this.addNewItem}>Dodaj element</button>
        <div>
            <input value={newHeader} onChange={this.updateHeader}/>
        </div>
      </div>
    );
  }
}

export default App;
