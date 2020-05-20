import React from 'react'
import { connect } from 'react-redux'
import './style.scss'

const PosterCard = ({ poster: { title, thumb_url, author_names } }) => {
  return (<div className='poster'>
    <img alt={title} src={thumb_url} />
    <div className='description'>
      <span>{title}</span>
      <p>{author_names.map(autor => autor)}</p>
    </div>
  </div>)
}

const PostersGrid = ({ posters }) => {
  return <div className='posters-grid'>
    {posters.map(poster => <PosterCard poster={poster} />)}
  </div>
}

const mapStateToProps = ({ posters }, { page }) => {
  const indexStart = (page - 1) * 24
  const postersSelected = Object.values(posters.entities).slice(indexStart, indexStart + 24)
  return { posters: postersSelected }
}

export default connect(mapStateToProps)(PostersGrid)