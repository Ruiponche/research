import { SEARCH_POSTERS_REQUEST, SEARCH_POSTERS_SUCCESS, GET_POSTER_REQUEST, GET_POSTER_SUCCESS } from 'connection/redux/actions/posterActions'


const initialState = {
  loading: { search: false, poster: false },
  searchTerm: null,
  searchResult: null,
  entities: {},
  pagesLoaded: 0
}

const posterReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POSTERS_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, search: true }
      }
    case SEARCH_POSTERS_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, search: false },
        entities: { ...state.entities, ...action.entities }
      }
    case GET_POSTER_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, poster: true }
      }
    case GET_POSTER_SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, poster: false },
        searchResult: action.data
      }
    default:
      return state
  }
}

export default posterReducers
