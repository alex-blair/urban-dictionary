import React from 'react'

import Definition from './Definition'
import api from './API'

class Term extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      input: '',
      definition: null,
      loading: false
    }
  }

updateTerm (e) {
  this.setState ({
    input: e.target.value
  })
}

getDefinition (e) {
  e.preventDefault()
  this.setState({ loading: true })
  const url = `https://mashape-community-urban-dictionary.p.mashape.com/define?term=${this.state.input}`
  api.getDefinition(url, this.showResult.bind(this))
}

showResult(err, results) {
  this.setState({
    error: err,
    definition: results.list[0].definition
  })
  this.setState({ loading: false })
}

render () {
    return (
      <div className='input'>
      <form>
        <input type='text' value={this.state.input} placeholder='Insert word here' onChange={this.updateTerm.bind(this)}></input>
        <button onClick={this.getDefinition.bind(this)}>Define</button>
      </form>
      {this.state.loading && <p>Loading</p>}
      {this.state.definition && <Definition result={this.state.definition} />}
      </div>
    )
  }
}

export default Term

// (e) => this.setState({ input: e.target.value})
