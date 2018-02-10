import React, { Component } from 'react'
import ContactStorage from '../build/contracts/contactStorage.json'
import getWeb3 from './utils/getWeb3'

import './App.css'

const contract = require('truffle-contract')
const contactStorage = contract(ContactStorage)
      



class Board extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      web3: null,
      squares: Array(9).fill(""),
      xIsNext: true,
    };
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
                      .then(result => {console.log(result); this.setState({squares: result.map(e => this.state.web3.toAscii(e))}) })
    })
  }

  set(){
      var _squares = this.state.squares

      this.state.web3.eth.getAccounts((error, accounts) => {
        contactStorage.deployed().then(instance => instance.addContacts(_squares[0], _squares[1], _squares[2], _squares[3], _squares[4], _squares[5], _squares[6], _squares[7], _squares[8], {from: this.state.web3.eth.accounts[0]}))     
    })
  }


  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  handleClick(i) {
    const squares = this.state.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
    
  }


  

  renderSquare(i) {
    return (
      <button className="square" onClick={() => this.handleClick(i)}>
        {this.state.squares[i]}
      </button>
      
    );
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
            <div>
              <div className="status">{status}</div>
              <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
              </div>
              <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
              </div>
              <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
              </div>
            </div>
        </div>
        <div className="game-info">
          <button onClick={this.set.bind(this)}>save game</button>
          <button onClick={this.get.bind(this)}>load game</button>
        </div>
      </div>
    );
  }
}



export default Board
