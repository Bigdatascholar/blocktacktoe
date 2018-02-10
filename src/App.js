import React, { Component } from 'react'
import ContactStorage from '../build/contracts/contactStorage.json'
import getWeb3 from './utils/getWeb3'

import './App.css'

const contract = require('truffle-contract')
const contactStorage = contract(ContactStorage)
      


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: [],
      web3: null,
      value: ''
    }
    
  }

  componentWillMount() {

    getWeb3.then(results => {
      this.setState({
        web3: results.web3
      })

      contactStorage.setProvider(this.state.web3.currentProvider)
    })
  }

  


  get(){
      this.state.web3.eth.getAccounts((error, accounts) => {
        contactStorage.deployed()
                      .then(instance => instance.getContacts({from: this.state.web3.eth.accounts[0]}))
                      .then(result => this.setState({storageValue: result }))
    })
  }


  set(){
      var _toAdd = this.state.value
      _toAdd = this.state.web3.fromAscii(_toAdd)
      this.state.web3.eth.getAccounts((error, accounts) => {
        contactStorage.deployed().then(instance => instance.addContacts(_toAdd, {from: this.state.web3.eth.accounts[0]}))     
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="App" >
        
              <h1>Ethereum/React Contact List Saver</h1>
              <h3>Privately secure and retrieve your contact list, only accessible with your personal ETH address. Sign in to the Rinkeby network with Metamask to continue.</h3>
              <br /><br /><br />
              <span>{this.state.storageValue.map( (result, i) => <p key={i}>{this.state.web3.toAscii(result)}<br/></p> )}</span>
              <button onClick={this.get.bind(this)}>Reload Your Contact List</button>
              
              <br/><br/><br/>
              <br/>
              <div className={'box'}>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} /><br/><br/>
                <button onClick={this.set.bind(this)}>Store Contact Forever (costs 0.70 USD )</button>
              </div>
              
      </div>
    );
  }
}

export default App
