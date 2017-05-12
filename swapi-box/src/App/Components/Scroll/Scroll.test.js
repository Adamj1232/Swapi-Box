import React from 'react'
import ReactDOM from 'react-dom'
import {Scroll} from './Scroll'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'

import { mockedFilms } from '../../../TestData'

describe('Scroll instantiation', () => {


  it('renders without crashing', () => {
    var dataM = {hello: 'there'}
    const div = document.createElement('div')
    ReactDOM.render(<Scroll scrollData={mockedFilms}/>, div)
  })

  it('should have data', () => {
    const wrapper = mount(<Scroll scrollData={mockedFilms}/>)

    expect(wrapper.props().scrollData.results[0].title).toEqual('!A New Hope')
  })

  it('should have a h2', () => {
    const wrapper = mount(<Scroll scrollData={mockedFilms}/>)
    const found = wrapper.find('h2')
    expect(found.length).toEqual(1)
  })
})
