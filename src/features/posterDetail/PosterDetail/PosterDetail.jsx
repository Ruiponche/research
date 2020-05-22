import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import './style.scss'

const PosterDetail = ({ poster }) => {
  const [abstractOpen, setAbstractOpen] = useState(true)
  if (!poster) return null

  const { title, thumb_url_large } = poster

  return <div className='poster-detail'>
    {poster.paper_abstract && <div className='abstract'>
      {abstractOpen
        ? <Fragment>
          <button onClick={() => setAbstractOpen(false)}>Hide Abstract</button><br /><p>{poster.paper_abstract}</p>
        </Fragment>
        : <button onClick={() => setAbstractOpen(true)}>See Abstract</button>
      }
    </div>}
    <a href={thumb_url_large}>
      <img alt={title} src={thumb_url_large} />
    </a>
  </div>
}

const mapStateToProps = ({ posters: { entities } }, { id }) => {
  const posterSelected = entities[id]
  return { poster: posterSelected }
}

export default connect(mapStateToProps)(PosterDetail)