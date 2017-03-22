import test from 'tape'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'
import { Term } from '../client/components/Term'

test('<App />', t => {
  const expected = 'React development has begun!'
  const wrapper = shallow(<App />)
  t.equal(wrapper.text(), expected)
  t.end()
})

test('<Term />', t => {
  const expected = 'krampus'

  let getDefinitionCalled = false // this is a dirty dirty hack. Use a mocking lib
  let definitionActual = ''
  const getDefinition = (_, input) => {
    definitionActual = input
    getDefinitionCalled = true
  }

  const wrapper = shallow(<Term input={expected} getDefinition={getDefinition} />)
  t.equal(wrapper.find('input').props().value, expected)
  wrapper.find('button').simulate('click')
  t.equal(getDefinitionCalled, true)
  t.equal(definitionActual, expected)
  t.end()
})
