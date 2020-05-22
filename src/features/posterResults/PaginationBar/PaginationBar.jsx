import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.scss'

const PaginationBar = ({ pages }) => {
  const history = useHistory()
  var location = useLocation()
  var searchParams = new URLSearchParams(location.search);
  const page = parseInt(searchParams.get('page'))
  const searchTerm = searchParams.get('posters')
  const displayNext = page < pages
  const displayPrev = page > 1

  function navigate({ delta }) {
    history.push(`/search?posters=${searchTerm}&page=${page + delta}`)
  }

  return <div className='pagination-bar'>
    {displayPrev && <button onClick={() => navigate({ delta: -1 })}>❮ Prev</button>}
    {displayNext && <button onClick={() => navigate({ delta: 1 })}>Next ❯</button>}
  </div>
}

const mapStateToProps = ({ posters: { pages } }) => {
  return { pages }
}

export default connect(mapStateToProps)(PaginationBar)