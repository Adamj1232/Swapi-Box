import React from 'react'
import ReactDOM from 'react-dom'
import { Card } from './Card'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'

describe('Card instantiation', () => {


  it('renders without crashing', () => {
    var mockFn = jest.fn()
    const div = document.createElement('div')

    ReactDOM.render(<Card
                        name={''}
                        homeworld={''}
                        species={''}
                        population={''}
                        selected={''}
                        terrain={''}
                        climate={''}
                        residents={''}
                        model={''}
                        vehicleClass={''}
                        passengers={''}
                        cardOnClick={mockFn}
                        toggleButtonClass={mockFn}
                    />, div)

  })

  it('should receive person data', () => {
    var mockFn = jest.fn()
    const wrapper = mount(<Card className='card'
                          name={'Frankie'}
                          homeworld={'Tatooine'}
                          species={'Dog'}
                          population={1000000}
                          key={'Frankie'}
                          selected={'people'}
                          cardOnClick={mockFn}
                          toggleButtonClass={mockFn}
                          />)

     expect(wrapper.node.props.name).toEqual('Frankie')
     expect(wrapper.node.props.homeworld).toEqual('Tatooine')
     expect(wrapper.node.props.selected).toEqual('people')
  })

  it('should receive vehicle data', () => {
    var mockFn = jest.fn()
    const wrapper = mount(<Card className='card'
                          name={'Sand Crawler'}
                          model={'Digger Crawler'}
                          vehicleClass={'Wheeled'}
                          passenger={30}
                          key={'Sand Digger'}
                          selected={'vehicles'}
                          cardOnClick={mockFn}
                          toggleButtonClass={mockFn}
                          />)

     expect(wrapper.node.props.name).toEqual('Sand Crawler')
     expect(wrapper.node.props.model).toEqual('Digger Crawler')
     expect(wrapper.node.props.selected).toEqual('vehicles')
  })

  it('should receive planet data', () => {
    var mockFn = jest.fn()
    const wrapper = mount(<Card className='card'
                          name={'Alderaan'}
                          terrain={'grasslands, mountains'}
                          population={'20000'}
                          climate={'temperate'}
                          key={'Alderaan'}
                          selected={'planet'}
                          cardOnClick={mockFn}
                          toggleButtonClass={mockFn}
                          />)
                          console.log(wrapper.node.props.className)
     expect(wrapper.node.props.name).toEqual('Alderaan')
     expect(wrapper.node.props.climate).toEqual('temperate')
     expect(wrapper.node.props.selected).toEqual('planet')
  })
})
