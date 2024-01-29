import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {input: '', isInputEmpty: true, wordsList: []}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()
    const {input} = this.state
    this.setState(prev => ({
      wordsList: [
        ...prev.wordsList,
        {id: uuidv4(), title: input, noOfChars: input.length},
      ],
      isInputEmpty: false,
      input: '',
    }))
  }

  render() {
    const {input, isInputEmpty, wordsList} = this.state
    return (
      <div className="main-bg">
        <div className="left-container">
          <h1 className="left-heading">Count the characters like a Boss...</h1>
          <div className="result-container">
            {isInputEmpty ? (
              <img
                className="image"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            ) : (
              <ul className="list-container">
                {wordsList.map(eachItem => (
                  <li key={eachItem.id}>
                    <p className="list-item">{`${eachItem.title} : ${eachItem.noOfChars}`}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <form className="right-container" onSubmit={this.onClickAddBtn}>
          <h1 className="right-heading">Character Counter</h1>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="Enter the Characters here"
              value={input}
              onChange={this.onChangeInput}
            />
            <button className="add-btn" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default App
