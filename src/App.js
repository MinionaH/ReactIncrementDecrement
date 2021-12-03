import React,{Component} from 'react';
import '../src/App.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  increment = () =>{
    this.setState({count:this.state.count +1})
  }
  decrement = () =>{
    this.setState({count:this.state.count -1})
  }
  render(){
    return (
      <div className="App">
        <button className="counter" onClick={this.decrement}><p>-</p></button>
        <h2>{this.state.count}</h2>
        <button className="counter2" onClick={this.increment} ><p>+</p></button>
      </div>
      );
  }

}

export default App;