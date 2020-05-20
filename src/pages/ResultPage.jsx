import React, { Fragment } from 'react'
import PaginationBar from 'features/posterResults/PaginationBar/PaginationBar'
import PostersGrid from 'features/posterResults/PostersGrid/PostersGrid'
import { useLocation } from "react-router-dom"


export default function ResultPage() {
  let location = useLocation();
  var searchParams = new URLSearchParams(location.search);
  const page = searchParams.get('page')
  return (<Fragment>
    <PostersGrid page={page} />
    <PaginationBar page={page} />
  </Fragment>)
}