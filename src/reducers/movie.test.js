import reducer from './movie';
import * as types from '../constants';

describe('movie reducer', () => {

  it('should handle ADD_MOVIE', () => {
    expect(
      reducer({data: []}, {
        type: types.ADD_MOVIE,
        payload: { 
          title: 'xxx', 
          year: 1999, 
          format: 'DVD', 
          id: 5,
          actors: [{firstName: 'alex', lastName: 'petrov'}]
        } 
      })
    ).toEqual({
      data:[{
        title: 'xxx', 
        year: 1999, 
        format: 'DVD', 
        id: 5,
        actors: [{firstName: 'alex', lastName: 'petrov'}],
      }]
    })
   })

  it('should handle DELETE_MOVIE', () => {
    expect(
      reducer({data: [
        {
          title: 'xxx', 
          year: 1999, 
          format: 'DVD', 
          id: 5,
          actors: [{firstName: 'alex', lastName: 'petrov'}]
        }
      ]}, {
        type: types.DELETE_MOVIE,
        payload: 5
      })
    ).toEqual({
      data:[],
    })
  })

  //   expect(
  //     reducer(
  //       [
  //         {
  //           text: 'Use Redux',
  //           completed: false,
  //           id: 0
  //         }
  //       ],
  //       {
  //         type: types.ADD_TODO,
  //         text: 'Run the tests'
  //       }
  //     )
  //   ).toEqual([
  //     {
  //       text: 'Run the tests',
  //       completed: false,
  //       id: 1
  //     },
  //     {
  //       text: 'Use Redux',
  //       completed: false,
  //       id: 0
  //     }
  //   ])
 
})