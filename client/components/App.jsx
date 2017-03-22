import React from 'react'

import request from 'superagent'

import Term from './Term'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: 'wat'
    }
  }
  render () {
    return (
      <div className='app'>
        <h1>Urban Dictionary</h1>
        <Term
          input={this.state.input}
        />
      </div>
    )
  }
}


export default App
