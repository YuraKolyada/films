import * as actions from './movie'
import * as types from '../constants'

describe('actions', () => {
  it('should create an action to delete a movie', () => {
    const id = 1111; 
    const expectedAction = {
      type: types.DELETE_MOVIE,
      payload: id
    }
    expect(actions.deleteMovie(id)).toEqual(expectedAction)
  })

  it('should create an action to add a movie', () => {
    const data = {title: 'xxx', year: 1999, format: 'DVD', actors: [{firstName: 'alex', lastName: 'petrov'}]}; 
    const expectedAction = {
      type: types.ADD_MOVIE,
      payload: data,
    }
    expect(actions.addMovie(data)).toEqual(expectedAction)
  })
})