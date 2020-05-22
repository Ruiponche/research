import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom"
import { getPosterRequest } from 'connection/redux/actions'
import PosterDetail from 'features/posterDetail/PosterDetail/PosterDetail';


function PosterPage({ getPosterRequest }) {
  let { id } = useParams();

  useEffect(() => {
    getPosterRequest({ id })
  }, [getPosterRequest, id]);
  return (<PosterDetail id={id} />)
}

const mapDispatchToProps = { getPosterRequest }

export default connect(null, mapDispatchToProps)(PosterPage)

