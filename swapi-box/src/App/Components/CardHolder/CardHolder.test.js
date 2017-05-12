import React from 'react'
import ReactDOM from 'react-dom'
import {CardHolder} from './CardHolder'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'

// import { mockedFilms, mockedPeople, mockedVehicles, mockedPlanets } from '../TestData'

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
})
