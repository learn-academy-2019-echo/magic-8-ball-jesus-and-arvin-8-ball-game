import React from 'react';
import './App.css'
// import  Bowling from '../public/bowling_PNG15.png'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answer: null
    }
  }

  getAnswer = () => {
    //This is where you will write your Magic 8 Ball code
    const answers = "It is certain, It is decidedly so, Without a doubt, Yes – definitely, You may rely on it, As I see it, yes, Don’t count on it, My reply is no, My sources say no, Outlook not so good, and very doubtful".toUpperCase().split(","); // this makes it into an array

    const randomNumber = Math.floor(Math.random() * answers.length);

    const response = answers[randomNumber];

    return response;
  }

  handleSubmit = () =>{
    const answer = this.getAnswer()
    this.setState({answer: answer})
  }

  render(){
    return (

      <div>
        <h1>SPEAK INTO THE FLAMES</h1>
        <br/>
        <input
          type='text' placeholder="SPEAK HERE! "
        />
        <br />
        <button
          onClick={this.handleSubmit}
        >
          PRESS THE BUTTON TO DISCOVER YOUR FATE
        </button>

        {this.state.answer &&
          <h1> THE FLAMES HAVE SPOKEN: <br/>
          {this.state.answer} </h1>
        }
      </div>
    )
  }
}

export default App;
