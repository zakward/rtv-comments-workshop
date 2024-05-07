import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserContext.jsx'
import IssueForm from './IssueForm.jsx'
import IssueList from './IssueList.jsx'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    issues,
    getUserIssues, getAllComments
  } = useContext(UserContext)

  useEffect(() => {
    getUserIssues()
    getAllComments()
  },[])

  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add A Todo</h3>
      <IssueForm/>
      <h3>Your Todos</h3>
      <IssueList issues={issues}/>
    </div>
  )
}