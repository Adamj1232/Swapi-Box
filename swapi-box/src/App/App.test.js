import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import fetchMock from 'fetch-mock'
import { shallow, mount } from 'enzyme'
import { mockedFilms, mockedPeople, mockedVehicles, mockedPlanets } from '../TestData'

// describe('App instantiation', () => {
//
//
//   it('renders without crashing', () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<App />, div)
//
//   })
//
//   it('should have initial states start empty values',  () => {
//
//     const wrapper = mount(<App />)
//
//     // await wrapper.update()
//
//     expect(wrapper.state('filmData')).toEqual({})
//     expect(wrapper.state('selected')).toEqual('')
//     expect(wrapper.state('favorites')).toEqual([])
//     expect(wrapper.state('vehicles')).toEqual([])
//     expect(wrapper.state('people')).toEqual([])
//     expect(wrapper.state('peopleAtrributes')).toEqual([])
//     expect(wrapper.state('planets')).toEqual([])
//   })
//
// })

describe('App functionality', () => {

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  const mockCalls = (() => {
    fetchMock.get('https://swapi.co/api/films', {
      status: 200,
      body: mockedFilms
    })
    fetchMock.get('https://swapi.co/api/people/', {
      status: 200,
      body: mockedPeople
    })
    fetchMock.get('https://swapi.co/api/vehicles/', {
      status: 200,
      body: mockedVehicles
    })
    fetchMock.get('*', {
      status: 200,
      body: mockedPlanets
    })
  })

  function wait(){
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  }

 //  it('should have filmData after mounting', async () => {
 //   mockCalls()
 //   const wrapper = mount(<App />)
 //   await wait()
 //
 //   .then(() => {
 //     let keys = Object.keys(wrapper.state('filmData'))
 //    console.log(wrapper.state('filmData'))
 //    expect(keys[1]).toEqual('title')
 //    expect(keys.length).toEqual(3)
 //   })
 // })
 //

 it('should have filmData after mounting', async () => {

   mockCalls()

   const wrapper = mount(<App />)
   expect(wrapper.state('filmData')).toEqual({})

   await wait()

   expect(fetchMock.called()).toEqual(true)
   expect(wrapper.state('filmData')).toHaveProperty('crawl')
 })


  it('should have vehicleData after mounting', async () => {
    mockCalls()
    const wrapper = mount(<App />)
    expect(wrapper.state('vehicles')).toEqual([])

    await wait()

    expect(fetchMock.called()).toEqual(true)
    expect(wrapper.state('vehicles')[0]).toHaveProperty('passengers')

    expect(fetchMock.lastUrl()).toEqual('https://swapi.co/api/vehicles/')
  })

  // it('should have peopleData after mounting', async () => {
  //   mockCalls()
  //   const wrapper = mount(<App />)
  //   expect(wrapper.state('vehicles')).toEqual([])
  //
  //   await wait()
  //
  //   expect(fetchMock.called()).toEqual(true)
  //   expect(wrapper.state('vehicles')[0]).toHaveProperty('passengers')
  //
  //   expect(fetchMock.lastUrl()).toEqual('https://swapi.co/api/vehicles/')
  // })

})
