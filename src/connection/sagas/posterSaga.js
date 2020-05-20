import axios from 'axios'
import { takeEvery, put, call } from 'redux-saga/effects'
import { POSTER_SEARCH_API, POSTER_GET_API } from 'connection/constants'
import { SEARCH_POSTERS_REQUEST, GET_POSTER_REQUEST, SEARCH_POSTERS_SUCCESS, GET_POSTER_SUCCESS, ADD_EVENTS } from 'connection/redux/actions'

function searchPosterApi({ query, offset, limit }) {
  return axios.request({
    method: 'get',
    url: `${POSTER_SEARCH_API}?query=${query}&offset=${offset}&limit=${limit}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function getPosterApi({ id }) {
  return axios.request({
    method: 'get',
    url: `${POSTER_GET_API}/${id}`,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

function* searchPosters(action) {
  try {
    const { query, offset, limit } = action
    const { data } = yield call(searchPosterApi, { query, offset, limit });
    const events = data.events.reduce(
      (obj, item) => Object.assign(obj, { [item.id]: item }), {});
    const posters = data.posters.reduce(
      (obj, item) => Object.assign(obj, { [item.id]: item }), {});
    yield put({ type: ADD_EVENTS, entities: events })
    yield put({ type: SEARCH_POSTERS_SUCCESS, entities: posters })
  } catch (error) {
    //
  }
}

function* getPoster(action) {
  try {
    const { id } = action
    const { data } = yield call(getPosterApi, { id });
    yield put({ type: GET_POSTER_SUCCESS, data })
  } catch (error) {
    //
  }
}


export default function* posterSaga() {
  yield takeEvery(SEARCH_POSTERS_REQUEST, searchPosters)
  yield takeEvery(GET_POSTER_REQUEST, getPoster)
}