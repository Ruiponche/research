import { SEARCH_POSTERS_REQUEST, SEARCH_POSTERS_SUCCESS, GET_POSTER_REQUEST, GET_POSTER_SUCCESS } from 'connection/redux/actions/posterActions'


const initialState = {
  loading: { search: false, poster: false },
  searchTerm: null,
  entities: {},
  pagesLoaded: [],
  pages: 0
}

const posterReducers = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_POSTERS_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, search: true }
      }
    case SEARCH_POSTERS_SUCCESS:
      const prevEntities = action.searchTerm === state.searchTerm ? state.entities : {}
      const pagesLoaded = [...new Set([...[...state.pagesLoaded, action.page]])]

      return {
        ...state,
        loading: { ...state.loading, search: false },
        searchTerm: action.searchTerm,
        pagesLoaded,
        entities: { ...prevEntities, ...action.entities },
        pages: action.pages
      }
    case GET_POSTER_REQUEST:
      return {
        ...state,
        loading: { ...state.loading, poster: true }
      }
    case GET_POSTER_SUCCESS:
      const newPoster = Object.keys(state.entities).length ? { ...state.entities[action.id], paper_abstract: action.poster.paper_abstract } : action.poster
      return {
        ...state,
        loading: { ...state.loading, poster: false },
        entities: {
          ...state.entities,
          [action.id]: { ...newPoster }
        }
      }
    default:
      return state
  }
}

export default posterReducers
