// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}
  onClick = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="">
          The Button has been clicked <br />{' '}
          <span className="counter">{count}</span> Time{' '}
        </h1>
        <p className="para">Click the button to increase the count!</p>
        <button className="btn" onClick={this.onClick}>
          Click me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
