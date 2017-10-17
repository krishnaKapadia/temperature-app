import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
    case FETCH_WEATHER:
    //Remember to never directly modify the state, so in this case we use concat to create a new array and return it with our additions
      return state.concat([action.payload.data]); // Same as [ action.payload.data, ...state]. Returns a copy of the state with the new data added
  }

  return state;
}
