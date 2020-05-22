export const SEARCH_POSTERS_REQUEST = 'SEARCH_POSTERS_REQUEST'
export const SEARCH_POSTERS_SUCCESS = 'SEARCH_POSTERS_SUCCESS'
export const GET_POSTER_REQUEST = 'GET_POSTER_REQUEST'
export const GET_POSTER_SUCCESS = 'GET_POSTER_SUCCESS'

export function searchPostersRequest({ searchTerm, offset, limit, page }) {
  return {
    type: SEARCH_POSTERS_REQUEST,
    query: searchTerm,
    offset,
    limit,
    page
  }
}

export function getPosterRequest({ id }) {
  return {
    type: GET_POSTER_REQUEST,
    id
  }
}

