import React from 'react'
import { getDefinition } from './termStuff'
import Definition from './Definition'
import { compose, withState, withHandlers, withProps } from 'recompose'

const enhance = compose(
  withState('input', 'updateInput', ''),
  withState('definition', 'updateDefinition', ''),
  withState('loading', 'updateLoading', false),
  withProps({
    getDefinition
  }),
  withHandlers({
    onInputChange: props => e => props.updateInput(e.target.value),
    showResults: ({ updateDefinition, updateLoading }) => (err, results) => {
      updateDefinition(results.list[0].definition)
      updateLoading(false)
    }
  })
)

const Term = (props) => {
  const {
    input,
    definition,
    loading,
    updateLoading,
    showResults,
    getDefinition,
    onInputChange
  } = props

  return (
    <div className='input'>
      <form>
        <input type='text' value={input} placeholder='Insert word here' onChange={onInputChange}></input>
        <button onClick={e => getDefinition(e, input, updateLoading, showResults)}>Define</button>
      </form>
      {loading && <p>Loading</p>}
      {definition && <Definition result={definition} />}
    </div>
  )
}

export {
  Term
}

export default enhance(Term)
