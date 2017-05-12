import React from 'react'
import ReactDOM from 'react-dom'
import {CardHolder} from './CardHolder'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'

import { mockedPeople, mockedVehicles, mockedPlanets } from '../../../TestData'

describe('CardHolder instantiation', () => {


  it('renders without crashing', () => {
    var mockFn = jest.fn()

    const div = document.createElement('div')
    ReactDOM.render(<CardHolder
                    selected={'string'}
                    peopleData={['array']}
                    planetData={['array']}
                    vehicleData={['array']}
                    peopleAtrributes={['array']}
                    handleFavoriteSelect={mockFn}
                    favoriteCards={['array']}
                    btnSelected={mockFn}

                    />, div)
  })

  it('should display a CardHolder', () => {
    var mockFn = jest.fn()
    const wrapper = mount(<CardHolder
                    selected={'vehicles'}
                    peopleData={['array']}
                    planetData={['array']}
                    vehicleData={mockedVehicles.results}
                    peopleAtrributes={['array']}
                    handleFavoriteSelect={mockFn}
                    favoriteCards={['array']}
                    btnSelected={mockFn}
                    />)
    const found = wrapper.find('.card-holder')
    expect(found.length).toEqual(1)
  })

  it('should have cards for vehicles', () => {
    var mockFn = jest.fn()
    const wrapper = mount(<CardHolder
                    selected={'vehicles'}
                    peopleData={['array']}
                    planetData={['array']}
                    vehicleData={mockedVehicles.results}
                    peopleAtrributes={['array']}
                    handleFavoriteSelect={mockFn}
                    favoriteCards={['array']}
                    btnSelected={mockFn}
                    />)
    const found = wrapper.find('.card')
    expect(found.length).toEqual(3)
  })
  
  it('should have cards for people', () => {
    var mockFn = jest.fn()
    const wrapper = mount(<CardHolder
                    selected={'people'}
                    peopleData={['array']}
                    planetData={['array']}
                    vehicleData={['array']}
                    peopleAtrributes={mockedPeople.results}
                    handleFavoriteSelect={mockFn}
                    favoriteCards={['array']}
                    btnSelected={mockFn}
                    />)
    const found2 = wrapper.find('.card')
    expect(found2.length).toEqual(3)
  })

  it('should have cards for planets', () => {
    var mockFn = jest.fn()
    const wrapper = mount(<CardHolder
                    selected={'planets'}
                    peopleData={['array']}
                    planetData={mockedPlanets.results}
                    vehicleData={['array']}
                    peopleAtrributes={['array']}
                    handleFavoriteSelect={mockFn}
                    favoriteCards={['array']}
                    btnSelected={mockFn}
                    />)
    const found3 = wrapper.find('.card')
    expect(found3.length).toEqual(3)
  })
})
