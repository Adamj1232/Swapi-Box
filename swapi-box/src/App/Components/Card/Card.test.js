import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'

// import { mockedFilms, mockedPeople, mockedVehicles, mockedPlanets } from '../TestData'

describe('Card instantiation', () => {


  it.skip('renders without crashing', () => {
    var mockFn = jest.fn()

    const div = document.createElement('div')
    ReactDOM.render(<Card
                        name={mockFn}
                        homeworld={mockFn}
                        species={mockFn}
                        population={mockFn}
                        selected={mockFn}
                        terrain={mockFn}
                        climate={mockFn}
                        residents={mockFn}
                        model={mockFn}
                        vehicleClass={mockFn}
                        passengers={mockFn}
                        cardOnClick={mockFn}
                        toggleButtonClass={mockFn}
                    />, div)
    // expect(true)
  })
})
