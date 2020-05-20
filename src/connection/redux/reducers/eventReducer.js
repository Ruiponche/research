import { ADD_EVENTS } from 'connection/redux/actions/eventActions'


const initialState = {
  entities: {}
}

const eventReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EVENTS:
      return {
        ...state,
        entities: { ...state.entities, ...action.entities }
      }
    default:
      return state
  }
}

export default eventReducers