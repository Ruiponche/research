import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.scss'

const PosterCard = ({ poster: { title, thumb_url, author_names, keywords, id }, event }) => {
  const history = useHistory()
  const location = useLocation()
  return (<div className='poster' onClick={() => history.push(`/posters/${id}${location.search}`)}>
    <img alt={title} src={thumb_url} />
    <div className='description'>
      <p className='authors'>{author_names.join(', ')}</p>
      <p>
        <span className='title'>{title}</span>
        <span className='event'>{` ${event}`}</span>
      </p>
      {keywords.map(keyword => <span className='tag'>{keyword}</span>)}
    </div>
  </div>)
}

const PostersGrid = ({ posters, events }) => {
  return <div className='posters-grid'>
    {posters.map(poster => {
      const event = events[poster.event].name
      return < PosterCard poster={poster} event={event} />
    })}
  </div>
}

const mapStateToProps = ({ posters, events }, { page }) => {
  const indexStart = (page - 1) * 24
  const postersSelected = posters.pagesLoaded.length ? Object.values(posters.entities).slice(indexStart, indexStart + 24) : []
  return { posters: postersSelected, events: events.entities }
}

export default connect(mapStateToProps)(PostersGrid)