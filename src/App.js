import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {
    state = {advice: ''};
    componentDidMount(){
        this.fetchAdvice();
        console.log('COMPONENT DID MOUNT');
    }

    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const advice = response.data.slip.advice;
            this.setState({advice});
            console.log(response.data.slip.advice)
        })

        .catch((error) => {
            console.log(error)
        });
    }

  render() {
    const {advice} = this.state;
    return (
    <div className='app'>
        <div className='card'>
            <h1 className='heading'>{advice}</h1>
            <button className='button' onClick={this.fetchAdvice} >
            <span>GIVE ME MORE ADVICE</span>
            </button>
        </div>
    
    </div>
  );
}
}

export default App