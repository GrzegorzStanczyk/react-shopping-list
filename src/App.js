import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.updateNewElementsName = this.updateNewElementsName.bind(this);
    this.addNewItem = this.addNewItem.bind(this);

    this.state = {
      shoppingList: [
        {id: 0, name: 'Mleko'},
        {id: 1, name: 'Masło'},
        {id: 2, name: 'Pieczywo'}
      ],
      newElementName: ''
    }
  }

  updateNewElementsName(e) {
    const newElementName = e.target.value;

    this.setState({newElementName});
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

  render() {
    const { shoppingList, newElementName } = this.state;
    // const shoppingList = this.state.shoppingList;

    return (
      <div>
        <ul>
          {
            shoppingList.map((shoppingElement) => {
            return <li key={shoppingElement.id}>{shoppingElement.name}</li>
            })
            // shoppingList.map(shoppingElement => <li key={shoppingElement.id}>{shoppingElement.name}</li>)
            
          }
        </ul>
        <input value={newElementName} onChange={this.updateNewElementsName}/>
        <button onClick={this.addNewItem}>Dodaj element</button>
      </div>
    );
  }
}

export default App;
