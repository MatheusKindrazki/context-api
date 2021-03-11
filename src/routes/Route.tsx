import React from 'react';

import { Redirect, Route as ReactRoutes, RouteProps } from 'react-router-dom'

import { useAuth } from '../hooks'

type NewRoutesProps  = RouteProps & {
  isPrivate?: boolean
}

const Route: React.FC<NewRoutesProps> = ({ isPrivate, ...rest }) => {

  const { signed } = useAuth()

  if(!signed && isPrivate) {
    return <Redirect  to="/"/>
  }
  
  if(signed && !isPrivate){
    return <Redirect  to="/dash"/>
  }

  return <ReactRoutes {...rest}/> 
}

export default Route;