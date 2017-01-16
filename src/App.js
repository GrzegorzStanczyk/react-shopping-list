import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.updateNewElementsName = this.updateNewElementsName.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.updateHeader = this.updateHeader.bind(this);

    this.state = {
      shoppingList: [
        {id: 0, name: 'Mleko'},
        {id: 1, name: 'Masło'},
        {id: 2, name: 'Pieczywo'}
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

  render() {
    const { shoppingList, newElementName, newHeader } = this.state;
    // const shoppingList = this.state.shoppingList;

    return (
      <div>
        <h1>{newHeader}</h1>
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
        <div>
            <input value={newHeader} onChange={this.updateHeader}/>
        </div>
      </div>
    );
  }
}

export default App;
